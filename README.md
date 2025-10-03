# CS50XTürkiye

[![DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/cs50xturkiye/cs50xturkiye.com)

## Overview

**CS50XTürkiye** is an open-source educational platform providing CS50X course content in Turkish and English, along with structured learning materials for computer science and programming education.

**Live Site**: [cs50xturkiye.com](https://cs50xturkiye.com)

## Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone & install
git clone https://github.com/cs50xturkiye/cs50xturkiye.git
cd cs50xturkiye
bun install

# Start development
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
bun dev          # Development server (Turbopack)
bun run build    # Production build
bun start        # Production server
bun lint         # Lint & format check
bun test         # Run tests
bun clean        # Clean dependencies
```

## Development

### Project Documentation

Detailed technical documentation available on [DeepWiki](https://deepwiki.com/cs50xturkiye/cs50xturkiye.com) - covers architecture, design decisions, and development patterns.

### Adding Content

1. Navigate to appropriate level in `packages/contents/subject/`
2. Create MDX files following existing structure
3. Update data files in `_data/` directories
4. Test locally with `bun dev`

### Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/name`
3. Make changes following established patterns
4. Run `bun lint` and `bun test`
5. Submit pull request

## License

**AGPL-3.0** - Copyleft license requiring source disclosure for network use.

For commercial licensing inquiries: <cs50xturkiye@gmail.com>

## Contact

**CS50XTürkiye Team** - [@cs50xturkiye](https://twitter.com/cs50xturkiye) - <cs50xturkiye@gmail.com>

---

Built with ❤️ for learners everywhere
