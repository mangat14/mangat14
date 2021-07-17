import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

class flatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTextInput: "Mangat",
      itemsList: [{
        "firstName": "Mangat",
        "lastName": "Bansal",
        "age": 28,
        "Phone": "9872004671",
        "Gender": "M",
      },
        {
          "firstName": "Dipanshu",
          "lastName": "Jindal",
          "age": 28,
          "Phone": "9465211577",
          "Gender": "M",
        },
        {
          "firstName": "Prateek",
          "lastName": "Sharma",
          "age": 35,
          "Phone": "9872007845",
          "Gender": "M",
        },
      ],
    };
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <FlatList
          data={this.state.itemsList}
          renderItem={({ item, index }) => <TouchableOpacity
            style={{ backgroundColor: "white", margin: 10, height: 40 }} onPress={() => {
            //alert(item)
            let item = this.state.itemsList;
            item = item.filter((e) => {
              return e.firstName.includes(this.state.searchTextInput);
            });
            this.setState({ itemsList: item });
            /* this.props.navigation.navigate("DetailScreen",{
               "item":item
             })*/
          }
          }>
            <Text style={{ color: "black" }}>
              {item.firstName + item.lastName}
            </Text>
          </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default flatList;
