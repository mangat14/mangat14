import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import CheckBox from "@react-native-community/checkbox";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    //const [isSelected, setSelection] = useState(false);
    this.state = {
      email: "",
      password: "",
      isChecked:false
    };
  }

  validEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  }

  render() {


    return (
      <ScrollView style={styles.mainView}>
        <View style={styles.topView}>
        <Image source={require('./assets/flacto.jpg')} style={styles.image}/>
          <Text style={styles.topViewText}>FLACTO</Text>
        </View>

        <View style={styles.topView1}>
          <Text style={styles.topViewText1}>heading</Text>
        </View>

        <View style={styles.cardView}>

          <Text style={styles.cardViewText}>SIGN IN</Text>

          <TextInput placeholder={"Enter your email"}
                     style={styles.input}
                     onChangeText={text => {
                       this.setState({ email: text });
                     }}
                     returnKeyType={"next"}
                     onSubmitEditing={() => {
                       this.pwdRef.focus();
                     }}
                     blurOnSubmit={false}
          />

          <Text style={styles.inputText}>
            {
              this.state.email == "" ? "Email is required" : "" || !this.validEmail(this.state.email) ? "Enter correct email" : ""
            }
          </Text>

          <TextInput placeholder={"Enter your password"}
                     ref={(ref1) => this.pwdRef = ref1}
                     style={styles.input} maxLength={10}
                     onChangeText={text => {
                       this.setState({ password: text });
                     }}
          />

          <Text style={styles.inputText}>
            {
              this.state.password == "" ? "Password is required" : ""
            }
          </Text>

          <View style={styles.checkView}>
            <CheckBox
              value={this.state.isChecked}
              onValueChange={(value)=>{this.setState({isChecked:value})}}
              tintColors={{true:'#cd1b1b',false:'black'}}
            />
              {/*
                      value={isSelected}
                      onValueChange={setSelection}*/}
            <Text style={styles.checkText}>Remeber me</Text>
          </View>

          <TouchableOpacity
            onPress={() =>this.state.isChecked==true ?
              Alert.alert('email is '+this.state.email +'\n'+'password is '+this.state.password):
            Alert.alert('email and password is not saved')}
            style={styles.button}>
            <Text>Sign In</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }

}

export default SignIn;
const styles = StyleSheet.create({
  image:{height:30,width:30,marginRight:5,borderRadius:50},
  button: {
    fontSize: 20,
    borderRadius: 20,
    borderColor: "black",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#cd1b1b",
    marginBottom: 25,
  },
  cardView: {
    margin: 15, elevation: 15,
    justifyContent: "space-between",
    shadowColor: "black", shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6, shadowOpacity: 0.50, backgroundColor: "#f8e8b2",
  },
  input: {
    borderWidth: 0.5, padding: 10,
    marginHorizontal: 15, borderRadius: 5, marginVertical: 5,
  },
  inputText: {
    color: "#d51c1c", marginLeft: 15,
    marginVertical: 5,
  },
  mainView: { flex: 1, backgroundColor: "#0013" },
  topView: { alignSelf: "center", marginTop: 80,flexDirection: 'row' },
  topView1: { alignSelf: "center" },
  topViewText: { fontSize: 20, fontWeight: "bold" },
  topViewText1: { fontSize: 12 },
  cardViewText: { marginVertical: 10, alignSelf: "center", fontWeight: "bold" },
  checkView: { flexDirection: "row", marginLeft: 15 },
  checkText: { alignSelf: "center" },


});
