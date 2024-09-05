import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';

const VideoCard =({  title, creator, avatar, thumbnail, video })  => {

  //const { title, thumbnail, creator } = video || {};
  //const { username = "Unknown", avatar } = creator || {};

  const [play, setPlay] = useState (false);
  return (
    <View className = "flex-col items-center px-4 mb-14">
      <View className= "flex-row gap-3 items-3">
        <View className = "justify-center items-center flex-row flex-1">
          <View className = "w-[46px]  h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5" >
            <Image source = {{uri: avatar}}
             className = "w-full h-fulll rounded-lg"
             resizeMode='cover'
            /> 
          </View>
          <View className= "justify-center flex-1 ml-3 gap-y-1">
            <Text className= "text-white font-psemibold text-sm" numberOfLines={1}>
              {title}
            </Text>
            <Text className = "text-xs text-gray-100 font-pregular"numberOfLines={1}>
              {creator}
             </Text>
          </View>
        </View>
        <View className = "pt-2">
          <Image
           source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7711/7711100.png'}}
           className= 'w-5 h-5'
           resizeMode='contain'
          />
        </View>
      </View>
      {
        play ? (
          <Text>Playing</Text>
        ): (
          <TouchableOpacity
           className= 'w-ful h-60 rounded-xl mt-3 relative justify-center items-center' 
          
          >

            <Image
            source={{ uri: thumbnail}}
            className = "w-full h-full rounded-xl mt-3"
            resizeMode='cover'
            />
          </TouchableOpacity>

        )}


    </View>
  )
}

export default VideoCard