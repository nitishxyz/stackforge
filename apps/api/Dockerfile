FROM oven/bun

COPY bun.lock .
COPY package.json .

COPY apps/api/ apps/api
COPY packages/core/ packages/core


RUN bun install


EXPOSE 3030
CMD ["bun", "apps/api/index.ts"]
