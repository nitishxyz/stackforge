FROM oven/bun

COPY bun.lock .
COPY apps/api/package.json .

RUN bun install

COPY apps/api/ .

EXPOSE 3030
CMD ["bun", "index.ts"]