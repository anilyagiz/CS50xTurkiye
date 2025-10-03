import {
  anonymousClient,
  apiKeyClient,
  organizationClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

// Create auth client with basic plugins to avoid module conflicts
export const authClient = createAuthClient({
  plugins: [
    anonymousClient(),
    organizationClient(),
    apiKeyClient(),
  ],
});
