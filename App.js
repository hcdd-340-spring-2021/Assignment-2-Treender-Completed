import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { AntDesign } from '@expo/vector-icons'

function randomProfile() {
  var newProfile = Profiles.random();
  console.log(newProfile);
  return {
    profileImage: newProfile.image,
    name: newProfile.name,
    id: newProfile.id,
    location: newProfile.location
  };
}


export default function App() {
  const hoslerProfile = Profiles.hosler;
  const initProfile = {
    profileImage: hoslerProfile.image,
    name: hoslerProfile.name,
    id: hoslerProfile.id,
    location: hoslerProfile.location
  };

  const [currentProfile, setProfile] = useState(initProfile)

  return (
    // You can also use SafeAreaView to account for the statusbar
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <View style={styles.topBar}>
        {/* We used vector icons, but using an image would work as well. */}
        <AntDesign name="setting" size={32} color="#A5A5A5" />
        <Image source={Images.logo} resizeMode={'contain'} style={styles.titleImage} />
        <Image source={Images.chat} style={styles.rightIcon} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.card}>
          <Image source={currentProfile.profileImage} style={styles.profileImage} />
          <View style={styles.nameAndID}>
            <Text style={styles.name}>
              {currentProfile.name + ", "}
            </Text>
            <Text style={styles.id}>
              {"#" + currentProfile.id}
            </Text>
          </View>
          <Text style={styles.location}>
            {currentProfile.location}
          </Text>
        </View>
      </View>
      <View style={styles.actionBar}>
        <TouchableOpacity onPress={() => setProfile(randomProfile())}>
          <View style={styles.smallImageWrapper}>
            <Image source={Images.rewind} resizeMode={'contain'} style={styles.smallImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfile(randomProfile())}>
          <View style={styles.bigImageWrapper}>
            <Image source={Images.nope} resizeMode={'contain'} style={styles.bigImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfile(randomProfile())}>
          <View style={styles.smallImageWrapper}>
            <Image source={Images.boost} resizeMode={'contain'} style={styles.smallImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfile(randomProfile())}>
          <View style={styles.bigImageWrapper}>
            <Image source={Images.like} resizeMode={'contain'} style={styles.bigImage} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfile(randomProfile())}>
          <View style={styles.smallImageWrapper}>
            <Image source={Images.superLike} resizeMode={'contain'} style={styles.smallImage} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get('window');
var cardWidth = 0.43 * height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  topBar: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#A5A5A5'
  },
  statusBar: {
    height: 20,
    width: '100%',
  },
  leftIcon: {
    height: 40,
    width: 40,
    tintColor: "#C5C5C5"
  },
  titleImage: {
    height: 40,
    width: '45%',
  },
  rightIcon: {
    height: 40,
    width: 40,
    tintColor: "#C5C5C5"
  },
  mainView: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: cardWidth,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#A5A5A5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: cardWidth,
  },
  nameAndID: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 16,
  },
  location: {
    marginLeft: 16,
    marginBottom: 8,
    fontSize: 16,
    color: '#A5A5A5',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  id: {
    fontSize: 24,
  },
  actionBar: {
    width: '75%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smallImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20
  },
  bigImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25
  },
  smallImage: {
    width: 22,
    height: 22
  },
  bigImage: {
    width: 25,
    height: 25
  }
});
