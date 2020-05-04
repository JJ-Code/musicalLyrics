//const mongoose = require('mongoose');
//const MusicUser = mongoose.model('musicUser');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;
const MusicUserType = require('./music_user_type');
const SongType = require('./song_type');
const LyricType = require('./lyric_type')
const { MusicUser, Song, Lyric } = require("../../models"); //same as the above



const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    dummyField: {
      type: GraphQLID
    },
    user: {
      type: new GraphQLList(MusicUserType),
      resolve(parentValue, args, req) {
        return MusicUser.find({});
      }
    },
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return Song.find({});
      }
    },
    song: {
      type: SongType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValue, { id }) {
        return Song.findById(id);
      }
    },
    lyric: {
      type: LyricType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parnetValue, { id }) {
        return Lyric.findById(id);
      }
    }

  })
});

module.exports = RootQueryType;