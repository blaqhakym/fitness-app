import { View, Text } from 'react-native'
import React from 'react'
import { sliderImages } from '../constants'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel, {ParallaxImage} from "react-native-snap-carousel";


export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      renderItem={imageCard}
      autoplay={true}
      loop={true}
      hasParallaxImages={true}
      firstItem={1}
      autoplayInterval={4000}
      sliderStyle={{ dispaly: "flex", alignItems: "center" }}
      sliderWidth={wp(100)}
      itemWidth={wp(100)-70}
    />
  );
}

const imageCard = ({ item, index }, parralaxProps) => (
  <View style={{width:wp(100)-70, height: hp(25)}}>
    <ParallaxImage
      source={ item}
      containerStyle={ {borderRadius:30, flex:1}}
      style={{resizeMode: 'contain'} }
      parallaxFactor={1}
      {...parralaxProps}
    />
        </View>
      )