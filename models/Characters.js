const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true
  },
  class: {
    type: String,
    enum: ['WARRIOR', 'PALADIN', 'HUNTER', 'ROGUE', 'PRIEST', 'SHAMAN', 'MAGE', 'WARLOCK', 'MONK', 'DRUID', 'DEMON_HUNTER', 'DEATH_KNIGHT'],
  },
  image: {
    type: String,
  },
  faction: {
    type: String,
    enum: ['HORDE', 'ALLIANCE'],
    default: 'HORDE'
  }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;