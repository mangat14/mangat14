import React from "react";
import { ActivityIndicator } from "react-native";


function LoadingSpinner(){
  return <ActivityIndicator size="large" color="#0000ff" style={{position:'absolute',left:0,right:0,top:0,bottom:0}} />
}
export default LoadingSpinner
