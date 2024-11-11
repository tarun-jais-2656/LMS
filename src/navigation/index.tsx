import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/splash";
import GetStarted from "../screens/getStarted";
import Tutorial from "../screens/tutorial";
import Login from "../screens/login";
import SignUp from "../screens/signUp";
import Otp from "../screens/otp";
import Forgot from "../screens/forgot";

type RootStackParamList = {
    Splash: undefined;
    GetStarted: undefined;
    Tutorial: undefined;
    Login:undefined
    SignUp:undefined
    Otp:undefined
    Forgot:undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation: React.FC = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tutorial"
            component={Tutorial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={Otp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forgot"
            component={Forgot}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default StackNavigation;