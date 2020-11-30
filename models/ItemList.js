const mongoose = require('mongoose');

const itemListSchema = new mongoose.Schema({
  character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Characters'
  },
  item: [{
    name: {
      type: String,
      require: true,
    },
    itemType: {
      type: String,
      enum: ['head', 'neck', 'cloak', 'chest', 'gloves', 'bracers', 'legs', 'boots', 'ring one', 'ring two', 'trinket one', 'trinket two']
    },
  }]
});

const ItemList = mongoose.model('ItemList', itemListSchema);

module.exports = ItemList;