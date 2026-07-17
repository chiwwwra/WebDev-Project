const mongoose=require('mongoose');
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const axios = require("axios");
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';

main().then(()=>{
    console.log("connected to DB");
})
.catch(err=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    //initData.data = initData.data.map((obj) => ({...obj}));


    for (let obj of initData.data) {

        console.log("Processing:", obj.location, obj.country);

        obj.owner = "6a537b20be6aa6fe12c8507c";

        const query = `${obj.location}, ${obj.country}`;

        try {
            const response = await axios.get(
                "https://nominatim.openstreetmap.org/search",
                {
                    params: {
                        q: query,
                        format: "json",
                        limit: 1
                    },
                    headers: {
                        "User-Agent": "WanderLust"
                    },
                    timeout: 10000
                }
            );
            
            if (response.data.length > 0) {

                obj.geometry = {
                    type: "Point",
                    coordinates: [
                        parseFloat(response.data[0].lon),
                        parseFloat(response.data[0].lat)
                    ]
                };
            }
            else{

                console.log(`Location not found: ${query}`);
                

                obj.geometry = {
                    type: "Point",
                    coordinates: [77.2090, 28.6139]
                }
            }
        } catch (err) {

            console.log(`Error while geocoding ${query}`);
            console.log(err.message);

            obj.geometry = {
                type: "Point",
                coordinates: [77.2090, 28.6139]
            };

        }
        console.log("Finished:", obj.location);
        await delay(1000);

    }
    console.log("Loop completed");

    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();