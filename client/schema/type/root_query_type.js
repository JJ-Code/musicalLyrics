//const mongoose = require('mongoose');
//const MusicUser = mongoose.model('musicUser');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList
} = graphql;
const MusicUserType = require('./music_user_type');
const db = require('../../models'); //same as the above

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () =>({
    dummyField: {
      type: GraphQLID
    },
    user: {
      type: new GraphQLList(MusicUserType),
      resolve(parentValue, args, req) {
        return db.MusicUser.find({});
      }
    }
  })
});

module.exports = RootQueryType;