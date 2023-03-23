const mongoose = require('mongoose');
const { Schema } = mongoose;

const CombatArtSchema = new Schema({
    name: String,
    description: String,
    hp_cost: Number,
    min_range: {type: Number, default: 1},
    max_range: {type: Number, default: 1},
    mt_change: {type: Number, default: 0},
    hit_change: {type: Number, default: 0},
    crit_change: {type: Number, default: 0},
    num_hits: {type: Number, default: 1},
    effective: {type: [String], default: []}
});

module.exports = mongoose.model('CombatArt', CombatArtSchema);