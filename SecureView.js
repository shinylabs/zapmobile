"use strict";
 
var React = require("react-native");
var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
    Component,
    StyleSheet,
    Text,
    View,
} = React;
 

class SecureView extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            password: this.props.password
        };
    }
 
    render() {
        return (
                <ScrollableTabView>
                    <ReactPage tabLabel="React" />
                    <FlowPage tabLabel="Flow" />
                    <JestPage tabLabel="Jest" />
                </ScrollableTabView>
        );
    }
 
};
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "center"
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: "center",
        color: "#656565"
    },
    subheading: {
        color: "#cccccc"
    }
});
 
module.exports = SecureView;