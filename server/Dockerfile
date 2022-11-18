FROM node:16.17.0
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"] /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD npm run dev