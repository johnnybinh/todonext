

FROM node:22-alpine3.19
LABEL author="johnnybinh <thebinhnguyen2703@gmail.com>"

WORKDIR /app



COPY yarn.lock package.json ./
RUN yarn

COPY . .

RUN yarn run db:generate

RUN yarn run db:migrate

RUN yarn build

ENV PORT 3000

EXPOSE 3000

CMD ["yarn", "start"]
