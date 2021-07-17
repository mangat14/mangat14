import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,TimePickerAndroid,DatePickerAndroid} from 'react-native';


class DetailScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };

   // alert(JSON.stringify(this.props.route.params.item))
  }

  componentDidMount()
  {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick()
  {
    this.setState({
      time: new Date().toLocaleString()
    });
  }



  render() {
    let item=this.props.route.params.item;
    return (
     /* <Text style={{margin:10,color:'yellow',backgroundColor:'green'}
      }>{JSON.stringify(this.props.route.params.item)}</Text>*/
    <View style={{flex:1,backgroundColor:'red'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.goBack()}>
          <Text style={styles.buttontext}>{"<Recents"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>{"Edit"}</Text></TouchableOpacity>
      </View>

      <View style={styles.character}>
        <Text style={styles.charactertext}>{item.firstName.charAt(0)}</Text>
      </View>

      <View style={styles.name}>
        <Text style={styles.nametext}>{item.firstName}</Text>
      </View>

      <View style={styles.photoview}>

        <TouchableOpacity>
          <Image style={styles.photos} source={require('./assets/msgbutton.jpg')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.photos} source={require('./assets/phonebutton.png')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.photos} source={require('./assets/videobutton.jpg')}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.photos} source={require('./assets/mailbutton.jpg')}/>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.detail}>{"Time is "+this.state.time}</Text>
      </View>

      <View>
        <Text style={styles.detail}>{"mobile"+ '\n' +item.Phone}</Text>
      </View>


    </View>
    );
  }

}
const styles =StyleSheet.create({
  button:{
    margin:5,
  },
  buttontext:{
    fontSize:20,
    color:'#0099ff'
  },
  character:{
    borderRadius:50,
    backgroundColor:"#0013",
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
charactertext:{
  fontSize:30,
  color:'white',
  fontWeight:'bold',
},
  name:{
    alignItems: 'center',
  },
  nametext:{
    fontSize:30,
    margin: 5,
  },
  photos:{
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  photoview:{
    flexDirection:'row',
    margin:5,
    justifyContent:'space-around',
    padding:10
  },
  detail:{
    fontSize:20,
    margin:5,
    padding: 5,
    backgroundColor:'white',
    borderRadius:10
  },
});
export default DetailScreen
