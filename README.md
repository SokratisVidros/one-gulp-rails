# one-gulp-rails
Rails 5 API with Gulp powered asset pipeline

This repo combines the most comprehensive and intuitive backend stack one of the most popular frontend automation tools. Feel free to fork and customize it with your own Rails setup and relevant Gulp tasks.

## Features
- Lean Rails 5 API backend stack
- API requests and responses with camelCased or dash-cased keys, while the backend uses snake_cased ones
- ES6 with Babel
- CommonJS
- Bundling with Browserify
- JS/CSS compression
- SASS/SCSS support
- CSS Autoprefixing
- Image web optimization
- Livereload for development environments
- Static asset revisioning with dependency considerations for production environments
- Easy Heroku deploy
- AWS S3 asset upload
- CDN asset distribution via Cloudfront

For the complete list of supported tasks type in the console:

`gulp -T`

## Development environment

### Install ruby

Preferably use RVM or a similar tool to manage all your ruby dependencies. It's easy to install; just issue the following command at the terminal:

`curl -L https://get.rvm.io | bash -s stable --ruby=2.2.2`

### Install postgres
For development purposes, use [Postgres App](http://postgresapp.com/) on OSX.

### Install node.js & yarn package manager
```
brew install node
brew install yarn
```

### Install ruby dependencies
```
gem install bundler
gem install rails
bundle install
```

### Install js dependencies

In order to successfully deploy the app on Heroku, all js dependencies should be declared as normal dependencies and not devDependencies inside the package.json

```
yarn global add gulp
yarn
```

### Prepare the databases
```
rake db:create
rake db:migrate
```

### Run the server and build the assets bundlers
```
yarn start
```

### Livereload
```
yarn run server
gulp watch
```

### Server unit tests
```
rake test
```

### Client unit tests
TODO

### E2E tests
Integration run on the development server. Moreover, before running dev fixtures are loaded.

```
gulp e2e
```

### Heroku multiple buildpack deploy
[Using Multiple Buildpacks for an App](https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app)

### Future enhancements
- API Caching
- Rate limiting and request throttling
- Frontend unit testing framework
- Iconfont & SVG automations

### License
MIT
