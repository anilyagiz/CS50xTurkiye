"use client";

import type { ReactNode } from "react";
import { env } from "@/env";
import { authClient } from "@/lib/auth/client";

// Only initialize Convex client if URL is available
const convex = env.NEXT_PUBLIC_CONVEX_URL
  ? (() => {
      try {
        const { ConvexReactClient } = require("convex/react");
        return new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL, {
          expectAuth: true,
        });
      } catch (error) {
        console.warn("Convex not available, continuing without Convex provider");
        return null;
      }
    })()
  : null;

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  // If Convex is not configured, just render children without provider
  if (!convex) {
    return <>{children}</>;
  }

  try {
    const { ConvexBetterAuthProvider } = require("@convex-dev/better-auth/react");
    return (
      <ConvexBetterAuthProvider authClient={authClient} client={convex}>
        {children}
      </ConvexBetterAuthProvider>
    );
  } catch (error) {
    console.warn("ConvexBetterAuthProvider not available, continuing without it");
    return <>{children}</>;
  }
}
