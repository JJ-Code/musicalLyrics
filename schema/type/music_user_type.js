const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const MusicUserType = new GraphQLObjectType({
  name: 'MusicUserType',
  fields: {
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString
    },
    profilePhoto: {
      type: GraphQLString
    }
  }
});

module.exports = MusicUserType;


// const MusicUserType = new GraphQLObjectType({
//   name: 'MusicUserType',
//   fields: () => ({
//     id: {
//       type: GraphQLID
//     },
//     name: {
//       type: GraphQLString,
//     },
//     email: {
//       type: GraphQLString
//     },
//     profilePhoto: {
//       type: GraphQLString
//     },
//     songs: {
//       type: new GraphQLList(SongType),
//       resolve(parentValue) {

//       }
//     }
//   })

// });