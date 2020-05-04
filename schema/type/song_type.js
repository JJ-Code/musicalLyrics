const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql;
const { Song } = require('../../models');
const LyricType = require('./lyric_type');

//dont think you need to require controller bc of statics 
const SongType = new GraphQLObjectType({
  name: 'SongType',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return Song.findLyrics(parentValue.id);
      }
    }
  })
});




module.exports = SongType;
