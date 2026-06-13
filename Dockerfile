FROM oven/bun:1.3.13-alpine AS deps

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM deps AS build

COPY . .
RUN bun --bun run build

FROM oven/bun:1.3.13-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./package.json
COPY --from=build /app/dist ./dist
COPY server.mjs ./server.mjs

EXPOSE 3000

CMD ["bun", "server.mjs"]
