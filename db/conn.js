//  For connecting DB with node js
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nirajankhanal777:sscPD36jlxNW1ro1@cluster0.dx29ndl.mongodb.net/?retryWrites=true&w=majority", {
    
}).then(()=>{
    console.log('Connection Successful');
}).catch((err)=>{
    console.log(err);
});


