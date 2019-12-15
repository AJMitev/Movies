const movieController = (function() {
  const getCreate = function(context) {
    helper.addHeaderInfo(context);

    context
      .loadPartials({
        header: '../views/common/header.hbs',
        footer: './views/common/footer.hbs'
      })
      .then(function() {
        this.partial('./views/movie/create.hbs');
      });
  };

  const postCreate = function(context) {
    const payload = {
      title: context.params.title,
      imageUrl: context.params.imageUrl,
      description: context.params.description,
      tickets: Number(context.params.tickets),
      genres: context.params.genres.split(',')
    };

    requester
      .post('movies', 'appdata', 'Kinvey', payload)
      .then(helper.handler)
      .then(data => {
        context.redirect('/');
      });
  };

  const getCinema = function(context) {
    helper.addHeaderInfo(context);

    requester
      .get('movies?query={}&sort={"tickets": -1}', 'appdata', 'Kinvey')
      .then(helper.handler)
      .then(movies => {
        context.movies = movies;
        context
          .loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs',
            movie: '../views/movie/movie.hbs'
          })
          .then(function() {
            this.partial('../views/movie/cinema.hbs');
          });
      });
  };

  const myMovies = function(context) {
    helper.addHeaderInfo(context);

    const endpoint = `movies?query={"_acl.creator":"${sessionStorage.getItem(
      'userId'
    )}"}`;

    requester
      .get(endpoint, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then(movies => {
        context.movies = movies;
        context
          .loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
          })
          .then(function() {
            this.partial('../views/movie/my-movies.hbs');
          });
      });
  };

  const getEdit = function(context) {
    helper.addHeaderInfo(context);
    const id = context.params.id;
    const endpoint = `movies/${id}`;
    console.log(endpoint);
    requester
      .get(endpoint, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then(movie => {
        context.movie = movie;
        context
          .loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
          })
          .then(function() {
            this.partial('../views/movie/edit.hbs');
          });
      });
  };

  const postEdit = function(context) {
    const id = context.params.id;
    const endpoint = `movies/${id}`;
    const payload = {
      title: context.params.title,
      imageUrl: context.params.imageUrl,
      description: context.params.description,
      tickets: Number(context.params.tickets),
      genres: context.params.genres.split(',')
    };

    requester
      .put(endpoint, 'appdata', 'Kinvey', payload)
      .then(helper.handler)
      .then(() => {
        context.redirect('#/movie/user');
      });
  };

  const getDelete = function(context) {
    helper.addHeaderInfo(context);
    const id = context.params.id;
    const endpoint = `movies/${id}`;
    console.log(endpoint);
    requester
      .get(endpoint, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then(movie => {
        context.movie = movie;
        context
          .loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
          })
          .then(function() {
            this.partial('../views/movie/delete.hbs');
          });
      });
  };

  const postDelete = function(context) {
    const id = context.params.id;
    const endpoint = `movies/${id}`;

    requester
      .del(endpoint, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then(() => {
        context.redirect('#/movie/user');
      });
  };

  const getDetails = function(context) {
    helper.addHeaderInfo(context);
    const id = context.params.id;
    const endpoint = `movies/${id}`;
    console.log(endpoint);
    requester
      .get(endpoint, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then(movie => {
        context.movie = movie;
        context
          .loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
          })
          .then(function() {
            this.partial('../views/movie/details.hbs');
          });
      });
  };

  return {
    getCreate,
    postCreate,
    getCinema,
    myMovies,
    getEdit,
    postEdit,
    getDelete,
    postDelete,
    getDetails
  };
})();
