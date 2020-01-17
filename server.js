const express = require('express')

class Server {
    constructor() {
        this.port = 3001
        this.host = "localhost"
        this.app = express()
        this.http = http.Server(this.app)
    }

    appExecute() {
        this.http.listen(this.port, this.host, () => {
            console.log(`Listening on http://${this.host}:${this.port}`);
        });
    }
}

const serv = new Server();
serv.appExecute()

