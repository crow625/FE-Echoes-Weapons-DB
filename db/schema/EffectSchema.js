const mongoose = require('mongoose');
const { Schema } = mongoose;

const EffectSchema = new Schema({
    name: {
        type: String,
        enum: [
            'ignores_attack',
            'magic_damage',
            'inflicts_poison',
            'double_mt_turns_7_11',
            'double_mt_female',
            'seal_oculus',
            'medusa',
            'prevents_counterattack',
            'halve_enemy_defenses',
            'recovery'
        ] 
    },
    description: String
})

module.exports = mongoose.model('Effect', EffectSchema);