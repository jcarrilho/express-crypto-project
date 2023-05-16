const { Schema, model } = require("mongoose");

const cryptoSchema = new Schema ({
    id: String,
    symbol: String,
    name: String,
    image: String
});

const Crypto = model("Crypto", cryptoSchema);

module.exports = Crypto
