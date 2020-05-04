const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LyricMLSchema = new Schema({
  likes: {
    type: Number,
    default: 0
  },
  content: {
    type: String
  },
  lyricCreated: {
    type: Date,
    default: Date.now
  },
  song: {
    type: Schema.Types.ObjectId,
    ref: 'songML'
  }

})


LyricMLSchema.statics.like = function (id) {
  const Lyric = mongoose.model('lyric');

  return Lyric.findById(id)
    .then(lyric => {
      ++lyric.likes;
      return lyric.save();
    })
}


const Lyric = mongoose.model('lyricML', LyricMLSchema);

 module.exports = Lyric;