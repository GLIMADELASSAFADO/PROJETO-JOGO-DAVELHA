import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function index() {
  const cell = () => {
    return (
    
    <TouchableOpacity style={styles.square}>
      <Text style={styles.symbol}>X</Text>
    </TouchableOpacity>
  );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>;
      <Text style={styles.status}>Vencedor</Text>;

      <View style={styles.board}>
        <View style={styles.row}>
           {cell()}
        </View>
        <View style={styles.row}>
          {cell()}
        </View>
        <View style={styles.row}>
          {cell()}
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    <TouchableOpacity style={styles.resetButton}>
      <Text style={styles.resetText}>Reiniciar jogo</Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
     flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFAAAA',
  },title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20,
  },
status:{ 
  fontSize:24,
  marginBottom:20,
},
board:{
marginBottom: 20
},
row:{
  flexDirection: 'row'
},
square: {
width:80,
height:80,
borderWidth: 2,
borderColor:'#333333',
alignItems: "center",
justifyContent:'center',
backgroundColor: '#E9A5F1',
),
symbol: {
  fontSize:39,
  fontWeight:bold,
},
resetButton{
  padding:10,
  backgroundColor:#333333',
  borderRadius: 5
},
  resetText{

  },


);