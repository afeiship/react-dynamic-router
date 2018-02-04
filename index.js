var React = require('react');
var ADMIN_PATH = 'admin/';
var JS = '.js';

module.exports = React.createClass({
  statics: {
    build: function (inRoute, inRoutes) {
      return inRoutes.map((item, index) => {
        return React.createElement(inRoute, {
          key: index,
          path: item,
          component: this
        });
      })
    }
  },
  render: function () {
    var pathname = this.props.location.pathname;
    var component = require(ADMIN_PATH + pathname.slice(7) + JS).default;
    return React.createElement(component, this.props);
  }
})
