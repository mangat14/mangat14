import React from "react";
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Alert, Image, } from "react-native";
import NativeTiming from "react-native/Libraries/Core/Timers/NativeTiming";


class RecentScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      allList:[{
        "firstName": "Mangat",
        "lastName": "Bansal",
        "age": 28,
        "Phone": "9872004671",
        "Gender": "M",
         isMissed:false
      },
        {
          "firstName": "Tanisha",
          "lastName": "Gupta",
          "age": 26,
          "Phone": "9872004672",
          "Gender": "F",
          isMissed:false
        },
        {
          "firstName": "Deepu",
          "lastName": "Jindal",
          "age": 28,
          "Phone": "9872004673",
          "Gender": "M",
          isMissed:true
        },
        {
          "firstName": "Pooja",
          "lastName": "Jindal",
          "age": 27,
          "Phone": "9872004674",
          "Gender": "F",
          isMissed:true
        }

      ],
      missList:[
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:'#0090' }}>
        <View style={{ flexDirection: "row", justifyContent:'center', }}>
          <View style={{ flexDirection: "row", justifyContent: "center",margin:5}}>
            <TouchableOpacity>
              <Text style={{ borderRadius: 10, fontSize: 20, backgroundColor: "white", padding: 5 }}>ALL </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ borderRadius: 10, fontSize: 20, padding: 5, backgroundColor: "white" }}> MISSED </Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems:'center',alignSelf:'center',position:'absolute',right:10 }}>
            <Text style={{fontSize:20,color:'#0099ff'}} onPress={()=>Alert.alert('edit contact')}>Edit</Text>
          </View>
        </View>

        <Text style={{margin:5,fontSize:40,fontWeight:'bold',}}>Recents</Text>

        <FlatList data={this.state.allList}
        renderItem={({item,index})=><View style={styles.FavView1}>
          <View style={styles.FavView2}>
            <Image style={{height:30,width:30}} source={require('../assets/callbutton.jpg')}/>
          </View>

          <View style={[styles.FavView3,{borderTopWidth: index==0?0:1}]}>
            <Text style={[styles.FavContacts,{color:item.isMissed?'red':'black'}] }>
              {item.firstName+ ' ' + item.lastName +'\n'+ item.Phone}
            </Text>

            <TouchableOpacity  onPress={()=>{ this.props.navigation.navigate("DetailScreen",{"item":item})}} >
              <Image style={styles.FavImage} source={require('../assets/detailbutton.jpg')}/>
            </TouchableOpacity>

          </View>
        </View>
        }
                  keyExtractor={(item, index) => index.toString()}
        />

      </View>
    );
  }
}


export default RecentScreen;

const styles =StyleSheet.create({
  FavContacts:{
    color:'black',
    padding:7,
    margin:7,
    //backgroundColor:'white'
  },
  FavView1:{
    flex:1,
    flexDirection:'row',
    //justifyContent:'space-between'
  },
  FavView2:{
    alignItems:'center',
    justifyContent:'center',
    margin:5
  },
  FavView3:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:1,
    borderColor:'#0013',
    flex:1,
    alignItems: 'center'
  },
  FavImage:{
    height:30,
    width:30,
    marginRight:5
  },
});
