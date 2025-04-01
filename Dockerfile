FROM node:18-alpine AS base

# Instala dependências necessárias
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json ./
RUN npm ci

# Builder - compila a aplicação
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Define as variáveis de ambiente para build
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BASE_URL=https://lp.willaksenen.com.br
ENV NEXT_PUBLIC_BASE_PATH=/presente

# Compila o projeto
RUN npm run build

# Runner - imagem final de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_PUBLIC_BASE_URL=https://lp.willaksenen.com.br
ENV NEXT_PUBLIC_BASE_PATH=/presente

# Copia os arquivos necessários
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"] 