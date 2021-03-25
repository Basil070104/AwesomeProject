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
    SafeAreaView
} from "react-native";

import { CONSTANTS, SIZES, FONTS, images, COLORS} from "../constants";
import { DownArrow } from "../constants/icons/DownArrow";


const Login = () => {

    function renderHeader() {
        return (
            <View style={styles.header}>
                <Text>
                    Login Page
                </Text>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={PlatformColor.OS === "ios" ? 'padding': null}
            style={{flex:1}}
        >
            <View style={styles.container}>
                <SafeAreaView>
                    <ScrollView>
                        {renderHeader()}
                    </ScrollView>
                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {

    }

});

export default Login;
