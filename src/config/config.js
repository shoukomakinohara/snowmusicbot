require('dotenv').config();


module.exports = {
    token: process.env.TOKEN,
    clientId: '1277641446283022376',
    guildId: '1319256495359266899',
    youtubeApiKey: 'AIzaSyBplbDvOw3n9xi95J0hNBCTFz4-jJU-Q4A',
    mongoUri: 'mongodb+srv://shriyanshojha38:9NKGQcXs1cKhqNBV@snowbot.yba0b.mongodb.net',
    spotify: {
        clientId: '2a0c27d2aa61477fa6677ee2b544186b',
        clientSecret: 'fb940514446c404280beefc887f59001',
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
