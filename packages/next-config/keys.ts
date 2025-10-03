import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const keys = () =>
  createEnv({
    server: {
      ANALYZE: z.string().optional(),
      // Added by Vercel
      NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
    },
    client: {
      NEXT_PUBLIC_VERSION: z.string().default("1.0.0"),
      NEXT_PUBLIC_APP_URL: z.string().default("https://cs50xturkiye.com"),
      NEXT_PUBLIC_API_URL: z.string().optional(),
      NEXT_PUBLIC_MCP_URL: z.string().optional(),
    },
    runtimeEnv: {
      ANALYZE: process.env.ANALYZE,
      NEXT_PUBLIC_VERSION: process.env.NEXT_PUBLIC_VERSION,
      NEXT_RUNTIME: process.env.NEXT_RUNTIME,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_MCP_URL: process.env.NEXT_PUBLIC_MCP_URL,
    },
  });
