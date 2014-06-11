/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['React', 'Fluxxor', 'jsx!components/TodoItem'], function (React, Fluxxor, TodoItem) {
  
  var FluxMixin = Fluxxor.FluxMixin(React),
      StoreWatchMixin = Fluxxor.StoreWatchMixin;


  return React.createClass({
    
    mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

    getStateFromFlux: function() {
      var flux = this.getFlux();
      return flux.store("TodoStore").getState();
    },

    render: function() {
      return (
        <div>
          <ul>
            {this.state.todos.map(function(todo, i) {
              return <li key={i}><TodoItem todo={todo} /></li>;
            })}
          </ul>
          <form onSubmit={this.onSubmitForm}>
            <input ref="input" type="text" size="30" placeholder="New Todo" />
            <input type="submit" value="Add Todo" />
          </form>
          <button onClick={this.clearCompletedTodos}>Clear Completed</button>
        </div>
      );
    },

    onSubmitForm: function(e) {
      e.preventDefault();
      var node = this.refs.input.getDOMNode();
      this.getFlux().actions.addTodo(node.value);
      node.value = "";
    },

    clearCompletedTodos: function(e) {
      this.getFlux().actions.clearTodos();
    }
  });

});