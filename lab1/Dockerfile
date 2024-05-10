FROM node:carbon
VOLUME /app
RUN npm -g install serve
EXPOSE 8080
CMD ["serve", "-s", "/app", "-p", "8080"]

# command to run if this file is used
# $cd /app-root && docker build -t node/app . &&  docker run -dti --rm --name node-app -p 8080:8080 -v  <абсолютний шлях до публычноъ директорії проекту>:/app node/app
