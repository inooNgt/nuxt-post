# Nuxt-post

> My Blob Project

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn run generate
```

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

### Linux 端 Nginx 命令

#### 判断 Nginx 配置是否正确

```shell
nginx -t -c /usr/local/nginx/conf/nginx.conf
```

#### 启动

```shell
nginx -c /usr/local/nginx/conf/nginx.conf
```

#### 快速停止

```shell
nginx -s stop
```

#### 配置文件修改重装载命令

```shell
nginx -s reload
```

### PM2 Setup

```shell
pm2 start node_modules/nuxt/bin/nuxt.js --name nuxt-post
```

### 部署方式

Nginx 将 80 端口转发至 nuxt 和 adonis

```
  location /api
  {
      proxy_pass http://adonishost.tech;
  }
  location /
  {
      proxy_pass http://nuxthost.tech;
  }
```
