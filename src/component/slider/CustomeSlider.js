import React from 'react'
import {View, Text} from 'react-native'
import Carousel from './Carousel'
import { dummyData } from './data'


const CustomeSlider = () =>{
    return (
        <View>
            <Carousel data = {dummyData}/>
        </View>
    )
}

export default CustomeSlider