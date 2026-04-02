import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../../../server/routers";
import { createContext } from "../../../../server/_core/nextContext";

export const runtime = "nodejs";

const handler = (request: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext,
    onError(errorInfo) {
      console.error(
        `[tRPC] ${errorInfo.path ?? "<no-path>"} failed`,
        errorInfo.error
      );
    },
  });

export { handler as GET, handler as POST };
