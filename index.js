var React = require('react');
var JS = '.js';

module.exports = React.createClass({
  statics: {
    build: function (inRoute, inRoutes) {
      var self = this;
      return inRoutes.map(function (item, index) {
        return React.createElement(inRoute, {
          key: index,
          path: item,
          component: self
        });
      });
    }
  },
  render: function () {
    var pathname = this.props.location.pathname;
    var component = require('admin/' + pathname.slice(7) + JS).default;
    return React.createElement(component, this.props);
  }
})
