FROM node:12.14-alpine
WORKDIR /usr/src/backend
COPY . .
RUN npm i --silent
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]