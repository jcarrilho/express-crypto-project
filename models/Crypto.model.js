const { Schema, model } = require("mongoose");

const cryptoSchema = new Schema ({
    id: String,
    symbol: String,
    name: String,
    image: String,

    userFavorite: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Crypto = model("Crypto", cryptoSchema);

module.exports = Crypto
