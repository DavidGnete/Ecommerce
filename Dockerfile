# -----------------------------
# Etapa 1: Construcción (build)
# -----------------------------
FROM node:22 AS builder

WORKDIR /app

# Copiar package.json y lock
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Instalar pnpm global (Next.js lo usa internamente)
RUN npm install -g pnpm

# Copiar todo el código fuente
COPY . .

# Compilar Next.js en modo producción
RUN npm run build


# -----------------------------
# Etapa 2: Producción (runtime)
# -----------------------------
FROM node:22

WORKDIR /app

# Copiar archivos compilados desde la etapa anterior
COPY --from=builder /app ./

# ✅ Instalar pnpm también en runtime para evitar el error del binario SWC
RUN npm install -g pnpm

# Exponer el puerto
EXPOSE 3000

# Iniciar la app
CMD ["npm", "start"]
