import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
// import FastImage from 'react-native-fast-image';

export default function Splash() {
  // componentDidMount() {
  //   this.animation.play();
  //   // Or set a specific startFrame and endFrame with:
  //   this.animation.play(30, 120);
  // }

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require('./movr-smile.gif')} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./logo.png')} />
      </View> */}
      {/* <lottie-player
        autoplay
        controls
        loop
        mode="normal"
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style="width: 320px"
      /> */}
      <LottieView
        // ref={animation => {
        //   this.animation = animation;
        // }}
        source={require('./17902-covid19.json')}
        autoPlay
        loop
        speed={2}
      />
    </View>
  );
}
