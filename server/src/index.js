require('./server/dbMongo/mongoose');
const http = require('http');
const express = require('express');
const router = require('./server/router');
const cors = require('cors');
const controller = require('./socketInit');
const errorsHandler = require('./server/handlerError/errorsHandler');
const errorsHandleLogger = require('./server/loggers/errorsHandleLogger');
const schedule = require('node-schedule');
const scheduledAutoCopyingLogs = require('./server/loggers/scheduledAutoCopyingLogs');

const PORT = 9632;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);

app.use(errorsHandleLogger);
app.use(errorsHandler);

schedule.scheduleJob('15 18 * * *', scheduledAutoCopyingLogs);


const server = http.createServer(app);
server.listen(PORT/*,
  () => console.log(`Example app listening on port ${ PORT }!`)*/);
controller.createConnection(server);


