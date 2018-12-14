#!/bin/bash

currentWd=$(pwd)
resultFile="$currentWd/results.txt"
echo "$resultFile"
echo > "$resultFile"

#echo hapi >> "$resultFile"
#node hapiserver.js & sleep 5
#artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ results/hapi.report.json
#pkill -f hapiserver
#sleep 5

echo node-raw >> "$resultFile"
node rawnodeserver.js & sleep 5
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ results/node-raw.report.json
pkill -f rawnodeserver
sleep 5

 echo restify >> "$resultFile"
 node restifyserver.js & sleep 5
 artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ results/restify.report.json
 pkill -f restifyserver
 sleep 5


 echo koa2 >> "$resultFile"
 node koa2server.js & sleep 5
 artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ results/koa.report.json
 pkill -f koa2server
 sleep 5

echo express >> "$resultFile"
node expressserver.js & sleep 5
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ results/express.report.json
pkill -f expressserver
sleep 5

echo SugoiJS >> "$resultFile"
cd sugoijs/server && npm run start & sleep 5
cd ../
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:3000/index sugoijs.report.json
pkill -f server
sleep 5

echo total.js >> "$resultFile"
node totalserver/total.js & sleep 5
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ results/total.report.json
pkill -f total
sleep 5

echo sails.js >> "$resultFile"
cd ./test-project
sails lift & sleep 5
cd ../
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:1337/ results/sailsjs.report.json
pkill -f sails
sleep 5

#echo adonis.js >> "$resultFile"
#cd yardstick
#npm start run & sleep 5
#cd ../
#artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:3333/ results/adonis.report.json
#pkill -f server.js
#sleep 5

echo NestJS >> "$resultFile"
cd nestjs && npm run build && npm run start:prod && sleep 5
cd ../
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:3000/ results/nest.report.json
pkill -f node
sleep 5
