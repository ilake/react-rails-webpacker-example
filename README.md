# react-rails and webpacker sample application

This is a very basic Rails application to showcase usage of
[react-rails](https://github.com/reactjs/react-rails) and [webpacker](https://github.com/rails/webpacker).

Please read their documentation for more details.

## Usage

First, clone this repository and install dependancies :

```
$ cd react-rails-webpacker-example
$ bundle
$ ./bin/yarn
$ rake db:create;rake db:migrate
```

You then need to run webpack dev server to serve the assets :

```
$ ./bin/webpack-dev-server
```

Now you can run the Rails app :

```
$ ./bin/rails server
```

Finally open http://localhost:3000/ in your browser.

## Notice

The `react_component` method use component path not its class name.

```
<%= react_component("posts/paper", { title: "Hello" }) %>
```
