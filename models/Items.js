const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  },
  name: {
    type: String,
    require: true,
  },
  itemType: {
    type: String,
    enum: ['HEAD', 'NECK', 'CLOAK', 'CHEST', 'GLOVES', 'BRACERS', 'LEGS', 'BOOTS', ' RING_ONE', 'RING_TWO', 'TRINKET_ONE', 'TRINKET_TWO'],
    required: true,
  },
  isBis: {
    type: Boolean
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;