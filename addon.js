const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    id: "org.stremio.beinsports",
    version: "1.0.0",
    name: "beIN Sports Addon",
    description: "Watch beIN Sports 1–7 HD with this add-on",
    resources: ["catalog", "stream"], // Defines available resources (catalog, stream)
    types: ["tv"], // For live TV
    catalogs: [{ type: "tv", id: "beinsports_catalog" }],
};

const channels = [
    {
        id: "bein1",
        name: "beIN Sports 1 HD",
        poster: "https://assets.bein.com/mena/sites/3/2015/06/beIN_SPORTS1_DIGITAL_Mono.png",
        description: "Watch beIN Sports 1 live HD.",
    },
    {
        id: "bein2",
        name: "beIN Sports 2 HD",
        poster: "https://assets.bein.com/mena/sites/3/2015/06/beIN_SPORTS2_DIGITAL_Mono.png",
        description: "Watch beIN Sports 2 live HD.",
    },
    {
        id: "bein3",
        name: "beIN Sports 3 HD",
        poster: "https://assets.bein.com/mena/sites/3/2015/06/beIN_SPORTS3_DIGITAL_Mono.png",
        description: "Watch beIN Sports 3 live HD.",
    },
    {
        id: "bein4",
        name: "beIN Sports 4 HD",
        poster: "https://assets.bein.com/mena/sites/3/2015/06/beIN_SPORTS4_DIGITAL_Mono.png",
        description: "Watch beIN Sports 4 live HD.",
    },
    {
        id: "bein5",
        name: "beIN Sports 5 HD",
        poster: "https://assets.bein.com/mena/sites/3/2015/06/beIN_SPORTS5_DIGITAL_Mono.png",
        description: "Watch beIN Sports 5 live HD.",
    },
    {
        id: "bein6",
        name: "beIN Sports 6 HD",
        poster: "https://assets.bein.com/mena/sites/3/2015/06/beIN_SPORTS6_DIGITAL_Mono.png",
        description: "Watch beIN Sports 6 live HD.",
    },
    {
        id: "bein7",
        name: "beIN Sports 7 HD",
        poster: "https://assets.bein.com/mena/sites/3/2015/06/beIN_SPORTS7_DIGITAL_Mono.png",
        description: "Watch beIN Sports 7 live HD.",
    },
];

const streams = {
    bein1: [{ title: "HD Stream", url: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=bein_m_1" }],
    bein2: [{ title: "HD Stream", url: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=bein_m_2" }],
    bein3: [{ title: "HD Stream", url: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=bein_m_3" }],
    bein4: [{ title: "HD Stream", url: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=bein_m_4" }],
    bein5: [{ title: "HD Stream", url: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=bein_m_5" }],
    bein6: [{ title: "HD Stream", url: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=bein_m_6" }],
    bein7: [{ title: "HD Stream", url: "https://www.elahmad.com/tv/mobiletv/glarb.php?id=bein_m_7" }],
};

const builder = new addonBuilder(manifest);

// Define catalog handler
builder.defineCatalogHandler(({ type, id }) => {
    if (type === "tv" && id === "beinsports_catalog") {
        return Promise.resolve({ metas: channels });
    } else {
        return Promise.resolve({ metas: [] });
    }
});

// Define stream handler
builder.defineStreamHandler(({ id }) => {
    return Promise.resolve({ streams: streams[id] || [] });
});

module.exports = builder.getInterface();
