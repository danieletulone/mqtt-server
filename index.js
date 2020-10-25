var mosca = require('mosca')
require('dotenv').config()

var settings = {
    port: 1883,
    http: {
        port: 1884,
        bundle: true,
        static: './'
    },
}

if (process.env.USE_SSL == 'true') {
    console.log('Ssl enabled!')
    settings.allowNonSecure = true;

    settings.secure = {
        port: parseInt(process.env.SSL_PORT),
        keyPath: process.env.KEY_PATH,
        certPath: process.env.CERT_PATH,
    }

    settings.https = {
        port: parseInt(process.env.SSL_PORT) + 1,
        bundle: true,
        static: './'
    }
}

var server = new mosca.Server(settings)

server.on('ready', function () {
    console.log('ready')
})

server.on('clientConnected', function (client) {
    console.log(`${client.id} connected!`)
})

server.on('subscribed', function (packet, client) {
    console.log(`${client.id} subscribed to ${packet}`)
})

server.on('published', function (packet, client) {
    console.log(`Published ${packet.payload} into ${packet.topic}`)
})
