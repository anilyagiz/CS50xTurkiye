export function GET() {
  const terminalOutput = `❤️ CS50xTürkiye MCP Server ❤️

[${new Date().toLocaleTimeString()}] INFO: Welcome to CS50xTürkiye MCP Server!
[${new Date().toLocaleTimeString()}] INFO: Your gateway to comprehensive multilingual educational content.

[${new Date().toLocaleTimeString()}] INFO: MCP Server initialized successfully
[${new Date().toLocaleTimeString()}] INFO: Ready to serve educational content.
[${new Date().toLocaleTimeString()}] INFO: Connection established - Happy learning!

[${new Date().toLocaleTimeString()}] INFO: Website: https://CS50xTürkiye.com
[${new Date().toLocaleTimeString()}] INFO: GitHub: https://github.com/CS50xTürkiyeai/CS50xTürkiye.com
[${new Date().toLocaleTimeString()}] INFO: Documentation: https://docs.CS50xTürkiye.com

CS50xTürkiye-mcp-server:~$ _
`;

  return new Response(terminalOutput, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
