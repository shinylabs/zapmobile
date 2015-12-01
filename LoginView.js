"use strict";
 
var React = require("react-native");
 
var {
    Component,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableHighlight,
    View,
} = React;
 
var SecureView = require("./SecureView");
 
class LoginView extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
 
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
                        <Text style={styles.buttonText}>Login with Facebook</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
                        <Text style={styles.buttonText}>Login with Twitter</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
 
    onSubmitPressed() {
        this.props.navigator.push({
            title: "Secure Page",
            component: SecureView,
            passProps: {username: this.state.username, password: this.state.password},
        });
    }
 
};
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    image: {
        width: 500,
        height: 500
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});
 
module.exports = LoginView;