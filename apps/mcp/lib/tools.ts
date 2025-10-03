import { GetContentSchema, GetContentsSchema } from "./schema";

export const tools = {
  getContents: {
    name: "get_contents",
    description:
      "Retrieve educational contents from CS50xTürkiye platform. Returns a structured list of educational materials containing metadata like titles, descriptions, authors, slugs, and URLs.",
    parameters: GetContentsSchema.shape,
  },
  getContent: {
    name: "get_content",
    description:
      "Retrieve a specific content from CS50xTürkiye platform. Returns the mdx of the content.",
    parameters: GetContentSchema.shape,
  },
} as const;
