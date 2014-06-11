/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['Fluxxor', 'constants'], function (Fluxxor, constants) {
  var storage = localStorage;

  var TodoStore = Fluxxor.createStore({
    
    initialize: function() {
      this.todos = [];

      if (storage.getItem('todos')) {
        this.todos = JSON.parse(storage.getItem('todos'));
      }

      this.bindActions(
        constants.ADD_TODO, this.onAddTodo
      , constants.TOGGLE_TODO, this.onToggleTodo
      , constants.CLEAR_TODOS, this.onClearTodos
      );

    },

    onAddTodo: function(payload) {
      this.todos.push({text: payload.text, complete: false});
      this.updateStorage();
      this.emit("change");
    },

    onToggleTodo: function(payload) {
      payload.todo.complete = !payload.todo.complete;
      this.updateStorage();
      this.emit("change");
    },

    onClearTodos: function() {
      this.todos = this.todos.filter(function(todo) {
        return !todo.complete;
      });
      this.updateStorage();
      this.emit("change");
    },

    getState: function() {
      return {
        todos: this.todos
      };
    },

    updateStorage: function() {
      storage.setItem('todos', JSON.stringify(this.todos));
    }
  });


  return TodoStore;
});