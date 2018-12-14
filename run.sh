#!/bin/bash

currentWd=$(pwd)
resultDir="$currentWd/results"

##echo hapi >> "$resultDir"
#node hapiserver.js & sleep 5
#artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ "resultDir/hapi.report.json"
#pkill -f hapiserver
#sleep 5

#echo node-raw >> "$resultDir"
node rawnodeserver.js & sleep 5
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ "resultDir/node-raw.report.json"
pkill -f rawnodeserver
sleep 5

 #echo restify >> "$resultDir"
 node restifyserver.js & sleep 5
 artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ "resultDir/restify.report.json"
 pkill -f restifyserver
 sleep 5


 #echo koa2 >> "$resultDir"
 node koa2server.js & sleep 5
 artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ "resultDir/koa.report.json"
 pkill -f koa2server
 sleep 5

#echo express >> "$resultDir"
node expressserver.js & sleep 5
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ "resultDir/express.report.json"
pkill -f expressserver
sleep 5

#echo SugoiJS >> "$resultDir"
cd sugoijs/server && npm run start & sleep 5
cd ../
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:3000/index sugoijs.report.json
pkill -f server
sleep 5

#echo total.js >> "$resultDir"
node totalserver/total.js & sleep 5
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:8000/ "resultDir/total.report.json"
pkill -f total
sleep 5

#echo sails.js >> "$resultDir"
cd ./test-project
sails lift & sleep 5
cd ../
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:1337/ "resultDir/sailsjs.report.json"
pkill -f sails
sleep 5

##echo adonis.js >> "$resultDir"
#cd yardstick
#npm start run & sleep 5
#cd ../
#artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:3333/ "resultDir/adonis.report.json"
#pkill -f server.js
#sleep 5

#echo NestJS >> "$resultDir"
cd nestjs && npm run build && npm run start:prod && sleep 5
cd ../
artillery run quick -count 100 -n 50000 -d 20 http://127.0.0.1:3000/ "resultDir/nest.report.json"
pkill -f node
sleep 5
