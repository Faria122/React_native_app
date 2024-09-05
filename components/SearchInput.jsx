import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants';

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
 const [showPassword, setShowPassword] = useState (false);




  return (
       /* Creating view to text input */
       <View  className= "w-full h-16 px-4 bg-black-100 border-2 border-black-500 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className = "text-base mt-0.5 text-white flex-1 font-pregular"
          value = {value}
          placeholder= "search for a video topic"
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry = {title === 'Password' && 
            !showPassword }
        />

        <TouchableOpacity>
            <Image
              source={{uri: 'https://cdn-icons-png.flaticon.com/128/15653/15653808.png'}}
              className = 'w-10 h-10'
              resizeMode='contain'
            />

        </TouchableOpacity>
      
      
       </View>
    
  )
}

export default SearchInput