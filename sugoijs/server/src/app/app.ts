import { defaultErrorHandler, HttpServer } from "@sugoi/server";
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as path from "path";
import { paths } from "../config/paths";
import { BootstrapModule } from "./bootstrap.module";
import { Authorization } from "./classes/authorization.class"

const DEVELOPMENT = false//process.env.ENV.indexOf('dev') !== -1;
const TESTING = false//process.env.ENV.indexOf('test') !== -1;



const server: HttpServer = HttpServer.init(BootstrapModule, "/", null, Authorization)
//    .setStatic(paths.staticDir) // set static file directory path
    .setMiddlewares((app) => {
        app.disable('x-powered-by');
        app.set('etag', 'strong');
        app.set('host', process.env.HOST || '0.0.0.0');
        app.use(bodyParser.json());
        app.use(compression());
app.use((req,res,next)=>{
if((req.originalUrl != "/index"))
console.log(req.originalUrl);
next()
})
    })
    .setErrorHandlers((app) => {
        app.use((req, res, next) => {
            // Set fallback to send the web app index file
            return res.sendFile(path.resolve(paths.index))
        });
        // The value which will returns to the client in case of an exception
        app.use(defaultErrorHandler(DEVELOPMENT || TESTING));
    });

export {server};
