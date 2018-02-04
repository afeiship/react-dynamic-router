import React,{ createElement, Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    location: PropTypes.object,
    match: PropTypes.object
  };

  static defaultProps = {
    location:{},
    match:{}
  };

  static buildRoutes(inRoute, inRoutes){
    return inRoutes.map((item,index)=>{
      return (
        <inRoute key={index} path={item} component={ this } />
      )
    })
  }
  /*===properties end===*/

  render(){
    const {className, location, match, ...props} = this.props;
    const modules = location.pathname.split('/');
    return createElement(
      require(`admin/${modules[2]}/${modules[3]}.js`).default,
      { match }
    );
  }
}
