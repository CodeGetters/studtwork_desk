FROM node:18-alpine as build-stage

# 设置 /app 作为工作目录
WORKDIR /studtwork_desk

# 复制必要文件
# COPY package.json  package.json

# 复制应用程序文件
COPY . .

RUN yarn install

# 构建应用程序
RUN yarn build

# 生产阶段 指定 nginx:stable-alpine 作为生产阶段的基础镜像
FROM nginx:stable-alpine as production-stage

# 复制构建好的应用程序到 nginx 容器的默认 HTML 目录中
COPY --from=build-stage /studtwork_desk/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# 暴露默认端口
EXPOSE 80

# 运行 nginx
CMD ["nginx","-g" ,"daemon off;"]
