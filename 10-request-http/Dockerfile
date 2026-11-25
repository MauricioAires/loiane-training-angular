FROM node:lts-alpine AS angular
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Segunda fase, utilizar o servidor NGINX (Servidor HTTP)
# Angular/React/Static
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular /app/dist/10-request-http/browser /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf


## docker build -t [image-name] .
# docker build -t curso-angular .
## mapear a porta 8081 do computado para a porta 80 do nginx
# docker run -p 8081:80 curso-angular

# docker-compose é uma receita que faz todo o processo do docker como construir a imagem e executar
# COMANDO PARA EXECUTAR O DOCKER COMPOSE
# docker-compose -f "compose.yaml" up -d --build
