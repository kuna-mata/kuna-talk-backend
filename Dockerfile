FROM node:22-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM builder

WORKDIR /app
COPY package*.json ./
ENV PORT=3000
ENV NODE_ENV=Production
RUN npm install
COPY --from=builder /app/dist ./dist
EXPOSE ${PORT}

CMD ["npm", "run", "start"]
