"use strict";
 
var React = require("react-native");
 
var {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    NavigatorIOS,
} = React;
 
var LoginView = require("./LoginView");
 
var ReactProject = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                initialRoute={{
                title: "ZapChain",
                component: LoginView,
            }} />
        );
    }
});
 
var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});
 
AppRegistry.registerComponent("ZapMobile", () => ReactProject);