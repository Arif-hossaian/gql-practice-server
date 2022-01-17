const { UserList, MovieList } = require('../fakeData');
const _ = require('lodash');

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, arg) => {
      const id = arg.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, arg) => {
      const name = arg.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      //console.log(user);
      const lastID = UserList[UserList.length - 1].id;
      user.id = lastID + 1;
      UserList.push(user);
      return user;
    },
    updateUsername: (parent, args) => {
      // const id = args.input.id;
      // const newUserName = args.input.newUserName
      const { id, newUserName } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === id) {
          user.userName = newUserName;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
  },
};

module.exports = { resolvers };
