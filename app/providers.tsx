"use client";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { UNAUTHED_ERR_MSG } from "@shared/const";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { ThemeProvider } from "next-themes";
import { useState, type ReactNode } from "react";
import superjson from "superjson";

function redirectToLoginIfUnauthorized(error: unknown) {
  if (!(error instanceof TRPCClientError)) return;
  if (typeof window === "undefined") return;
  if (error.message !== UNAUTHED_ERR_MSG) return;

  window.location.href = getLoginUrl();
}

function createQueryClient() {
  const queryClient = new QueryClient();

  queryClient.getQueryCache().subscribe(event => {
    if (event.type !== "updated" || event.action.type !== "error") return;
    redirectToLoginIfUnauthorized(event.query.state.error);
  });

  queryClient.getMutationCache().subscribe(event => {
    if (event.type !== "updated" || event.action.type !== "error") return;
    redirectToLoginIfUnauthorized(event.mutation.state.error);
  });

  return queryClient;
}

function createTrpcClient() {
  return trpc.createClient({
    links: [
      httpBatchLink({
        url: "/api/trpc",
        transformer: superjson,
        fetch(input, init) {
          return globalThis.fetch(input, {
            ...(init ?? {}),
            credentials: "include",
          });
        },
      }),
    ],
  });
}

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(createQueryClient);
  const [trpcClient] = useState(createTrpcClient);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ErrorBoundary>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </QueryClientProvider>
        </trpc.Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
