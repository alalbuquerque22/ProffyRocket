import {View, Image , Text} from 'react-native'
import React from 'react'


import styles from './styles';

function TeacherItem(){
    return (
        <View style = {styles.container}>
            <View style =  { styles.profile} >
                <Image style={styles.avatar} 
                source = {{uri:''}}/>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Andre Albuquerque</Text>
                    <Text style={styles.subject}>Quimica</Text>    
                </View>

            </View>
            <Text style = { styles.bio}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             {'\n'}{'\n'} Aperiam reiciendis officiis qui facere tempora quaerat sint id earum et, quibusdam minus, possimus excepturi labore, omnis consectetur quas illum? Sapiente, velit.   </Text> 
        </View>
    )
}
export default TeacherItem;