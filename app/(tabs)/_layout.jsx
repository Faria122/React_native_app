import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';



const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className = "items-center justify-center gap-2">
           <Image  
              source = { icon }
              resizeMode='contain'
              tintColor={ color }
              className = "w-6 h-6"
           /> 
           <Text className = {`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style = {{color: color}}>
            {name}
           </Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
   <Tabs

   screenOptions={ {
    tabBarShowLabel : false,
    tabBarActiveTintColor: '#FFA001',
    tabBarInactiveTintColor:  'CDCDE0',
    tabBarStyle: {
      backgroundColor : 'white',
      borderTopWidth : 1,
      borderTopColor : '#232533',
      height: 73,
    }
 }}
   >
    <Tabs.Screen
    name = 'home'
    options={{
        title: 'Home',
        headerShown:false,
        tabBarIcon: ({color, focused}) =>(
            <TabIcon
              icon = {{uri:'https://cdn-icons-png.flaticon.com/128/263/263115.png'}}
              color = {color}
              name = "Home"
              focused = { focused }
            />
        )
    }}
    />
     <Tabs.Screen
    name = 'bookmark'
    options={{
        title: 'Bookmark',
        headerShown:false,
        tabBarIcon: ({color, focused}) =>(
            <TabIcon
              icon = {{uri:'https://cdn-icons-png.flaticon.com/128/5662/5662990.png'}}
              color = {color}
              name = "BookMark"
              focused = { focused }
            />
        )
    }}
    />
    <Tabs.Screen
    name = 'create'
    options={{
        title: 'Create',
        headerShown:false,
        tabBarIcon: ({color, focused}) =>(
            <TabIcon
              icon = {{uri: 'https://cdn-icons-png.flaticon.com/128/10015/10015412.png'}}
              color = {color}
              name = "Create"
              focused = { focused }
            />
        )
    }}
    />
    <Tabs.Screen
    name = 'profile'
    options={{
        title: 'Profile',
        headerShown:false,
        tabBarIcon: ({color, focused}) =>(
            <TabIcon
              icon = {{uri: 'https://cdn-icons-png.flaticon.com/128/1144/1144760.png'}}
              color = {color}
              name = "Profile"
              focused = { focused }
            />
        )
    }}
    />











   </Tabs>
    
  )
}

export default TabsLayout