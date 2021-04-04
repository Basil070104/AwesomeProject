import React, { useRef, useEffect } from 'react';
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
    Dimensions,
    Animated,
    PanResponder
} from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';

import { CONSTANTS, SIZES, FONTS, images, COLORS, DownArrow} from "../constants";

const Login = ({navigation}) => {

    const [name,setName] = React.useState(null);
    const [email,setEmail] = React.useState(null);
    const [userName, setUserName] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [state, setState] = React.useState(null);

    const dropDown = new Animated.Value(0);
    const button = new Animated.Value(0);

    const dropDownAnim = () => {
        Animated.timing(dropDown, {
            toValue: Dimensions.get('window').height,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const UpAnim = () => {
        Animated.timing(button, {
            toValue: Dimensions.get('window').height,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

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

    const renderLogin = () => {
        return (
            <Animated.View style={[styles.loginBox, state ? 
            {
                transform: [{translateY: button}]
            }
            :
            {
                transform: [{translateY: dropDown}]
            }]}>
                <TouchableOpacity onPress={() => dropDownAnim(),() => setState(false)}>
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
                      
            </Animated.View>
        )
    }

    function loginOptions() {
        return(        
            <View style={styles.options}>
                <TouchableOpacity style={styles.register} onPress={() => setState(true), () => UpAnim()}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signIn} onPress={() => setState(true), () => UpAnim()}>
                    <Text style={styles.registerText}>SignIn</Text>
                </TouchableOpacity>
                <Image 
                    source={images.workoutRat}
                    style={styles.bottomImage}
                /> 
            </View>
        )
    }

    return (

        <KeyboardAvoidingView
            behavior={PlatformColor.OS === "ios" ? 'padding': null}
            style={{flex:1}}
        >
            <View style={styles.container}>

                {renderHeader()}   
                {loginOptions()}
                {() => state ? renderLogin: null}
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
        borderTopRightRadius: 25,
        zIndex: 2
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
   register: {
       backgroundColor: COLORS.orange,
       height: 60,
       width: 342,
       justifyContent: 'center',
       alignSelf: 'center',
       borderRadius: 15,
       shadowColor: "#000",
       shadowOffset: {
	       width: 0,
	       height: 4,
       },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
   },
   registerText: {
       color: COLORS.black,
       fontWeight: 'bold',
       alignSelf: 'center',
       fontSize: SIZES.h2
   },
   signIn: {
        backgroundColor: COLORS.yellow,
        marginTop: 30,
        height: 60,
        width: 342,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9
   },
   options: {
       zIndex: 1,
       marginTop: 100,
   },
   bottomImage: {
       height: 400,
       width: 400,
       alignSelf: 'center'
   }
    


});

export default Login;
