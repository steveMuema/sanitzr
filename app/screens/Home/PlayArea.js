/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { TouchableOpacity, Vibration } from 'react-native';
import { H1, Content } from 'native-base';

export default class PlayArea extends Component {
  state = { count: 0 };
  componentDidMount() {
    this.animation.pause(23);
  }
  onPress = () => {
    this.animation.pause(23);
    Vibration.vibrate(50);
    this.animation.play(23, 100);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <H1>{this.state.count}</H1>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.onPress}
          style={{ flex: 0, height: 700, width: 400, marginTop: 10, justifyContent: 'space-between' }}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            source={require('./17899-hand-sanitizer.json')}
            loop={false}
            speed={2.5}
          />
        </TouchableOpacity>
      </>
    );
  }
}
