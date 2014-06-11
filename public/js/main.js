/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global requirejs:true */
/** @jsx React.DOM */

requirejs.config({
  baseUrl: 'public/js'
, paths: {
    React: 'vendor/react/react'
  , Fluxxor: 'vendor/fluxxor/build/fluxxor'
  , JSXTransformer: 'vendor/JSXTransformer'
  , text: 'vendor/requirejs-text/text'
  , jsx: 'vendor/requirejs-jsx/jsx'
  }
});



requirejs(['React', 'Fluxxor', 'stores/todo', 'actions/todo', 'jsx!components/Application'], function (React, Fluxxor, TodoStore, TodoActions, Application) {

  // instance stores
  var stores = {
    TodoStore: new TodoStore()
  };



  // create the flux!
  var flux = new Fluxxor.Flux(stores, TodoActions);
  React.renderComponent(new Application({flux: flux}), document.getElementById("app"));
});
