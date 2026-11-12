import { createHash, timingSafeEqual } from "crypto";
import { createMcpHandler } from "mcp-handler";
import { registerBlogTools } from "@/lib/mcp/tools";
import { MCP_SERVER_INSTRUCTIONS } from "@/lib/blog/guidelines";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const handler = createMcpHandler(registerBlogTools, {
  serverInfo: { name: "drerkanelci-blog", version: "1.0.0" },
  instructions: MCP_SERVER_INSTRUCTIONS,
});

function sameSecret(candidate: string, secret: string): boolean {
  const a = createHash("sha256").update(candidate).digest();
  const b = createHash("sha256").update(secret).digest();
  return timingSafeEqual(a, b);
}

/**
 * The connector URL is https://www.drerkanelci.com/api/mcp/<MCP_SECRET>
 * (with www: claude.ai does not follow the apex → www redirect).
 * Tools can only create/update drafts, so a secret URL is enough here.
 * Wrong token → 404 (never 401: a 401 makes claude.ai start OAuth discovery).
 */
function isAuthorized(request: Request, token: string): boolean {
  const secret = process.env.MCP_SECRET;
  if (!secret || secret.length < 32) return false;
  if (sameSecret(token, secret)) return true;
  const bearer = request.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
  return Boolean(bearer && sameSecret(bearer, secret));
}

async function route(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
): Promise<Response> {
  const { token } = await params;
  if (!isAuthorized(request, token)) {
    return new Response("Not Found", { status: 404 });
  }
  return handler(request);
}

export { route as GET, route as POST, route as DELETE };
