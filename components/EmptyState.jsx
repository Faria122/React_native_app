import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { router } from 'expo-router'


const EmptyState = ( { title, subtitle }) => {
  return (
    <View className = "justify-center items-center px-4">
        <Image source = {{uri: 'https://cdn-icons-png.flaticon.com/128/5058/5058046.png'}}
        className = "w-[270px] h-[215px]" 
        resizeMode = 'contain'
        />
         <Text className="font-pmedium text-sm text-gray-100">
                {title}
              </Text>
              <Text className="text-2xl text-center font-psemibold text-white mt-2">
                {subtitle}
              </Text>
              <CustomButton

              title  = 'Create videos'
              handlePress={ () => router.push ('/create')}
              containerStyles= "w-full my-5"


              />

    </View>
  )
}

export default EmptyState