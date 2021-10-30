FROM node:15.11.0-alpine3.12

ENV NUXT_VERSION=2.15.7

WORKDIR /usr/src/app

ADD . ./
RUN : \
  && yarn install \
  && yarn build --standalone \
  && rm -rf node_modules \
  && rm package.json \
  && yarn add "nuxt-start@${NUXT_VERSION}" \
  && yarn cache clean \
  && :

ENTRYPOINT ["npx", "nuxt-start"]
EXPOSE 3000