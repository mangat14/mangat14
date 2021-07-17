import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView } from "react-native";
import LoadingSpinner from "./LoadingSpinner";

class AddDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age:"",
      salary:"",
      isLoading:false
    };
  }

  addData() {
   this.setState({isLoading:true})
    console.log(this.state.name,this.state.age,this.state.salary);
    fetch("http://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "name": this.state.name, "salary": this.state.salary, "age": this.state.age }),
    }).then((response) => response.json()).then((res) => {
      console.log("rese---", res);
      this.setState({isLoading:false})

   //   this.props.route.params._save(res.data)
      this.props.navigation.goBack()
    }).catch((e) => {
      console.log("error--", e);
    });
  }

  render() {
    return (
      <>

      <ScrollView style={{ flex: 1, backgroundColor: "#0013" }}>


        <View style={styles.mainView}>

          <TouchableOpacity style={styles.CancelButton} onPress={() => {
            console.log(this.props.route.params)

            this.props.navigation.goBack()

          }}>
            <Text style={styles.CancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.CancelButton}
                            onPress={() =>{ if (this.state.name==""){return  Alert.alert('fill name')}
                              else if (this.state.age==""){ return Alert.alert('fill age')}
                              else if (this.state.salary==""){return Alert.alert('fill salary')}
                              else{this.addData()}
                            } }>
            <Text style={styles.CancelText}>Done</Text>
          </TouchableOpacity>


        </View>

        <View style={styles.CharView}>
          <Text style={styles.CharText}>{this.state.name.charAt(0)}</Text>
        </View>

        <View style={styles.PhotoView}>
          <TouchableOpacity onPress={() => Alert.alert("add photo")}>
            <Text style={styles.CancelText}>Add Photo</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TextInput
            ref={(ref1)=>this.nameRef=ref1}
            style={styles.TextBox}
            placeholder={"Name"}
            blurOnSubmit={false}
            onSubmitEditing={()=>{
              this.ageRef.focus()
            }}
            onChangeText={(text) => this.setState({ name: text })}
            returnKeyType={'next'}
          />
          <TextInput
            ref={(ref1)=>this.ageRef=ref1}
            style={styles.TextBox} placeholder={"Age"}
            keyboardType={"numeric"}
            returnKeyType={'next'}
            onSubmitEditing={()=>{this.salaryRef.focus()}}
            blurOnSubmit={false}
            maxLength={2}
            onChangeText={(text)=>this.setState({age:text})}
          />
          <TextInput
            ref={(ref1)=>this.salaryRef=ref1}
            style={styles.TextBox}
            placeholder={"Salary"}
            keyboardType={"numeric"}
          onChangeText={(text)=>this.setState({salary:text})}
          />
        </View>
      </ScrollView>
        {this.state.isLoading && <LoadingSpinner/>}
      </>
    );
  }
}

const styles = StyleSheet.create({
    mainView: {

      justifyContent: "space-between",
      flexDirection: "row",
    },
    CancelButton: {
      margin: 5,
    },
    CancelText: {
      fontSize: 20,
      color: "#0099ff",
    },
    CharView: {
      backgroundColor: "grey",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      height: 100,
      width: 100,
      borderRadius: 50,
    },
    CharText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white",
    },
    PhotoView: {
      alignSelf: "center",
      margin: 5,
    },
    TextBox: {
      backgroundColor: "white",
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 5,
      padding: 10,
    },
  },
);
export default AddDetail;
