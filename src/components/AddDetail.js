import React from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView, Image } from "react-native";
import LoadingSpinner from "./LoadingSpinner";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Connect, connect } from "react-redux";
import { createHomeData, getHomeData } from "../action/HomeAction";

class AddDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      salary: "",
      isLoading: false,
      imageUri: "",
      modalVisible: false,
    };
  }
  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    console.log('this.props---',this.props.addDetailRes)

  }
  addData() {
    this.setState({ isLoading: true });
    console.log(this.state.name, this.state.age, this.state.salary);
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //"name": "morpheus",
        //"job": "leader"
        "name": this.state.name,
        "job": "leader",
      }),
    }).then((response) => response.json()).then((res) => {
      console.log("rese---", res);
      this.setState({ isLoading: false });

      //  this.props.route.params._save(res.data)
      this.props.navigation.goBack();
    }).catch((e) => {
      console.log("error--", e);
    });
  }


  openCamera() {
    this.setState({ modalVisible: false });
    let options = {
      title: "Take Image",
      type: "capture",
      options: {
        saveToPhotos: true,
        mediaType: "photo",
        includeBase64: false,
        cameraType: "front",
      },
    };
    launchCamera(options, (response) => {

      if (response && response.assets && response.assets.length > 0) {
        console.log("Response = ", response.assets[0].uri);

        this.setState({ imageUri: response.assets[0].uri });
      }

    });


  }

  openGallery() {
    let options = {
      title: "Take Image",
      type: "capture",
      options: {
        saveToPhotos: true,
        mediaType: "photo",
        includeBase64: false,
        cameraType: "front",
      },
    };
    this.setState({ modalVisible: false });
    launchImageLibrary(options, (response) => {

      if (response && response.assets && response.assets.length > 0) {
        console.log("Response = ", response.assets[0].uri);

        this.setState({ imageUri: response.assets[0].uri });
      }

    });
  }

  renderModal() {
    return <Modal
      animationType="slide"
      transparent={true}
      visible={this.state.modalVisible}
    >
      <View style={styles.modalView}>
        <Text style={styles.textStyle} onPress={() => this.openCamera()}>camera</Text>
        <Text style={styles.textStyle} onPress={() => this.openGallery()}>galley</Text>
      </View>
    </Modal>;

  }

  render() {
    const { modalVisible } = this.state;

    return (
      <>

        <ScrollView style={{ flex: 1, backgroundColor: "#0013" }}>
          {modalVisible && this.renderModal()}

          <View style={styles.mainView}>

            <TouchableOpacity style={styles.CancelButton} onPress={() => {
              console.log(this.props.route.params);

              this.props.navigation.goBack();

            }}>
              <Text style={styles.CancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.CancelButton}
                              onPress={() => {
                                if (this.state.name == "") {
                                  return Alert.alert("fill name");
                                } else if (this.state.age == "") {
                                  return Alert.alert("fill age");
                                } else if (this.state.salary == "") {
                                  return Alert.alert("fill salary");
                                } else {
                                  //this.addData();
                                  this.props.fetchHomeData(this.state.name,'leader')
                                }
                              }}>
              <Text style={styles.CancelText}>Done</Text>
            </TouchableOpacity>


          </View>


          <View style={styles.CharView}>
            {this.state.imageUri == "" ? <Text style={styles.CharText}>{this.state.name.charAt(0)}</Text> :
              <Image
                style={styles.CharView}
                source={{ uri: this.state.imageUri }}
              />
            }

            {this.state.imageUri != "" &&

            <TouchableOpacity
              onPress={() => this.setState({ imageUri: "" })}
              style={{ position: "absolute", top: 3, right: 13 }}>
              <Image style={{ height: 13, width: 13 }} source={require("../assets/closebutton.jpg")} />
            </TouchableOpacity>
            }

          </View>


          <View style={styles.PhotoView}>
            <TouchableOpacity onPress={() => {
              this.setState({ modalVisible: true });
            }}>
              <Text style={styles.CancelText}>Add Photo</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TextInput
              ref={(ref1) => this.nameRef = ref1}
              style={styles.TextBox}
              placeholder={"Name"}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.ageRef.focus();
              }}
              onChangeText={(text) => this.setState({ name: text })}
              returnKeyType={"next"}
            />
            <TextInput
              ref={(ref1) => this.ageRef = ref1}
              style={styles.TextBox} placeholder={"Age"}
              keyboardType={"numeric"}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.salaryRef.focus();
              }}
              blurOnSubmit={false}
              maxLength={2}
              onChangeText={(text) => this.setState({ age: text })}
            />
            <TextInput
              ref={(ref1) => this.salaryRef = ref1}
              style={styles.TextBox}
              placeholder={"Salary"}
              keyboardType={"numeric"}
              onChangeText={(text) => this.setState({ salary: text })}
            />
          </View>
        </ScrollView>
        {this.state.isLoading && <LoadingSpinner />}
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
    modalView: {
      margin: 20,
      backgroundColor: "#ff5566",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
    },
  },
);

const mapStateToProps = (state) => {
  return {
    addDetailRes: state.HomeReducer.addDetailRes,
  };
};

function bindActions(dispatch) {
  return {
    fetchHomeData: (name,job) => {
      dispatch(createHomeData(name,job));
    },
  };
}

export default connect(mapStateToProps, bindActions)(AddDetail);
