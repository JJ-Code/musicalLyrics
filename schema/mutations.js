const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const { MusicUser, Song, Lyric } = require("../models");
const MusicUserType = require("./type/music_user_type");
const SongType = require("./type/song_type");
const LyricType = require("./type/lyric_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: MusicUserType,
      args: {
        name: {
          type: GraphQLString,
        },
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
        profilePhoto: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, { name, email, password, profilePhoto }, req) {
        return new MusicUser({ name, email, password, profilePhoto }).save();
        // return AuthService.signup({ email, password, req });
      }
    },
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString },
      },
      resolve(parentValue, { title }) {
        return new Song({ title }).save();
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID },
      },
      resolve(parentValue, { content, songId }) {
        return Song.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.likeLyric(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
