# Copyright 2023 luan
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM node:20.11.1-alpine3.19

RUN apk add --no-cache libc6-compat

# Install Nginx
RUN apk add --no-cache nginx
RUN mkdir -p /run/nginx

# Install Yarn
RUN apk add --no-cache yarn

EXPOSE 3000

ENV PORT 3000
ENV NODE_ENV production

WORKDIR /home/nextjs/app
RUN mkdir -p .next/cache/images

COPY package.json .
COPY yarn.lock .

RUN yarn install
RUN npx browserslist@latest --update-db
RUN npx next telemetry disable

# need to install linux specific swc builds
RUN yarn add -D @swc/cli @swc/core

COPY . .

RUN yarn build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

CMD [ "yarn", "start" ]