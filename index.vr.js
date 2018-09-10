import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
import UI from './components/UI';

const Config = [
  {
    key: 0,
    //photo from: https://hiveminer.com/User/scloopy
    imageSrc: 'bm-temple.jpg',
    buttonImageSrc: 'bm-temple.jpg'
  },
  {
    key: 1,
    imageSrc: 'church.jpg',
    buttonImageSrc: 'church.jpg'
  },
  {
    key: 2,
    imageSrc: 'broken-house.jpg',
    buttonImageSrc: 'broken-house.jpg'
  },
  {
    key: 3,
    imageSrc: 'chess-world.jpg',
    buttonImageSrc: 'chess-world.jpg'
  },
  {
    key: 4,
    imageSrc: 'medieval-place.jpg',
    buttonImageSrc: 'medieval-place.jpg'
  }
];

export default class react_vr_ios extends React.Component {
  
  constructor() {  
    super();

    this.state = {
      src: 'medieval-place.jpg'
    }
  }

  render() {
    return (
      <View>
        <Canvas src={this.state.src} />
        <UI 
          buttonConfig={Config} 
          onClick={(key) => {
            this.setState({src: Config[key].imageSrc})
          }} />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr_ios', () => react_vr_ios);
