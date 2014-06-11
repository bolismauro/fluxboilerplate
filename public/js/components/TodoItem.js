/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['React', 'Fluxxor', 'jsx!components/TodoItem'], function (React, Fluxxor) {

  var FluxChildMixin = Fluxxor.FluxChildMixin(React)
    ;

  return React.createClass({
    mixins: [FluxChildMixin],

    propTypes: {
      todo: React.PropTypes.object.isRequired
    },

    render: function() {
      var style = {
        textDecoration: this.props.todo.complete ? "line-through" : ""
      };

      return <span style={style} onClick={this.onClick}>{this.props.todo.text}</span>;
    },

    onClick: function() {
      this.getFlux().actions.toggleTodo(this.props.todo);
    }
  });

});