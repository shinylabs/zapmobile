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
                    <Image
                        style={styles.image}
                        source={require('./img/zapchain.png')}/>
                    <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.facebook_button}>
                        <Text style={styles.buttonText}>Login with Facebook</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.twitter_button}>
                        <Text style={styles.buttonText}>Login with Twitter</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
 
    onSubmitPressed() {
        this.props.navigator.push({
            title: "Welcome",
            component: SecureView
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
        width: 150,
        height: 150,
        alignSelf: "center"
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
    facebook_button: {
        borderColor: "#3b5698",
        backgroundColor: "#3b5698",
        height: 42,
        flex: 1,
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 50,
        justifyContent: "center"
    },
    twitter_button: {
        borderColor: "#34a7ff",
        backgroundColor: "#34a7ff",
        height: 42,
        flex: 1,
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 15,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});
 
module.exports = LoginView;