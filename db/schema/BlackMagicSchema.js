const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlackMagicSchema = new Schema({
    name: String,
    description: String,
    mt: Number,
    weight: Number,
    hit: Number,
    crit: Number,
    hp_cost: Number,
    min_range: Number,
    max_range: Number,
    default_weapon: [String],
    character_restriction: {type: [String], default: []},
    effective: {type: [String], default: []},
    effects: {type: [String], default: []} 
});

module.exports = mongoose.model('BlackMagic', BlackMagicSchema);