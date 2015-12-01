'use strict';

import React from 'react-native';
var {
  AppRegistry,
  Navigator,
} = React;

var LoginView = require('./LoginView.js')

var App = React.createClass({
  _renderScene(route, navigator) {
    var Component = route.component;
    return (
      <Component {...route.props} navigator={navigator} route={route} />
    );
  },
  render() {

    return (
      <Navigator
        initialRoute={{
          component: LoginView,
          type: "right"
        }}
        renderScene={this._renderScene}
      />
    );
  }
});

AppRegistry.registerComponent('ZapMobile', () => App);