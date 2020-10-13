import {AntDesign} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {BottomTabParamList, TabOneParamList, TabTwoParamList} from "../types";

import {Text, View} from "../components/Themed";
import {useAppContext} from "../contexts/AppContext";
import {useNavigation} from "@react-navigation/native";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();
const Header = () => (
    <View>
        <Text>Address</Text>
    </View>
);

export const BottomTabNavigator: React.FunctionComponent = () => (
    <BottomTabNavigatorInternal/>
);

function BottomTabNavigatorInternal() {
    const appContext = useAppContext();
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    if(!appContext.user.location) {
        navigation.navigate("AddressSetup");
        return null;
    }

    return (
        <BottomTab.Navigator
            initialRouteName="Discover"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}
        >
            <BottomTab.Screen
                name="Discover"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="find" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Browse"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="shoppingcart" color={color}/>
                    ),
                }}
            />
            <BottomTab.Screen
                name="Favourites"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="heart" color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="More"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <TabBarIcon name="ellipsis1" color={color}/>
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <AntDesign size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{headerTitle: "Tab One Title"}}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{headerTitle: "Tab Two Title", header: () => <Header/>}}
            />
        </TabTwoStack.Navigator>
    );
}
