import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Button,Alert,TextInput,Dimensions,Image,ScrollView } from 'react-native';
//import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
//import { NavigationContainer } from '@react-navigation/native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:'',
      Tab:''
    }
  }
  validEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text)
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, paddingTop: 40, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => Alert.alert("back button pressed")}>
            <Image style={{ width: 30, height: 30 }} source={require('./assets/backbutton.png')} />

          </TouchableOpacity>

          <TouchableOpacity style={{ position: 'absolute', left: 0, right: 0 }}
                            onPress={() =>this.props.navigation.navigate('FlatList')}>
            <Image style={{ width: 30, height: 30, alignSelf: 'center' }}
                   source={require('./assets/backbutton.png')} />
          </TouchableOpacity>

        </View>

        <View>
          <Text style={{ fontFamily: 'Times New Roman', fontSize: 20, alignSelf: 'center', marginVertical: 30 }}>Create
            Your Account</Text>
          <TextInput style={styles.textinput} placeholder='Email*'
                     onChangeText={text => {this.setState({email:text})}
                     } />

          <Text style={{ fontFamily: 'Times New Roman', fontSize: 13, marginHorizontal: 15, color: '#ff0055' }}>
            {(this.state.email !== null && this.state.email !== '') ? !this.validEmail(this.state.email) ? 'Email is invalid *' : '' : ''}</Text>

          <TextInput style={styles.textinput} placeholder='Password*'
                     onChangeText={text => {this.setState({password:text})}} />

        </View>

        <Text style={{ flexDirection: 'row', margin: 10, textAlign: 'center' }}>
          <Text style={{ fontFamily: 'Times New Roman', fontSize: 18 }}>By signing up,you agree to our</Text>
          <Text style={{ fontFamily: 'Times New Roman', fontSize: 18, color: '#ffbb00', paddingRight: 10 }}
                onPress={() => Alert.alert('agree to policy')}> Privacy Policy including processing of sensitive
            personal data</Text>
        </Text>

        <View >
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Tab')}>
            <Text>Tabs</Text>
          </TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity  style={styles.button} onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>


    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    fontSize:20,
    borderRadius:20,
    borderColor:'black',
    alignItems: 'center',
    padding:10,
    margin:10,
    backgroundColor:'#0013'
  },
  textinput:{
    fontSize:20,
    backgroundColor:'white',
    borderRadius:20,
    marginVertical:20,
    paddingHorizontal: 20,
    borderBottomWidth:1,
    padding:10,
  }
});

export default LoginScreen
