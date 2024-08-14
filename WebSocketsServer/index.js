// This file is the primary entry point for web sockets server

// STEPS
//    1: create web sockets server
//    2: handle incoming connections
//    3: 

const http = require('http')
const { WebSocketServer } = require('ws')
const url = require('url')
const uuid = require('uuid')
const uuidv4 = require("uuid").v4

const server = http.createServer()
const wsServer = new WebSocketServer({ server })
const port = 5173

const connections = {}
const users = {}

const broadcast = () => {
    Object.keys(connections).forEach(uuid => {
        const connection = connections[uuid]
        const message = JSON.stringify(users)
        connection.send(message)
    })
}

const handleMessage = (bytes, uuid) => {
    const message = JSON.parse(bytes.toString())
    const user = users[uuid]
    user.state = message
    
    broadcast()

    console.log(message)
}

const handleClose = (uuid) => {
    console.log(`${users[uuid].username} disconnected`)
    delete connections[uuid]
    delete users[uuid]
    broadcast()
}

// on connecting to the server
wsServer.on('connection', (connection, request) => {
    // ws://localhost:5173?username=Evan
    const { username } = url.parse(request.url, true).query
    const uuid = uuidv4()
    console.log(`${username} connected`)

    // when new connection is added, store it in connections dictionary
    connections[uuid] = connection

    users[uuid] = {
        username,
        state: { }
    }

    connection.on('message', message => handleMessage(message, uuid))
    connection.on('close', () => handleClose(uuid))
})  

server.listen(port, () => {
    console.log(`WebSockets server listening on port ${port}`)
})
