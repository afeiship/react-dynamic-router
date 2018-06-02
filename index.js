var React = require('react');
var createReactClass = require('create-react-class');
var JS = '.js';
var SLASH = '/';

module.exports = reactCreateClass({
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
    var modules = pathname.split(SLASH);
    var component = require('admin/' + modules[2] + SLASH + modules[3] + JS).default;
    return React.createElement(component, this.props);
  }
})
