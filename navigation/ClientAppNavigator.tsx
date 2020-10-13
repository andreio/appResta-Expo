import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";

import {BottomTabParamList, ClientAppParamsList, TabOneParamList, TabTwoParamList} from "../types";

import {Text, View} from "../components/Themed";
import {AppContextProvider} from "../contexts/AppContext";
import {AddressSetupContainer} from "../screens/AddressSetupScreen";
import {BottomTabNavigator} from "./BottomTabNavigator";

const ClientNavigator = createStackNavigator<ClientAppParamsList>();
const Header = () => (
    <View>
        <Text>Address</Text>
    </View>
);

export const ClientAppNavigator = () => (
        <ClientNavigator.Navigator initialRouteName={"Home"}>
            <ClientNavigator.Screen name={"AddressSetup"} component={AddressSetupContainer}></ClientNavigator.Screen>
            <ClientNavigator.Screen name={"Home"} component={BottomTabNavigator}></ClientNavigator.Screen>
        </ClientNavigator.Navigator>
)
