const mongoose = require('mongoose');
const { Schema } = mongoose;

const WhiteMagicSchema = new Schema({
    name: String,
    description: String,
    mt: Number,
    hit: {type: Number, default: null},
    hp_cost: Number,
    exp: Number,
    min_range: Number,
    max_range: Number,
    effect: {
        name: String,
        description: String
    }
});

module.exports = mongoose.model('WhiteMagic', WhiteMagicSchema);