import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    PlatformColor,
    StyleSheet,
    SafeAreaView,
    ImageStore,
    Dimensions
} from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';

import { CONSTANTS, SIZES, FONTS, images, COLORS} from "../constants";

const Login = ({navigation}) => {

    const [name,setName] = React.useState(null);
    const [email,setEmail] = React.useState(null);
    const [userName, setUserName] = React.useState(null);
    const [password, setPassword] = React.useState(null);


    function renderHeader() {
        return (
            <View style={styles.header}>
                <Image 
                    source={images.basicRat}
                    style={styles.headerImage}
                />
                <View style={styles.headerBreaker}/>
                <Text style={styles.headerText}>Rat Adventure</Text>
                <View style={styles.headerBreaker}/>

            </View>
        )
    }

    function renderLogin() {
        return (
            <View style= {styles.loginBox}>
                <TouchableOpacity>
                    <IconAntDesign name='caretdown' size={23} style={styles.arrow}/>
                </TouchableOpacity>
                <Text style={styles.loginText}>Sign In</Text>
                <View style={styles.nameContainer}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={name => setName(name)}
                        defaultValue={name}
                        placeholder="Full Name"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.nameContainer}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={email => setEmail(email)}
                        defaultValue={email}
                        placeholder="Email"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.nameContainer}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={userName => setUserName(userName)}
                        defaultValue={userName}
                        placeholder="User Name"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.nameContainer}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={password => setPassword(password)}
                        defaultValue={password}
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> navigation.navigate('Home')}
                >
                    <Text style={styles.buttoText}>Continue</Text>
                </TouchableOpacity>       
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={PlatformColor.OS === "ios" ? 'padding': null}
            style={{flex:1}}
        >
            <View style={styles.container}>
                <ScrollView>
                    {renderHeader()}
                    {renderLogin()}
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignContent: 'center'
    },
    headerImage: {
        height: 200,
        width: 200,
        flexDirection: 'row', 
        alignSelf: 'center'
    },
    header: {
        justifyContent: 'center'
    },
    headerBreaker: {
        alignSelf: 'center',
        height: 20,
        width: 279,
        borderRadius: 10,
        backgroundColor: COLORS.emerald,    
    },
    headerText: {
        marginTop: 23,
        marginBottom: 23,
        fontFamily: FONTS.h1.fontFamily,
        fontSize: SIZES.largeTitle,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    loginBox: {
        height: Dimensions.get('window').height,
        marginTop: 3,
        backgroundColor: COLORS.orange,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    loginText: {
        alignSelf: 'center',
        fontFamily: FONTS.h1.fontFamily,
        fontSize: SIZES.h1,
        fontWeight: 'bold'
    },
    arrow: {
        marginLeft: 15,
        marginTop: 24,
    },
    nameContainer: {
        padding: 20
    },
    input: {
        marginLeft: 16,
        width: 342,
        height: 40,
        justifyContent: 'center',
        borderColor: COLORS.black,
        borderBottomWidth: 1,
        fontSize: 20,
    },
    button: {
        marginTop: 35,
        backgroundColor: COLORS.yellow,
        alignItems: 'center',
        width: 342,
        alignSelf: 'center',
        borderRadius: 25,
        elevation: 2,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        shadowColor: COLORS.black
    },
    buttoText: {
        padding: 20,
        color: COLORS.black,
        fontSize: 24,
        fontWeight: 'bold'
    },
   
    


});

export default Login;
