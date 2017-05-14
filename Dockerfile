FROM node

RUN mkdir /crud

WORKDIR /crud
ADD src /crud/src/
ADD public /crud/public/
ADD package.json /crud/package.json
RUN npm install

CMD npm start
