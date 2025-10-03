import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const keys = () =>
  createEnv({
    server: {
      CONVEX_URL: z.string().optional(),
      CONVEX_SITE_URL: z.url().optional(),
      SITE_URL: z.url().optional(),
      AUTH_GOOGLE_ID: z.string().optional(),
      AUTH_GOOGLE_SECRET: z.string().optional(),
    },
    client: {
      NEXT_PUBLIC_CONVEX_URL: z.string().optional(),
      NEXT_PUBLIC_CONVEX_SITE_URL: z.url().optional(),
    },
    runtimeEnv: {
      CONVEX_URL: process.env.CONVEX_URL,
      CONVEX_SITE_URL: process.env.CONVEX_SITE_URL,
      SITE_URL: process.env.SITE_URL,
      AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
      AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
      NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
      NEXT_PUBLIC_CONVEX_SITE_URL: process.env.NEXT_PUBLIC_CONVEX_SITE_URL,
    },
  });
