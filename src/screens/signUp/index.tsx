import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";


const SignUp=()=>{
    const navigation=useNavigation();
    const handleNav=()=>{
        navigation.navigate('Login');
    }
    const handleNavOtp=()=>{
        navigation.navigate('Otp');
    }
    return(
        <SafeAreaView>
            <View style={styles.imgView}>
                <Image
                    source={icon.sign_in}
                    style={styles.signin}
                />
                <Text style={styles.txt}>Let's get started!</Text>
                <Text style={styles.txt1}>Create an account to Appinventiv to get all features</Text>
            </View>
            <View style={styles.emailView}>
                <Image
                    source={icon.account}
                    style={styles.email}
                />
                <TextInput
                    placeholder="Enter your name"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.emailView}>
                <Image
                    source={icon.email}
                    style={styles.email}
                />
                <TextInput
                    placeholder="Enter your email"
                    style={styles.textInput}
                />
            </View>
            <View style={styles.passView}>
                <View style={styles.view1}>
                    <Image
                        source={icon.pass}
                        style={styles.email}
                    />
                    <TextInput
                        placeholder="Enter your password"
                        style={styles.textInput}
                        numberOfLines={1}
                    />
                </View>
                <Image
                    source={icon.eye}
                    style={styles.eye}
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleNavOtp}>
                <Text style={styles.btntxt}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.logoView}>
                <View style={styles.logoSubView}>
                    <Image
                        source={icon.google}
                        style={styles.logo}
                    />
                    <Image
                        source={icon.github}
                        style={styles.logo}
                    />
                </View>
            </View>
            <View style={styles.txtMainView}>
                <View style={styles.txtView}>
                    <Text>Already have an account? </Text>
                    <Text style={styles.txtColor} onPress={handleNav}>Sign In</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;

const styles=StyleSheet.create({
    imgView: {
        alignItems: 'center'
    },
    signin: {
        height: 300,
        width: 300
    },
    txt: {
        fontSize: 25,
        fontWeight: '700'
    },
    txt1: {
        color: 'grey'
    },
    email: {
        height: 25,
        width: 25,
        alignSelf: 'center'
    },
    eye: {
        height: 25,
        width: 25,
        alignSelf: 'center',
    },
    textInput: {
        marginHorizontal: 15,
    },
    emailView: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        marginTop: 20,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
    },
    view1: {
        flexDirection: 'row',
        width: '90%',
    },
    passView: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        marginTop: 20,
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        backgroundColor: '#51a6f5',
        marginHorizontal: 25,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    btntxt: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: '700',
    },
    logo: {
        height: 28,
        width: 28,
        marginHorizontal: 7,
    },
    logoView: {
        alignItems: 'center',
        marginVertical: 10,
    },
    logoSubView: {
        flexDirection: 'row'
    },
    txtMainView:{
        alignItems:'center'
    },
    txtView: {
        flexDirection: 'row'
    },
    txtColor:{
        color:'#51a6f5'
    }
})