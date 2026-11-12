This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Blog

Posts are written with Claude through a claude.ai custom connector (MCP) that
only saves **drafts**. They are reviewed and published in `/admin`.

- Public pages: `app/[locale]/blog` (list) and `app/[locale]/blog/[slug]` (post).
- Admin panel: `app/admin` (password login, edit, preview, publish).
- Claude connector: `app/api/mcp/[token]/route.ts`. Tools are in `lib/mcp/tools.ts`
  and the writing rules Claude follows are in `lib/blog/guidelines.ts`.
- Data: Neon Postgres (`lib/blog/queries.ts`, `lib/blog/mutations.ts`). Public reads
  are cached with the `blog` tag, and publish/unpublish revalidates that tag.

### Setup (once)

1. In Vercel → Storage, create a **Neon Postgres** database and a **Blob** store,
   then connect both to this project. This adds `DATABASE_URL` and
   `BLOB_READ_WRITE_TOKEN`.
2. Add these environment variables:

   | Variable | Value |
   | --- | --- |
   | `ADMIN_PASSWORD` | Password for `/admin` |
   | `ADMIN_SESSION_SECRET` | Random string, 32+ characters |
   | `MCP_SECRET` | Random string, 32+ characters. It is part of the connector URL, so keep it secret. |

   Generate random values with `openssl rand -hex 32`.
3. Run `db/schema.sql` once in the Neon SQL Editor. It is safe to re-run.
4. Redeploy, sign in at `/admin`, open **Claude Bağlayıcısı**, and add the URL shown
   there in claude.ai → Settings → Connectors → Add custom connector. The URL must
   not redirect, and Vercel Deployment Protection must not cover it.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
