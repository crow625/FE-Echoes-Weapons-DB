const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const BasicWeapon = require('./db/schema/BasicWeaponSchema');
const BlackMagic = require('./db/schema/BlackMagicSchema');
const WhiteMagic = require('./db/schema/WhiteMagicSchema');
const CombatArt = require('./db/schema/CombatArtSchema');
const Effect = require('./db/schema/EffectSchema');

const PORT = process.env.SERVER_PORT || 8080;

app.use(express.json());

app.get('/api/example', function (req, res) {
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
    console.log(sword);
    res.json({message: 'Hello from the server!'});
});

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})