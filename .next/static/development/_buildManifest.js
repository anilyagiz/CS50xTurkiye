self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/:path*.md",
        "destination": "/llms.mdx/:path*"
      },
      {
        "source": "/:path*.mdx",
        "destination": "/llms.mdx/:path*"
      },
      {
        "source": "/:path*/llms.txt",
        "destination": "/llms.mdx/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()