'use strict';

var React = require('react-native');
var Tabs = require('react-native-tabs');
var {
    Component,
    StyleSheet,
    Text,
    View,
} = React;

class SecureView extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {this.state.page} goes here
        </Text>
        <Tabs selected="Home" style={{backgroundColor:'white'}}
              onSelect={function(el){self.setState({page: el.props.name});return {style:{color:'red'}}}}>
            <Text name="Activity">Activity</Text>
            <Text name="Communities">Communities</Text>
            <Text name="Profile">Profile</Text>
            <Text name="New Post">New Post</Text>
        </Tabs>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = SecureView;