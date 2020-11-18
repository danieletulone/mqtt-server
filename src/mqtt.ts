const mosca = require('mosca')
import { MoscaSettings } from './interfaces/mosca'
require('dotenv').config()

var settings: MoscaSettings = {
    port: 1883,
    http: {
        port: 1884,
        bundle: true,
        static: './'
    },
    host: '0.0.0.0'
}

if (process.env.USE_SSL == 'true') {
    console.log('Ssl enabled!')
    settings.allowNonSecure = true;

    settings.secure = {
        port: parseInt(process.env.SSL_PORT || ''),
        keyPath: process.env.KEY_PATH || '',
        certPath: process.env.CERT_PATH || '',
    }

    settings.https = {
        port: parseInt(process.env.SSL_PORT || '') + 1,
        bundle: true,
        static: './'
    }
}

const server = new mosca.Server(settings)

export default server

// multivid marco tempest