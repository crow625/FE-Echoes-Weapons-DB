const mongoose = require('mongoose');
const { Schema } = mongoose;

// Swords, Lances, Axes, Bows, and other misc weapons are considered Basic Weapons.
const BasicWeaponSchema = new Schema({
    name: String,
    description: String,
    mt: Number,
    weight: Number,
    hit: Number,
    crit: Number,
    min_range: {type: Number, default: 1},
    max_range: {type: Number, default: 1},
    sell_gold: Number,
    sell_silver: Number,
    character_restriction: {type: [String], default: []},
    effective: {type: [String], default: []},
    effects: {type: [String], default: []},
    arts: [{
        name: String,
        sp_cost: Number
    }],
    forges: [{
        rank: Number,
        cost_silver: Number,
        cost_gold: Number,
        mt: Number,
        hit: Number,
        crit: Number,
        weight: Number
    }],
    evolutions: [{
        new_name: String,
        required_rank: Number,
        cost_silver: Number,
        cost_gold: Number
    }],
    stat_changes: {
        hp: {type: Number, default: 0},
        atk: {type: Number, default: 0},
        skl: {type: Number, default: 0},
        spd: {type: Number, default: 0},
        lck: {type: Number, default: 0},
        def: {type: Number, default: 0},
        res: {type: Number, default: 0},
        mov: {type: Number, default: 0}
    }
});

module.exports = mongoose.model('BasicWeapon', BasicWeaponSchema);