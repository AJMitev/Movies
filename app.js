window.onload = () => {
  Sammy('#container', function() {
    this.use('Handlebars', 'hbs');

    this.get('/', homeController.getHome);
    this.get('#/home', homeController.getHome);

    this.get('#/login', userController.getLogin);
    this.get('#/register', userController.getRegister);
    this.get('#/logout', userController.logout);

    this.post('#/login', userController.postLogin);
    this.post('#/register', userController.postRegister);

    this.get('#/movie/create', movieController.getCreate);
    this.get('#/cinema', movieController.getCinema);
    this.get('#/movie/user', movieController.myMovies);
    this.get('#/movie/edit/:id', movieController.getEdit);
    this.get('#/movie/delete/:id', movieController.getDelete);
    this.get('#/movie/details/:id', movieController.getDetails);

    this.post('#/movie/create', movieController.postCreate);
    this.post('#/movie/edit/:id', movieController.postEdit);
    this.post('#/movie/delete/:id', movieController.postDelete);
  }).run();
};
