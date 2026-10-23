# Century Immencity — Frontend

The frontend application for the [Immencity corporate website](https://www.immencity.co.in/), built with Next.js, React, TypeScript, and Tailwind CSS. The website presents company information, vision and objectives, management details, and investor-relations resources.

**Netlify Website:** https://immencity.netlify.app/
**Repository:** https://github.com/rohitdevc/century-immencity-frontend

## Overview

This project delivers a responsive corporate website for Immencity Office Parks Private Limited. It retrieves website content through application services and renders the homepage using reusable React components.

### Key Features

- **Dynamic homepage content** — banner slider, company introduction, and objectives.
- **Company information** — vision, mission, values, and corporate overview.
- **Management section** — directors and management details.
- **Investor relations** — categorized disclosures, reports, policies, and downloadable documents.
- **Interactive UI** — responsive navigation, image sliders, expandable content, and smooth scrolling animations.
- **SEO metadata** — page title, description, canonical URL, Open Graph, and Twitter card metadata.
- **Responsive design** — layouts styled with Tailwind CSS.
- **Containerized deployment** — Docker and Docker Compose support.
- **Automated deployment** — GitHub Actions workflow for production deployment.
- **Netlify Deployment** — Hosted on Netlify with deployment-aware Next.js configuration.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and application routing |
| React 19 | User interface |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling and responsive layouts |
| GSAP | Scroll-triggered animations |
| Swiper | Interactive image sliders |
| React Icons | Icon components |
| `html-react-parser` | Rendering HTML content |
| `nl2br` | Newline formatting |
| ESLint | Code linting |
| Docker | Containerized production deployment |
| npm | Package management |

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js 22 or a compatible version
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rohitdevc/century-immencity-frontend.git
cd century-immencity-frontend
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Create a `.env` file in the project root. Review the service modules under `lib/` to identify the API configuration required for your environment.

The homepage component also references the following public environment variable:

```env
NEXT_PUBLIC_PATH=
```

Set this according to the application's asset-path configuration. Use the appropriate API endpoint and other required settings for your development or production environment.

> **Note:** The complete environment-variable list and required values should be confirmed against the service modules and deployment environment. Do not commit credentials, private keys, or other secrets to the repository.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:2973](http://localhost:2973) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server on port `2973` |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server on port `2973` |
| `npm run lint` | Runs ESLint |

## Production Build

Build the application and start the production server:

```bash
npm run build
npm run start
```

The production server listens on port `2973` by default through the project's npm script.

## Docker Deployment

The repository includes a multi-stage Dockerfile configured for a production build using Node.js 22 Alpine and Next.js standalone output.

### Build the Docker image

```bash
docker build -t century-immencity .
```

### Run the container

Ensure the required `.env` file is available, then run:

```bash
docker run -d \
  --name century-immencity \
  --env-file .env \
  -p 2973:2973 \
  --restart unless-stopped \
  century-immencity
```

The application will be available on port `2973` of the host.

### Docker Compose

The repository also includes `docker-compose.yml`, which defines the `immencity` service and maps host port `2973` to container port `2973`.

Start the service:

```bash
docker compose up -d --build
```

View logs:

```bash
docker compose logs -f immencity
```

Stop the service:

```bash
docker compose down
```

Ensure the `.env` file and any required API configuration are in place before starting the container.

## Project Structure

```text
century-immencity-frontend/
├── .github/
│   └── workflows/       # Production deployment workflow
├── app/                  # Next.js App Router and page metadata
├── components/           # Homepage, header, footer, and UI components
├── lib/                  # Application services and supporting logic
├── public/               # Static assets, icons, and images
├── types/                # TypeScript type definitions
├── Dockerfile            # Production Docker image
├── docker-compose.yml    # Container orchestration
├── next.config.ts        # Next.js configuration
├── package.json          # Scripts and dependencies
├── package-lock.json     # npm dependency lockfile
├── postcss.config.mjs    # PostCSS configuration
├── eslint.config.mjs     # ESLint configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

The repository contains a GitHub Actions workflow that initiates production deployment when code is pushed to the `main` branch. The workflow runs on a self-hosted runner and pulls the latest code into the configured deployment directory.

Before deploying, verify that:

- The self-hosted runner is online and properly secured.
- The repository variable `PRODUCTION_DEPLOY_PATH` points to the intended application directory.
- The server has the required Git access and deployment permissions.
- Environment variables are configured securely on the deployment server.
- The application is rebuilt and restarted using the deployment process appropriate for the environment.

Protect the production branch and use a dedicated, least-privilege deployment key. Never store private SSH keys or secrets in source code.

## Development Guidelines

- Use TypeScript for new components and application logic.
- Keep reusable UI elements in `components/`.
- Keep API and data-fetching logic in `lib/`.
- Maintain shared data contracts in `types/`.
- Follow the existing Tailwind CSS conventions.
- Run `npm run lint` and `npm run build` before submitting changes.
- Keep environment-specific configuration outside committed source files.

## License

No license terms are specified in this README. Refer to the repository owner for licensing and reuse permissions.

---

**Maintained by:** [rohitdevc](https://github.com/rohitdevc)