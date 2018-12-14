#!/bin/bash

currentWd=$(pwd)
resultDir="$currentWd/results"

rm -rf $resultDir
mkdir $resultDir

#echo hapi
#node hapiserver.js & sleep 5
#artillery quick --count 50000 -d 20 http://127.0.0.1:8000/ -o "$resultDir/hapi.report.json"
#pkill -f hapiserver
#sleep 5

echo node-raw
node rawnodeserver.js & sleep 5
artillery quick --count 50000 -d 20 http://127.0.0.1:8000/ -o "$resultDir/node-raw.report.json"
pkill -f rawnodeserver
sleep 5

 echo restify >> "
 node restifyserver.js & sleep 5
 artillery quick --count 50000 -d 20 http://127.0.0.1:8000/ -o "$resultDir/restify.report.json"
 pkill -f restifyserver
 sleep 5


 echo koa2 >> "
 node koa2server.js & sleep 5
 artillery quick --count 50000 -d 20 http://127.0.0.1:8000/ -o "$resultDir/koa.report.json"
 pkill -f koa2server
 sleep 5

echo express >> "
node expressserver.js & sleep 5
artillery quick --count 50000 -d 20 http://127.0.0.1:8000/ -o "$resultDir/express.report.json"
pkill -f expressserver
sleep 5

echo SugoiJS
cd sugoijs/server && npm run start & sleep 5
cd ../
artillery quick --count 50000 -d 20 http://127.0.0.1:3000/index -o "$resultDir/sugoijs.report.json"
pkill -f server
sleep 5

echo total.js
node totalserver/total.js & sleep 5
artillery quick --count 50000 -d 20 http://127.0.0.1:8000/ -o "$resultDir/total.report.json"
pkill -f total
sleep 5

echo sails.js
cd ./test-project
sails lift & sleep 5
cd ../
artillery quick --count 50000 -d 20 http://127.0.0.1:1337/ -o "$resultDir/sailsjs.report.json"
pkill -f sails
sleep 5

#echo adonis.js
#cd yardstick
#npm start run & sleep 5
#cd ../
#artillery quick --count 50000 -d 20 http://127.0.0.1:3333/ -o "$resultDir/adonis.report.json"
#pkill -f server.js
#sleep 5

echo NestJS
cd nestjs && npm run build && npm run start:prod && sleep 5
cd ../
artillery quick --count 50000 -d 20 http://127.0.0.1:3000/ -o "$resultDir/nest.report.json"
pkill -f node
sleep 5
