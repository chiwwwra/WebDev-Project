const Listing =  require("../models/listing");
const axios = require("axios");

module.exports.index = async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id)
    .populate({
        path:"reviews", 
        populate: {
            path:"author"
        },
    }).populate("owner");
    if(!listing){
        req.flash("error","Requested Listing does not exist!");
        return res.redirect("/listings");
    }
    //console.log(listing);
    res.render("listings/show.ejs",{listing});
};

module.exports.createListing = async (req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing=new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    const query = `${newListing.location}, ${newListing.country}`;
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
            }
        }
    );
    if (response.data.length > 0) {

        const place = response.data[0];

        newListing.geometry = {
            type: "Point",
            coordinates: [
                parseFloat(place.lon),
                parseFloat(place.lat)
            ]
        };
    }


    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
    //app.post("/listings")
};

module.exports.renderEditForm = async (req,res)=>{
    let {id} =req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Requested Listing does not exist!");
        return res.redirect("/listings");
    }
    
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs",{listing , originalImageUrl});
};

module.exports.updateListing = async(req,res)=>{

    let {id} =req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing}, { new:true });

    const query = `${listing.location}, ${listing.country}`;

    try{

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
            }
        }
    );

    if (response.data.length === 0) {

        req.flash("error", "Location not found!");
        return res.redirect("/listings/new");

    }
    const place = response.data[0];

        listing.geometry = {
            type: "Point",
            coordinates: [
                parseFloat(place.lon),
                parseFloat(place.lat)
            ]
        };

    if (req.file) {

        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    await listing.save();
    
    req.flash("success","Listing Updated!"); 
    res.redirect(`/listings/${id}`);
}catch (err) {

        console.log(err);

        req.flash("error", "Unable to fetch location. Please try again.");
        return res.redirect(`/listings/${id}/edit`);

    }
};

module.exports.destroyListing = async(req,res)=>{
    let {id}= req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};