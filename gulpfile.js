var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsDir = "app/";
elixir.config.registerWatcher("imagemin", "app/img/**/*");
elixir.config.registerWatcher("htmlmin", ["app/templates/*.html", "app/index.html"]);

require("./elixir-tasks");

elixir(function(mix) {
    mix
        .sass([
        "libs/bootstrap.scss",
        "app.scss",
        ], "public/css/app.css")

        .scripts([
    	'libs/jquery.min.js',
        'libs/jquery.cookie.min.js',
    	'libs/velocity.min.js',
    	'libs/bootstrap.min.js',

        'libs/angular.min.js',
        'libs/angular-ui-router.min.js',

        'app.js',
    	
        'controllers/login.js',
        'controllers/register.js',
    	], 'public/js/app.js')

        .uglify('public/js/*.js', 'public/js')
        .htmlmin('app/**/*.html', 'public')
        .imagemin('app/img/**/*', 'public/img');
});