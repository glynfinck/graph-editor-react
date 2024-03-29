# build environment
FROM node:lts-alpine3.17@sha256:45748c3443410b052e2123dcffbd67838727394f9aacfd23e0b47afd95434ff5 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# production enviornment
FROM nginx:stable-alpine@sha256:cc61d734c3045fa64f3d50173e5025e35e0074a29e24559e5ce085b844f6287d
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
