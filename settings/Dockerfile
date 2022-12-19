FROM cypress/included:9.1.1 AS jfs_testbase

FROM node:14.17.3 as JFS_BUILD
ARG GIT_TOKEN
COPY . /opt/jfs/app
RUN  git config --global url."https://${GIT_TOKEN}@github.com/".insteadOf "https://github.com/"
RUN  cd /opt/jfs/app && npm ci --unsafe-perm && npm run build

FROM alpine AS JFS_CONFIG
RUN apk --update add jq curl tar gzip && rm -rf /var/lib/apt/lists/* && rm /var/cache/apk/* && mkdir -p /opt/jfs
COPY ./config.json.dist /opt/jfs/app/
RUN cd /opt/jfs/app && mkdir dist && \
    cat config.json.dist | jq '.JscClient.Host = "/jsc-api-de" | .Language = "de" | .Currency = "EUR" | .ContainerLanguage ="de" | .VAT = 19 | .DeploymentApi.Host = ""' > dist/config-de.json; \
    cat config.json.dist | jq '.JscClient.Host = "/jsc-api-it" | .Language = "it" | .Currency = "EUR" | .ContainerLanguage ="it" | .VAT = 22 | .DeploymentApi.Host = ""' > dist/config-it.json; \
    cat config.json.dist | jq '.JscClient.Host = "/jsc-api-uk" | .Language = "en" | .Currency = "GBP" | .ContainerLanguage ="en" | .VAT = 20 | .DeploymentApi.Host = ""' > dist/config-uk.json

FROM nginx AS JFS_RUN
COPY --from=JFS_BUILD "/opt/jfs/app/dist" "/usr/share/nginx/html"
COPY --from=JFS_CONFIG "/opt/jfs/app/dist" "/usr/share/nginx/html"

FROM jfs_testbase as JFS_TEST
COPY --from=JFS_BUILD "/opt/jfs/app" "/opt/jfs/app"
WORKDIR /opt/jfs/app
RUN npm run test

