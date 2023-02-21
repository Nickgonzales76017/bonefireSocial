const WebSocket = require('ws');

const expressServer = require('./expressServer');
const wss = new WebSocket.Server({ port: 7071 });
const expApp = expressServer.exprServ();
const clients = new Map();
wss.on('connection', (ws) => {
    const id = uuidv4();
    const color = Math.floor(Math.random() * 360);
    const metadata = { id, color };
    ws.send(JSON.stringify(metadata));
    clients.set(ws, metadata);
    console.log('\x1b[1m\x1b[31m','connect:id: ','\x1b[1m\x1b[33m',id);
    ws.on('message', (messageAsString) => {
        const message = {'msg': JSON.parse(messageAsString)};
        const metadata_user = {...clients.get(ws)};

        message.sender = metadata_user.id;
        message.color = metadata_user.color;
        console.log('\x1b[1m\x1b[31m','message-:'+message.sender+' ','\x1b[1m\x1b[35m',message);
        const outbound = JSON.stringify(message);

        [...clients.keys()].forEach((client) => {
          client.send(outbound);
        });
    });
    ws.on("close", () => {
        const metadata = clients.get(ws);
        clients.delete(ws);
        console.log('\x1b[1m\x1b[31m','remove:id: ','\x1b[1m\x1b[33m',metadata.id);
        console.log()
    });
});
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
console.log('\x1b[1m\x1b[31m','Websockets: ','\x1b[1m\x1b[32m','server up');
