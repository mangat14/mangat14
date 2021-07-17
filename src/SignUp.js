import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput, TouchableNativeFeedbackComponent, TouchableOpacity,
  useColorScheme,
  View, Alert, Image,
} from "react-native";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      confEmail:'',
      password:'',
      phoneNo:'',
      confPassword:''
    }
  }

   validEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text)
   }

   validPassword(text){
     const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     return strongRegex.test(text)
   }


  render() {
    return <ScrollView style={{ flex: 1,}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => Alert.alert("back button pressed")}>
          <Text>back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Home Page")}>
          <Text>Home</Text>
        </TouchableOpacity>

      </View>

      <View>
        <Text style={{ fontFamily: "Times New Roman", fontSize: 20, alignSelf: "center", marginVertical: 30 }}>Create
          Your Account</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput style={styles.TextInput} placeholder="First Name*" />

        <TextInput style={styles.TextInput} placeholder="Last Name*" />
      </View>
      <View>
        <TextInput style={styles.TextInput} placeholder="Age*" keyboardType={'numeric'}/>

        <TextInput
          style={styles.TextInput}
          placeholder="Email Id*"
          onChangeText={text => {
          //onChangeEmail(text)
          this.setState({email:text})
          }}
          value={this.state.email}
          />
        <Text style={{marginVertical:2, marginHorizontal:15, color:'red'}}>{!this.validEmail(this.state.email)?'Email is not Valid':''}</Text>


        <TextInput style={styles.TextInput} placeholder="Confirm Email Id*"
                   onChangeText={text =>{
                     this.setState({confEmail:text})
                   } }/>
        <Text style={{marginVertical:2, marginHorizontal:15, color:'red'}}>{this.state.email!=this.state.confEmail ? 'email id not match':''}</Text>

        <TextInput style={styles.TextInput} placeholder="Phone No*" keyboardType={'numeric'} maxLength={10}
                  onChangeText={text => {
                    this.setState({phoneNo:text})
                  }} />

        <TextInput style={styles.TextInput} placeholder="Password*"
        onChangeText={text=> {this.setState({password:text})}}
        />

        <Text style={{marginVertical:2, marginHorizontal:15, color:'red'}}>{!this.validPassword(this.state.password)?'enter password with correct validation':''}</Text>

        <TextInput style={styles.TextInput} placeholder="Confirm Password*"
        onChangeText={text => {this.setState({confPassword:text})
        }}
        />

        <Text style={{marginVertical:2, marginHorizontal:15, color:'red'}}>{this.state.password!=this.state.confPassword?'password not matched':''}</Text>

        <TouchableOpacity style={{backgroundColor: "#0013",
                          alignItems:'center',borderRadius: 20,borderColor:'black',margin: 5}}
                          onPress={() => Alert.alert("Submit Form")}>
          <Text style={{fontSize:25,padding:10}}>Submit</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>;
  }

}

export default SignUp;

const styles= StyleSheet.create({
  TextInput:{
    fontSize: 20,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 5,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    padding: 10,
  }
})
