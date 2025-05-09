# StackForge Monorepo Template

Welcome to StackForge! This is a comprehensive monorepo template designed to help you kickstart your full-stack application development using [SST (Serverless Stack Toolkit)](https://sst.dev/). It provides a structured and scalable foundation for building modern web and mobile experiences, all powered by Bun.

## Core Philosophy

StackForge aims to simplify the complexities of modern application development by:

*   **Accelerating Setup:** Get a full-stack environment running locally with a single command.
*   **Leveraging Serverless with Bun:** Built with SST for easy deployment and management of serverless infrastructure on AWS, with Bun providing a high-performance runtime for your API and services.
*   **Promoting Best Practices:** A well-organized monorepo structure with clear separation of concerns.
*   **Integrated Tooling:** Comes pre-configured with essential tools for authentication, payments, database management, and more.

## Key Features

*   **[SST](https://sst.dev/):** For defining infrastructure, local development, and seamless deployments.
*   **[Bun](https://bun.sh/):** Used as the primary JavaScript runtime for the API, scripts, and package management, offering exceptional speed.
*   **[Next.js](https://nextjs.org/):** Powers the `platform` web application, offering server-side rendering, static site generation, and a rich frontend experience.
*   **[Expo](https://expo.dev/):** Used for the `mobile` application, enabling rapid local development and iteration for iOS and Android (local development environment only).
*   **[Hono](https://hono.dev/):** A lightweight and fast web framework, specifically utilized within the authentication service (`packages/functions` or `packages/core/auth`) for auth-related routes. The main API (`apps/api`) leverages Bun's native HTTP server or other Bun-compatible routing.
*   **[OpenAuth](https://openauth.dev/):** Integrated for robust and flexible authentication.
*   **[Polar](https://polar.sh/):** SDKs included for integrating payments into your `platform` application.
*   **[Drizzle ORM](https://orm.drizzle.team/):** A TypeScript ORM for database interactions, providing type safety and a great developer experience.
*   **Modular Packages:** Shared logic for `core` functionalities and `functions` to keep your codebase DRY and maintainable.
*   **Tailwind CSS & Radix UI:** Pre-configured in the `platform` app for a modern UI.
*   **VPC & Secure Infrastructure:** Resources are deployed within a Virtual Private Cloud (VPC) on AWS for enhanced security.

## Project Structure

```
stackforge/
├── apps/
│   ├── api/            # Backend API (Bun, SST)
│   ├── mobile/         # Expo mobile application (local development only)
│   └── platform/       # Next.js web application
├── packages/
│   ├── core/           # Shared business logic, DB schema, auth utilities, types
│   └── functions/      # Serverless functions (e.g., Hono for OpenAuth callbacks)
├── infra/              # SST infrastructure definitions
│   ├── api.ts
│   ├── auth.ts
│   ├── database.ts     # Defines local DB for sst dev vs. provisioned for stages
│   ├── expo.ts         # Configuration for running Expo locally via SST
│   ├── orm.ts          # ORM/migration related infra (if any)
│   ├── platform.ts
│   ├── secrets.ts      # SST Secret constructs (e.g., GithubClientId)
│   ├── vpc.ts
│   └── ...
├── drizzle/            # Drizzle ORM migration files
├── bun.lockb
├── drizzle.config.ts   # Drizzle ORM configuration
├── package.json        # Root package.json with workspace scripts
├── sst.config.ts       # Main SST configuration file
└── tsconfig.json
```

## Prerequisites

Before you begin, ensure you have the following installed and configured:

1.  **[Bun](https://bun.sh/docs/installation):** Follow the official installation guide for your operating system.
2.  **[AWS Account & Configured AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html):**
    *   SST requires AWS credentials to be configured, even for local development. This is because it needs to interact with your AWS account to manage resources like SST Secrets, provision the database via the tunnel, and simulate the cloud environment locally.
    *   Ensure your AWS CLI is configured with a profile. The `sst.config.ts` in this template is pre-configured to use a profile named `slashforge`. You can change this in `sst.config.ts` or set up your default AWS profile.
    ```bash
    aws configure --profile slashforge
    # Or configure your default profile:
    # aws configure
    ```
3.  **SST Tunnel (One-time Setup):**
    The SST Tunnel is required to connect to resources within your VPC, such as the database, from your local machine. Install it by running:
    ```bash
    sudo sst tunnel install
    ```
    This command only needs to be run once per system.

## Getting Started

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/stackforge.git # Replace with your repository URL
    cd stackforge
    ```

2.  **Install Dependencies:**
    ```bash
    bun install
    ```

## SST Secrets Management

This project utilizes [SST Secrets](https://docs.sst.dev/config#secrets) for managing sensitive information. **We do not use `.env` files.** Secrets are securely stored and injected into your application components by SST.

**Naming Convention:** Secrets are defined and referenced in PascalCase (e.g., `GithubClientId`), as seen in `stackforge/infra/secrets.ts`.

**Setting Secrets:**
Use the SST CLI to set secrets. For example:
```bash
# Set a secret for all stages (will prompt for value if not provided)
bun sst secrets set GithubClientId

# Set a secret and provide the value directly (recommended for CI/CD or scripting)
bun sst secrets set GithubClientSecret "your_github_client_secret_value"

# Set a secret for a specific stage
bun sst secrets set PolarAccessToken "your_polar_token" --stage prod
```

**Essential Secrets to Configure:**
Based on `stackforge/infra/secrets.ts`, you'll likely need to set the following:
*   `GithubClientId`
*   `GithubClientSecret`
*   `PolarAccessToken`
    (Add any other secrets defined in `stackforge/infra/secrets.ts` or required by your OpenAuth providers.)

## Local Development with SST

StackForge provides a streamlined local development experience using `bun sst dev`.

**Understanding Local Database Setup:**
As defined in `stackforge/infra/database.ts`, when you run `bun sst dev` and the current stage is *not* one of the `DEPLOYED_STAGES` (e.g., 'prod', 'dev'), SST will configure itself to use a local PostgreSQL instance (e.g., running on `localhost:5437`). If the stage *is* a deployed stage, it will expect to connect to the provisioned RDS instance via the SST tunnel.

**Start the Development Environment:**
```bash
bun sst dev
```
This command will:
*   Start the Next.js development server for the `platform` application.
*   Start the `api` backend service using Bun.
*   Start the Expo development server for the `mobile` app (via `stackforge/infra/expo.ts`). Environment variables (from SST outputs and Secrets) are passed to Expo.
*   Automatically start the SST Tunnel if connecting to local resources managed by SST that mimic cloud resources (like the local dev database configuration).
*   Watch for file changes across your applications and packages for live-reloading.
*   Make SST outputs (like your live API endpoint URL) available.

**Accessing Services:**
*   **Web Application (`platform`):** Typically `http://localhost:3000`.
*   **API (`api`):** URL provided in the `sst dev` output.
*   **Mobile App (`mobile`):** Follow Expo CLI instructions (scan QR code, use emulator).

## Database Migrations (Drizzle ORM)

Database schema changes are managed using Drizzle Kit.

1.  **Define Your Schema:** Modify schema files in `packages/core/db/schema/`.

2.  **SST Tunnel for Migrations:**
    *   When running `bun sst dev` with the local database configuration (see `stackforge/infra/database.ts`), the necessary connections are typically handled.
    *   For migrating against a **remote/deployed database** (e.g., your `dev` or `prod` stage RDS), you **must** start the SST Tunnel for that specific stage first.
    ```bash
    # Example for 'dev' stage
    bun dev:tunnel
    # or generically: sst tunnel --stage <your_stage_name>
    ```
    The tunnel must remain running in a separate terminal while you perform migration operations against the remote database.

3.  **Generating Migrations:**
    *   **Against Local/Default Config (during `sst dev`):**
        ```bash
        bun db generate
        ```
    *   **Against a Remote Stage (e.g., `dev`):**
        Ensure the tunnel for the stage is running (`bun dev:tunnel`). Then:
        ```bash
        bun dev:db generate
        ```

4.  **Applying Migrations:**
    *   **Against Local/Default Config (during `sst dev`):**
        ```bash
        bun db migrate
        ```
    *   **Against a Remote Stage (e.g., `dev`):**
        Ensure the tunnel for the stage is running (`bun dev:tunnel`). Then:
        ```bash
        bun dev:db migrate
        ```
    *   **Note on Deployed Environments:** While you can manually apply migrations to deployed stages using the tunnel and scripts above, SST also supports running migration scripts automatically during deployment using `Job` or `Script` resources in your `infra` definitions. This template primarily focuses on local-first and script-driven remote migrations.

Refer to `drizzle.config.ts` for Drizzle Kit settings and `package.json` for the full `db:*` and `dev:db:*` scripts.

## SST Tunnel In-Depth

The SST Tunnel is essential for:
*   Allowing your local machine to securely access resources (like your PostgreSQL database) deployed within your AWS VPC for specific stages.
*   Facilitating local development against cloud-like resources when `sst dev` is configured for it.

**Key Commands:**
*   **One-time Install:** `sudo sst tunnel install`
*   **Automatic with `sst dev`:** When `bun sst dev` starts, it often manages tunnel connections implicitly for the local development stage or local resources.
*   **Manual Start for a Stage:**
    ```bash
    # For the 'dev' stage (uses script from package.json)
    bun dev:tunnel

    # Generic command for any stage
    sst tunnel --stage <your_stage_name>
    ```
    Keep the tunnel running in a separate terminal when performing operations (like database migrations) against that stage's resources.

## Deployment

Deploy your application to AWS using SST.

1.  **Ensure Secrets are Set for the Target Stage:**
    ```bash
    bun sst secrets set MySecret "my_production_value" --stage prod
    ```

2.  **Deploy to a Stage:**
    ```bash
    # Deploy to your development stage (using script from package.json)
    bun deploy # This script typically points to 'sst deploy --stage dev'

    # Deploy to a specific stage, like production
    bun sst deploy --stage prod
    ```

*   The `mobile` application (Expo) is configured for **local development only** via `stackforge/infra/expo.ts` and is not part of the standard SST deployment process.
*   SST will package your applications, provision AWS infrastructure, and deploy your code.

## Key Configuration Files

*   **`stackforge/sst.config.ts`:** Main SST configuration, defines infrastructure and app composition.
*   **`stackforge/drizzle.config.ts`:** Drizzle ORM and Drizzle Kit configuration.
*   **`stackforge/infra/*`:** Detailed SST construct definitions (VPC, database, API, auth, etc.).
*   **`stackforge/package.json`:** Root workspace configuration, scripts for common tasks.

## Contributing

(Placeholder for contribution guidelines.)

## Further Information

*   **[SST Documentation](https://docs.sst.dev/)**
*   **[Bun Documentation](https://bun.sh/docs)**
*   **[Next.js Documentation](https://nextjs.org/docs)**
*   **[Expo Documentation](https://docs.expo.dev/)**
*   **[Polar Documentation](https://polar.sh/docs)**
*   **[OpenAuth Documentation](https://openauth.dev/getting-started/introduction)**
*   **[Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)**
*   **[Hono Documentation](https://hono.dev/getting-started/basic)**

Happy building with StackForge!