const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.ef0mvy1.mongodb.net", (err, records) => {
    console.log("Error:", err);
    console.log("Records:", records);
});