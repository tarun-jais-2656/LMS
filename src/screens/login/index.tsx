import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Login = () => {

    // const onGoogleSignin = async () => {
    //     // Check if your device supports Google Play
    //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    //     // Get the users ID token
    //     const { idToken } = await GoogleSignin.signIn();

    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    //     // Sign-in the user with the credential
    //     return auth().signInWithCredential(googleCredential);
    // }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigation = useNavigation();
    const handleNav = () => {
        navigation.navigate('SignUp');
    }
    const handleNavForgot = () => {
        navigation.navigate('Forgot');
    }

    const onLogin = () => {
        auth().signInWithEmailAndPassword(email, pass)
            .then(response => {
                Alert.alert('Login successfully!')
            })
            .catch(error => {
                console.log(error)
                if (error.code === 'auth/wrong-password') {
                    Alert.alert('Password is incorrect!')
                }
                else if (error.code === 'auth/invalid-credential') {
                    Alert.alert('Invalid credentials!')
                }
            })
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgView}>
                <Image
                    source={icon.sign_in}
                    style={styles.signin}
                />
                <Text style={styles.txt}>Welcome Back!</Text>
                <Text style={styles.txt1}>Login to your existing account of Appinventiv</Text>
            </View>
            <View style={styles.emailView}>
                <Image
                    source={icon.email}
                    style={styles.email}
                />
                <TextInput
                    placeholder="Enter your email"
                    style={styles.textInput}
                    value={email}
                    onChangeText={value => setEmail(value)}
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
                        value={pass}
                        onChangeText={value => setPass(value)}
                    />
                </View>
                <Image
                    source={icon.eye}
                    style={styles.eye}
                />
            </View>
            <View style={styles.forgotView}>
                <Text style={styles.forgotTxt} onPress={handleNavForgot}>Forgot password</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={onLogin}>
                <Text style={styles.btntxt}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.logoView}>
                <View style={styles.logoSubView}>
                    <TouchableOpacity>
                        <Image
                            source={icon.google}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={icon.github}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.txtMainView}>
                <View style={styles.txtView}>
                    <Text>Don't have an account? </Text>
                    <Text style={styles.txtColor} onPress={handleNav}>Sign Up</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '##e6ecf2'
    },
    imgView: {
        alignItems: 'center'
    },
    txt: {
        fontSize: 25,
        fontWeight: '700'
    },
    txt1: {
        color: 'grey'
    },
    signin: {
        height: 300,
        width: 300
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
    forgotView: {
        alignItems: 'flex-end',
        marginHorizontal: 25,
        paddingVertical: 10,
    },
    forgotTxt: {
        fontSize: 14,
        fontWeight: '600'
    },
    btn: {
        backgroundColor: '#51a6f5',
        marginHorizontal: 25,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
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
    txtMainView: {
        alignItems: 'center'
    },
    txtView: {
        flexDirection: 'row'
    },
    txtColor: {
        color: '#51a6f5'
    }
})