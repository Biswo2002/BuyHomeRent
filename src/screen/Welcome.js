import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ImageBG = [
    {
        id: 'img1',
        Image: require('../assets/image/R3.jpg'),
    },
    {
        id: 'img2',
        Image: require('../assets/image/R10.jpg'),
    },
    {
        id: 'img3',
        Image: require('../assets/image/R9.jpg'),
    },

]
const Welcome = () => {
    return (
        <SafeAreaView style={styles.Main}>
            <View>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
                data={ImageBG}
                renderItem={({ item }) => (
                    <ImageBackground source={item?.Image}
                        style={styles.ImageBackground} 
                        imageStyle={{borderBottomLeftRadius:100,}}
                         > 
                    </ImageBackground>
                )}
            />
            </View>
            <View style={styles.MainText}>
                <Text style={styles.HeadText}>Find Your sweet home</Text>
            </View>
            <View style={styles.secondText}>
                <Text style={styles.SubText}>A place where anyone can come together to create video or audio content for social platforms they're prolific on</Text>
            </View>
            <TouchableOpacity style={styles.StartingBtn}>
                <Text style={styles.btn}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#fff',
        flex: 1,
    },
    ImageBackground: {
        width: 420,
        height: 450,
    },
    MainText:{
        marginTop:40,
        width:300,
    },
    HeadText:{
        fontSize:40,
        fontWeight:'bold',
        color:'#000',
        marginHorizontal:30,
    },
    secondText:{
        marginHorizontal:30,
    },
    SubText:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'justify',
        paddingTop:10,
    },
    StartingBtn:{
        backgroundColor:'#000',
        marginHorizontal:50,
        marginTop:80,
        height:55,
        alignItems:'center',
        padding:15,
        borderRadius:12,
    },
    btn:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold',
    }
}) 