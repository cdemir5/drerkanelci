import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { localePrefix } from "@/lib/site";

const BLOB_HOST = /\.public\.blob\.vercel-storage\.com$/;

/** react-markdown passes its AST `node`; keep it off the DOM element. */
function withoutNode<T extends { node?: unknown }>(props: T): Omit<T, "node"> {
  const { node, ...rest } = props;
  void node;
  return rest;
}

function buildComponents(locale: string): Components {
  const prefix = localePrefix(locale);

  return {
    // The page already has an <h1>; demote any "#" headings in the body.
    h1: "h2",

    a: (allProps) => {
      const { href = "", children, ...props } = withoutNode(allProps);
      // Internal links are written with Turkish paths; add the locale prefix.
      if (href.startsWith("/") && !href.startsWith("//")) {
        const localized =
          prefix && !href.startsWith(`${prefix}/`) ? `${prefix}${href}` : href;
        return (
          <a href={localized} {...props}>
            {children}
          </a>
        );
      }
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a href={href} target="_blank" rel="nofollow noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },

    // Only images uploaded to our own Blob store are rendered.
    img: ({ src, alt }) => {
      try {
        const url = new URL(String(src));
        if (url.protocol !== "https:" || !BLOB_HOST.test(url.hostname)) return null;
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={url.toString()} alt={alt ?? ""} loading="lazy" />;
      } catch {
        return null;
      }
    },

    table: (props) => (
      <div className="overflow-x-auto">
        <table {...withoutNode(props)} />
      </div>
    ),
  };
}

/**
 * Renders post content. Raw HTML is dropped (no rehype-raw), so content
 * coming from the Claude connector cannot inject scripts or markup.
 */
export default function Markdown({
  content,
  locale,
}: {
  content: string;
  locale: string;
}) {
  return (
    <div className="article article-lg max-w-none text-gray-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={buildComponents(locale)}
        skipHtml
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
