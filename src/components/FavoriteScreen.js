import React from "react";
import {Text,TextInput,View,StyleSheet,TouchableOpacity,Alert,Image,FlatList} from 'react-native';
import LoginScreen from "../LoginScreen";

class FavoriteScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state={

      search:'',
      itemsList:[{
        "firstName": "Mangat",
        "lastName": "Bansal",
        "age": 28,
        "Phone": "9872004671",
        "Gender": "M",
      },
        {
          "firstName": "Tanisha",
          "lastName": "Gupta",
          "age": 26,
          "Phone": "9872004672",
          "Gender": "F",
        },
        {
          "firstName": "Deepu",
          "lastName": "Jindal",
          "age": 28,
          "Phone": "9872004673",
          "Gender": "M",
        },
        {
          "firstName": "Pooja",
          "lastName": "Jindal",
          "age": 27,
          "Phone": "9872004674",
          "Gender": "F",
        }

      ]
    };
  }


  render() {
    let itemsList=this.state.itemsList
    let search=this.state.search
    if (search!=""){
      itemsList=itemsList.filter((e,i)=>{
        return e.firstName.toLowerCase().includes(search.toLowerCase()) || e.lastName.toLowerCase().includes(search.toLowerCase())
      })
    }

    return (
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity  onPress={()=>Alert.alert('click to add favorites')} >
            <Image style={{height:30,width:30 ,margin:5}} source={require('../assets/addbutton.png')}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>Alert.alert('edit contact')}>
          <Text style={{color:'#0099ff',fontWeight:'bold',fontSize:20 ,margin:7}}> Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight:'bold',fontSize:40 ,margin:5}}>Favorites</Text>
        <View>
          <TextInput style={{backgroundColor:'#0013',margin:5,padding:5,borderRadius:10}}
                     placeholder="search" onChangeText={text=>{this.setState({search:text})}} />
        </View>
        <FlatList
          data={itemsList}
          renderItem={({item,index})=> <View style={styles.FavView1}>
            <View style={styles.FavView2}>
             <Text>{item.firstName.charAt(0)}</Text>
            </View>
            <View style={styles.FavView3}>
              <Text style={styles.FavContacts }>
                {item.firstName+ ' ' + item.lastName +'\n'+'\n'+ item.Phone}
              </Text>
              <TouchableOpacity  onPress={()=>{ alert(JSON.stringify(item))}} >
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
export default FavoriteScreen


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
    width:50,
    height:50,
    backgroundColor:'#0013',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    margin:5
  },
  FavView3:{flexDirection:'row',
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
