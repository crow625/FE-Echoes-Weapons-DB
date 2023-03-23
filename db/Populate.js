const mongoose = require('mongoose');

const BasicWeapon = require('./BasicWeaponSchema');
const BlackMagic = require('./BlackMagicSchema');
const WhiteMagic = require('./WhiteMagicSchema');
const CombatArt = require('./CombatArtSchema');
const Effect = require('./EffectSchema');

function Populate(filename) {
    //mongoose.connect(process.env.DB_URL);
    let sword = new BasicWeapon({
        name: "Sword",
        description: "A basic sword.",
        mt: 0,
        weight: 0,
        hit: 90,
        crit: 0,
        sell_gold: 0,
        sell_silver: 0,
        arts: [],
        forges: [],
        evolutions: [],
        stat_changes: {},
    });

    // sword.save().then((weapon) => {
    //     console.log(weapon)
    // })

    console.log(sword);
}

export default Populate;