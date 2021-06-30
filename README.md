# little-library
Little library with social focus

Install:
npm
node js

Run:
npm install -g npx

Run on project root:
npm install
This must download the dependencies specified in package.json.


Run on src folder:

npx sequelize-cli db:migrate
This must create database.sqlite file. This is our database.

npx sequelize-cli db:seed
This must seed the databse.

node app.js
Run the node server on localhost:3000.

http://localhost:3000/books
To see inserted books.
