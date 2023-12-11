FROM node:20.9.0
RUN mkdir /usr/src/app
RUN cd /usr/src/app
RUN git clone https://github.com/Montheankul-K/Note-Application-Backend.git
WORKDIR /usr/src/app
RUN npm install
EXPOSE 3000
RUN echo "MONGODB_USERNAME=your-mongodb-username" > .env
RUN echo "MONGODB_PASSWORD=your-mongodb-password" >> .env
RUN echo "MONGODB_CLUSTER_NAME=your-mongodb-clustername" >> .env
CMD [ "npm", "start" ]