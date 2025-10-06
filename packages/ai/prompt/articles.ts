import { createPrompt } from "@repo/ai/prompt/utils";

export function CS50xTürkiyeArticles() {
  return createPrompt({
    taskContext: `
      # getArticles Tool

      Use this tool to get list of articles from CS50xTürkiye Platform. All articles created by CS50xTürkiye Team based on scientific research.
      Articles are not up to date, so it is not serve as current events.
      These articles provides the title, url, slug, and locale of the articles.
      Each element is unique and can be used for getContent tool by using the locale and slug for getting the content.
    `,

    toolUsageGuidelines: `
      ## When to use this tool

      1. You are in a page where the slug contains \`articles\`
      2. The user asks to find articles from CS50xTürkiye Platform  
      3. You want to use getContent tool, but do not have verified current page information (locale and slug)

      ## When NOT to use this tool

      Skip using this tool when:

      1. The user asks to find articles from CS50xTürkiye Platform but you already have the list of articles
      2. The user asks up to date or current events or scientific research that not related to CS50xTürkiye's articles category

      ## getArticles tool capabilities

      After getting the list of articles, the getArticles allows you to:

      - Use getContent tool by using \`locale\` and \`slug\` field from each element in the list
      - Tell helpful information about the articles to the user
    `,

    detailedTaskInstructions: `
      ## Best Practices

      - Get the list of articles from CS50xTürkiye Platform before using getContent tool or when user asks to find articles from CS50xTürkiye Platform
      - Tell the users about the articles using the title of the article and create a link to the article page using the \`url\` field from each element in the list
      - Use the getContent tool if you think the user wants to know more about some particular article from the list
      - If list returned is empty, tell the users that CS50xTürkiye does not have any articles that match the user's question
    `,

    examples: `
      ## Examples of When to Use This Tool

      <example>
        User: Do you have any articles?
        Assistant: Sure, I'll get the articles from CS50xTürkiye for you.
        *Calls getArticles tool*
      </example>
    `,

    finalRequest: `
      ## Summary

      Use getArticles tool when you are in a page where the slug contains \`articles\` and the user asks to find articles from CS50xTürkiye Platform.
      Treat the articles as a source of information to use the getContent tool for the user's question.
    `,
  });
}
