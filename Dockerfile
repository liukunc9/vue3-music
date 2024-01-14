# 构建镜像: docker build -t vue3-music:1.0.0 .
# 运行容器: docker run -d -p 80:80 --name vue3-music vue3-music:1.0.0
FROM nginx
LABEL image.authors="lewis"
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       80; \
                      location   /api { \
                      proxy_pass              http://10.0.0.1:8080/api/; \
                      proxy_redirect          off; \
                      proxy_set_header        Host 10.0.0.1; \
                      proxy_set_header        X-Real-IP \$remote_addr; \
                      proxy_set_header        X-Forwarded-For \$proxy_add_x_forwarded_for; \
                  } \
                  #解决Router(mode: 'history')模式下，刷新路由地址不能找到页面的问题 \
                  location / { \
                      root   /var/www/html/; \
                      index  index.html index.htm; \
                      if (!-e \$request_filename) { \
                          rewrite ^(.*)\$ /index.html?s=\$1 last; \
                          break; \
                      } \
                  } \
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

COPY dist/ /var/www/html/
EXPOSE 80
EXPOSE 443