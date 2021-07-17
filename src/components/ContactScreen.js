import React from "react";
import {
  View,
  Image,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  TextInput,
} from "react-native";
import LoadingSpinner from "./LoadingSpinner";

class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [{
        "employee_age": 61,
        "employee_name": "Tiger Nixon hgsgv d shshd sd shd sd shd dhs dsdshd s dsh",
        "employee_salary": 320800,
        "id": 1,
        "profile_image": "",
      }, {
        "employee_age": 63,
        "employee_name": "Garrett Winters",
        "employee_salary": 170750,
        "id": 2,
        "profile_image": "",
      }, {
        "employee_age": 66,
        "employee_name": "Ashton Cox",
        "employee_salary": 86000,
        "id": 3,
        "profile_image": "",
      }, {
        "employee_age": 22,
        "employee_name": "Cedric Kelly",
        "employee_salary": 433060,
        "id": 4,
        "profile_image": "",
      }, {
        "employee_age": 33,
        "employee_name": "Airi Satou",
        "employee_salary": 162700,
        "id": 5,
        "profile_image": "",
      }, {
        "employee_age": 61,
        "employee_name": "Brielle Williamson",
        "employee_salary": 372000,
        "id": 6,
        "profile_image": "",
      }, {
        "employee_age": 59,
        "employee_name": "Herrod Chandler",
        "employee_salary": 137500,
        "id": 7,
        "profile_image": "",
      }, {
        "employee_age": 55,
        "employee_name": "Rhona Davidson",
        "employee_salary": 327900,
        "id": 8,
        "profile_image": "",
      }, {
        "employee_age": 39,
        "employee_name": "Colleen Hurst",
        "employee_salary": 205500,
        "id": 9,
        "profile_image": "",
      }, {
        "employee_age": 23,
        "employee_name": "Sonya Frost",
        "employee_salary": 103600,
        "id": 10,
        "profile_image": "",
      }, {
        "employee_age": 30,
        "employee_name": "Jena Gaines",
        "employee_salary": 90560,
        "id": 11,
        "profile_image": "",
      }, {
        "employee_age": 22,
        "employee_name": "Quinn Flynn",
        "employee_salary": 342000,
        "id": 12,
        "profile_image": "",
      }, {
        "employee_age": 36,
        "employee_name": "Charde Marshall",
        "employee_salary": 470600,
        "id": 13,
        "profile_image": "",
      }, {
        "employee_age": 43,
        "employee_name": "Haley Kennedy",
        "employee_salary": 313500,
        "id": 14,
        "profile_image": "",
      }, {
        "employee_age": 19,
        "employee_name": "Tatyana Fitzpatrick",
        "employee_salary": 385750,
        "id": 15,
        "profile_image": "",
      }, {
        "employee_age": 66,
        "employee_name": "Michael Silva",
        "employee_salary": 198500,
        "id": 16,
        "profile_image": "",
      }, {
        "employee_age": 64,
        "employee_name": "Paul Byrd",
        "employee_salary": 725000,
        "id": 17,
        "profile_image": "",
      }, {
        "employee_age": 59,
        "employee_name": "Gloria Little",
        "employee_salary": 237500,
        "id": 18,
        "profile_image": "",
      }, {
        "employee_age": 41,
        "employee_name": "Bradley Greer",
        "employee_salary": 132000,
        "id": 19,
        "profile_image": "",
      }, {
        "employee_age": 35,
        "employee_name": "Dai Rios",
        "employee_salary": 217500,
        "id": 20,
        "profile_image": "",
      }, {
        "employee_age": 30,
        "employee_name": "Jenette Caldwell",
        "employee_salary": 345000,
        "id": 21,
        "profile_image": "",
      }, {
        "employee_age": 40,
        "employee_name": "Yuri Berry",
        "employee_salary": 675000,
        "id": 22,
        "profile_image": "",
      }, {
        "employee_age": 21,
        "employee_name": "Caesar Vance",
        "employee_salary": 106450,
        "id": 23,
        "profile_image": "",
      }, {
        "employee_age": 23,
        "employee_name": "Doris Wilder",
        "employee_salary": 85600,
        "id": 24,
        "profile_image": "",
      }],
      isLoading: false,
    };
  }

  componentDidMount() {
    //this.setState({ isLoading: true });
    fetch("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ isLoading: false });
        if (json && json.status && json.status == "success") {
          let data = json.data;
          if (data) {
            console.log(json.data);
            this.setState({ employeeList: data });
          }
        } else {
          alert("error");
        }

      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  }

  addData() {
    console.log("addData--");
    fetch("http://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "name": "Dummy", "salary": "12333", "age": "123" }),
    }).then((response) => response.json()).then((res) => {
      console.log("rese---", res);
    }).catch((e) => {
      console.log("error--", e);
    });
  }

  deleteData(id, index) {
    console.log("DeleteData--");
    this.setState({ isLoading: true });
    fetch("http://dummy.restapiexample.com/api/v1/delete/" + id, {
      method: "GET",
    }).then((response) => response.json()).then((res) => {
      this.setState({ isLoading: false });

      let list = this.state.employeeList;
      let item = list.findIndex((e) => {
        return e.id == id;
      });
      list.splice(item, 1);
      this.setState({ employeeList: list });
      console.log("rese---", item);
    }).catch((e) => {
      this.setState({ isLoading: false });
      console.log("error--", e);
    });

  }

  renderItems(label1, label2) {
    return <View style={styles.cardViewChild}>
      <Text style={styles.label}>{label1}</Text>
      <Text style={styles.label2}>{label2}</Text>
    </View>;

  }

  render() {
    /*let item=this.props.route.params.item;*/

    return (
      <View style={{ flex: 1, backgroundColor: "#CDCDE2FF" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => Alert.alert("group button pressed")}>
            <Text style={styles.button}>Groups</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            // this.addData();
            this.props.navigation.navigate("AddDetail", {
              _save: this._save.bind(this),
            });
          }}>
            <Image style={styles.addImage} source={require("../assets/addbutton.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 50, fontWeight: "bold", margin: 5 }}>Contacts</Text>
        </View>

        {/*<View>
          <TextInput style={{borderWidth:1,backgroundColor:'#0013',margin:5,padding:5,borderRadius:10}}
                     placeholder="search" onChangeText={text=>{this.setState({search:text})}} />
          <FlatList data={} renderItem={} />
        </View>
                <View style={{backgroundColor:'olive',borderWidth:1,margin:5,elevation:2,borderRadius:10}}>
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Text>id</Text>
            <Text>emp_name</Text>
            <Text>emp_age</Text>
            <Text>emp_salary</Text>
          </View>
        </View>
        */
        }
        <FlatList
          data={this.state.employeeList}
          renderItem={({ item, index }) =>
            <View style={{
               margin: 5, elevation: 15,
              justifyContent: "space-between",
              shadowColor: "black", shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6, shadowOpacity: 0.50, backgroundColor: "white",
              flexDirection:'row'
            }}>
              <View style={{backgroundColor:'red',flex:5}}>
                {this.renderItems("Id : ", item.id)}
                {this.renderItems("Name : ", item.employee_name)}
                {this.renderItems("Age : ", item.employee_age)}
                {this.renderItems("Salary: ", item.employee_salary)}

              </View>

              <TouchableOpacity
                style={{flex:1,alignItems:'flex-end' }}
                onPress={() => Alert.alert(
                  "Delete Contact",
                  "are u sure u want to delete this contact",
                  [{
                    text: "yes", onPress: () => {
                      this.deleteData(item.id, index);
                      /*let list=this.state.employeeList
                        list.splice(index,1)
                        this.setState({employeeList:list})*/
                    },
                  },
                    { text: "No", onPress: () => console.log("No") }],
                )}>
                <Text style={{ color: "#0099ff" }}>Delete</Text>
              </TouchableOpacity>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
        {this.state.isLoading && <LoadingSpinner />}
      </View>
    );
  }


  _save = (obj) => {
    let list = this.state.employeeList;
    let obj1 = {
      "employee_name": obj.name,
      "employee_age": obj.age,
      "employee_salary": obj.salary,
      "id": obj.id,
    };
    list.push(obj1);
    this.setState({ employeeList: list });
    alert("data" + JSON.stringify(obj));
  };
}

export default ContactScreen;

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    margin: 5,
    color: "#0099ff",
  },
  addImage: {
    height: 30,
    width: 30,
    margin: 5,
  },
  cardViewChild: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  label2: {
    fontSize: 20,
  },
});
