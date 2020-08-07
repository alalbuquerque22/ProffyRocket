import  {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#0606f0',
    borderRadius:8,
    marginBottom:16,
    overflow:'hidden'


},
profile:{
    flexDirection:'row',
    alignItems:'center',
    padding:24
},
avatar:{
    width:64,
    height:64,
    borderRadius:32,
    backgroundColor:'#eee'


},
profileInfo:{
    marginLeft:16,
} ,
name:{
    fontFamily:'Archivo_700Bold',
    color:'#3226d',
    fontSize:20
},
subject:{
    fontFamily:'Poppins_400Regular',
    color:'#6a6180',
    marginTop:4
},


}); 


export default  styles;