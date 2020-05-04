const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const MusicUserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  profilePhoto: { //image URL
    type: String,
    default: "https://media.giphy.com/media/l0ExqCt2fIDQBK7MA/giphy.gif"
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  //an array of songs 
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'songML'
  }]
})
MusicUserSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

MusicUserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

// This creates our model from the above schema, using mongoose's model method
const MusicUser = mongoose.model("musicUser", MusicUserSchema);

// Export the Article model
module.exports = MusicUser;