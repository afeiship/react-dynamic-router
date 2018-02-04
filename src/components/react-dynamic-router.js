import React, {createElement, Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    namespace: PropTypes.string,
    location: PropTypes.object,
    match: PropTypes.object
  };

  static defaultProps = {
    namespace: 'admin',
    location: {},
    match: {}
  };

  static build(inRoute, inRoutes) {
    return inRoutes.map((item, index) => {
      return createElement(inRoute, {
        key: index,
        path: item,
        component: this
      });
    })
  }

  /*===properties end===*/

  render() {
    const {className, location, match, namespace, ...props} = this.props;
    const modules = location.pathname.split('/');
    return createElement(
      require(`${namespace}/${modules[2]}/${modules[3]}.js`).default,
      {match}
    );
  }
}
