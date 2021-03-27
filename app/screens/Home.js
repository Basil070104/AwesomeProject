import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import 'react-native-gesture-handler';

import { CONSTANTS, SIZES, FONTS, images, COLORS} from "../constants";



const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex: 1
        
    }
})

export default Home;