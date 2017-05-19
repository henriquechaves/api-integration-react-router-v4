# Integration Api with React Router v4

It's a CASE consuming resource of the following general purpose API:

- [Punk API](https://punkapi.com/documentation/v2)

Basically it consume data from the API and present it in a web-based list page,
with search and pagination capability.

## Technologies

+ React JS
+ Bootstrap 4
+ Webpack
+ npm
+ Tests with Mocha, Sinon and Chai
+ Redux
+ React Router (v4)
+ POSTCSS
+ Axios
+ ESlint
+ ES6

## Available Commands

1. `npm run start` - starts the development server with hot reloading enabled

2. `npm run bs` - bundles the code and starts the production server

3. `npm run test` - start the test runner

4. `npm run watch:test` - start the test runner with watch mode

5. `npm run cover` - generates test coverage report

6. `npm run lint` - runs linter to check for lint errors

## Server Side Rendering

Now, rather than use React Router v3 and require.ensure, we make use of React Router v4.

Such framework has a package, react-router-config (see [here](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)), that allows us write routes configurations from a simple javascript plain object :)

## More

The application is component-based and make use of Axios to fetch the data.

Some tests were made in Mocha, Sinon and Chai, plus Promised Chai to async tests.

## TODO:

+ More tests.
+ Improve the linter config.
+ Remade search engine.
+ ..
