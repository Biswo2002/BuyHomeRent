import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'



const Home = () => {
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.HeadContainer}>
        <View style={styles.MainHeader}>
          <View>
            <Text style={styles.Location}>Location</Text>
            <View style={styles.LocationCont}>
              <Text style={styles.Canada}>Canada</Text>
              <AntDesign name='down' size={15} color={'#000'} />
            </View>
          </View>
          <View style={styles.ImgContainer}>
            <Image source={require('../assets/image/User.jpg')}
              style={styles.UesrImg}/>
            <Entypo name='dot-single' size={40} color='red' style={styles.Dot} />
          </View>
        </View>
        <View style={styles.SearchBar}>
          <View style={styles.SearchContainer}>
            <AntDesign name='search1' size={20} style={styles.InputIcon} />
            <TextInput placeholder='Search address, city, location' style={styles.InputText} />
          </View>
          <View style={styles.Icon}>
            <Entypo name='shuffle' size={20} color={'#fff'} />
          </View>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  HeadContainer: {
    marginHorizontal: 10
  },
  LocationCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
    marginTop: 30
  },
  Dot: {
    marginLeft: 25,
  },
  UesrImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'absolute',
  },
  Location: {
    fontSize: 17,
  },
  Canada: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  SearchBar: {
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  SearchContainer: {
    borderWidth: 2,
    borderColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    width: 290,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
  },
  InputText: {
    paddingHorizontal: 10,
    fontSize: 17
  },
  InputIcon: {
    paddingLeft: 15,
  },
  Icon: {
    backgroundColor: '#000',
    width: 50,
    borderRadius: 15,
    padding: 15,
  }
})
