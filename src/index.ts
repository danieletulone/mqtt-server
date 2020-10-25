import server from './mqtt'

server.on('ready', function () {
    console.log('ready')
})

server.on('clientConnected', function (client: any) {
    console.log(`${client.id} connected!`)
})

server.on('subscribed', function (packet: any, client: any) {
    console.log(`${client.id} subscribed to ${packet}`)
})

server.on('published', function (packet: any, client: any) {
    console.log(`Published ${packet.payload} into ${packet.topic}`)
})
