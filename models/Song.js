const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongMLSchema = new Schema({
title:{
  type: String
}, 
songCreated: {
  type: Date,
  default: Date.now
},
musicUser: {
  type: Schema.Types.ObjectId,
  ref: 'musicUser'
},

//an array of lyrics 
lyrics: [{
  type: Schema.Types.ObjectId,
  ref: 'lyricML'
}]

})

//Statics allow you to add a additional method to the model 
SongMLSchema.statics.addLyric = function (id, content) {
  const Lyric = mongoose.model('lyricML');

  return this.findById(id)
    .then(song => {
      const lyric = new Lyric({ content, song })
      song.lyrics.push(lyric)
      return Promise.all([lyric.save(), song.save()])
        .then(([lyric, song]) => song);
    });
}

SongMLSchema.statics.findLyrics = function (id) {
  return this.findById(id)
    .populate('lyrics')
    .then(song => song.lyrics);
}

const Song = mongoose.model('songML', SongMLSchema);
module.exports = Song;