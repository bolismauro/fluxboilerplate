/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['constants'], function (constants) {
  
  return {
    addTodo: function(text) {
      this.dispatch(constants.ADD_TODO, {text: text});
    },

    toggleTodo: function(todo) {
      this.dispatch(constants.TOGGLE_TODO, {todo: todo});
    },

    clearTodos: function() {
      this.dispatch(constants.CLEAR_TODOS);
    }
  };
  
});