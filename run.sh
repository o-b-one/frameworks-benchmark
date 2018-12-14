#!/bin/bash

currentWd=$(pwd)
resultFile="$currentWd/results.txt"
echo "$resultFile"
echo > "$resultFile"

#echo hapi >> "$resultFile"
#node hapiserver.js & sleep 5
#npm run test http://127.0.0.1:8000/ | grep "Requests per second:" >> "$resultFile"
#pkill -f hapiserver
#sleep 5

echo node-raw >> "$resultFile"
node rawnodeserver.js & sleep 5
npm run test http://127.0.0.1:8000/ | grep "Requests per second:" >> "$resultFile"
pkill -f rawnodeserver
sleep 5

 echo restify >> "$resultFile"
 node restifyserver.js & sleep 5
 npm run test http://127.0.0.1:8000/ | grep "Requests per second:" >> "$resultFile"
 pkill -f restifyserver
 sleep 5


 echo koa2 >> "$resultFile"
 node koa2server.js & sleep 5
 npm run test http://127.0.0.1:8000/ | grep "Requests per second:" >> "$resultFile"
 pkill -f koa2server
 sleep 5

echo express >> "$resultFile"
node expressserver.js & sleep 5
npm run test http://127.0.0.1:8000/ | grep "Requests per second:" >> "$resultFile"
pkill -f expressserver
sleep 5

echo SugoiJS >> "$resultFile"
cd sugoijs/server && npm run start & sleep 5
cd ../
npm run test http://127.0.0.1:3000/index | grep "Requests per second:" >> "$resultFile"
pkill -f server
sleep 5

echo total.js >> "$resultFile"
node totalserver/total.js & sleep 5
npm run test http://127.0.0.1:8000/ | grep "Requests per second:" >> "$resultFile"
pkill -f total
sleep 5

echo sails.js >> "$resultFile"
cd ./test-project
sails lift & sleep 5
cd ../
npm run test http://127.0.0.1:1337/ | grep "Requests per second:" >> "$resultFile"
pkill -f sails
sleep 5

#echo adonis.js >> "$resultFile"
#cd yardstick
#npm start run & sleep 5
#cd ../
#npm run test http://127.0.0.1:3333/ | grep "Requests per second:" >> "$resultFile"
#pkill -f server.js
#sleep 5

echo NestJS >> "$resultFile"
cd nestjs && npm run build && npm run start:prod && sleep 5
cd ../
npm run test http://127.0.0.1:3000/ | grep "Requests per second:" >> "$resultFile"
pkill -f node
sleep 5
