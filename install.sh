apt-get install apache2-utils
apt-get install npm
npm install n -g
n latest
npm install

cd sugoijs/server && npm i && cd ../../

cd nestjs && npm i && cd ../

adonis new yardstick
cp yardstick-changes/app/Http/kernel.js yardstick/app/Http/kernel.js
cp yardstick-changes/app/Http/routes.js yardstick/app/Http/routes.js

npm install sails -g
sails new sailsjs
cp test-project-changes/api/controllers/ApiController.js sailsjs/api/controllers/ApiController.js
cp test-project-changes/config/routes.js sailsjs/config/routes.js