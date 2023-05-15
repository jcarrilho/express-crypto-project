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

const Cryptos = model("Cryptos", cryptoSchema);

module.exports = Cryptos;
