import { View, Text, FlatList, Image, RefreshControl, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import { getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'

const defaultAvatar = require('');  // or use images.defaultAvatar if you have it in your constants
const Home = () => {

  const { data: posts, refetch} = useAppwrite(getAllPosts);   
  const [refreshing, setRefreshing] = useState (false)

  const onRefresh = async () => {
    setRefreshing(true);

    await refetch ();
    // recall videos -> if any videos appeard
    setRefreshing (false);
  }

  console.log(posts);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
         //data = {[{ id:1 }, { id:2 },{ id:3 },]}
         data={posts}
         keyExtractor = {(item) => item.$id}
         renderItem = {({ item }) => (
          <VideoCard 
          title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator= {item.creator?.username || "Unknown Creator"}
            avatar= {item.creator?.avatar || defaultAvatar}
          /> 
         )} 
         ListHeaderComponent={() =>(
          <View className="flex my-6 px-4 space-y-6" >
            <View className="flex justify-between items-start flex-row mb-6" >
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Welcome To Home
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                You can write here
              </Text>
            </View>
            <View className="mt-1.5">
              <Image
                 source = {images.logoSmall}
                 className = "w-9 h-10"
                 resizeMode = 'contain'
              />
            </View>
            </View>
            <SearchInput/>

            {/* this will be for latest videos */}
            <View className = 'w-full flex-1 pt-5 pb-8'>
              <Text className = "text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>

              <Trending  posts = {[{ id:1 }, { id: 2}, { id:3}] ?? []}/>


            </View>

          </View>
         )}
         ListEmptyComponent={() => (
          <EmptyState
          title = "No Videos Found"
          subtitle = "No videos created yet"      
          />
         )}
         refreshControl={<RefreshControl refreshing = { refreshing } onRefresh = {onRefresh}
         />}
      />
    </SafeAreaView>
      
    
  )
}

export default Home