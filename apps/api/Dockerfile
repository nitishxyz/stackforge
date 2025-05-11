FROM oven/bun:1.2.8

# Create and set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package.json bun.lock ./
COPY apps/api/package.json ./apps/api/
COPY packages/core/package.json ./packages/core/

# Install dependencies
RUN bun install

# Copy remaining source code
COPY apps/api/ ./apps/api/
COPY packages/core/ ./packages/core/

EXPOSE 3030
CMD ["bun", "apps/api/index.ts"]
