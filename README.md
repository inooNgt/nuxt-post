# Nuxt-post

> My Blob Project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

### Development Setup

1. yarn run dev
2. 启动 nginx

### Window 端 nginx 命令

以下命令在 nginx 按装目录下运行

```shell
// 启动
start nginx

// 停止
nginx.exe -s stop

// 修改配置后重启
nginx.exe -s reload
```

### PM2 Setup

```shell
pm2 start node_modules/nuxt/bin/nuxt.js --name nuxt-post
```
