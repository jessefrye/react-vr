import React from 'react';
import {
    Animated,
    asset,
    Image,
    View,
    VrButton,
} from 'react-vr';

const Easing = require('Easing');

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            animatedTranslation: new Animated.Value(0),
        };
    }

    animateIn = () => {
        Animated.timing(
            this.state.animatedTranslation,
            {
                toValue: 0.125,
                duration: 100,
                easing: Easing.in,
            }
        ).start();
    }
    
    animateOut = () => {
        Animated.timing(
            this.state.animatedTranslation,
            {
                toValue: 0,
                duration: 100,
                easing: Easing.in,
            }
        ).start();
    }

    onButtonClick = () => {
        this.props.onClick();
    }

    render() {
        return (
            <Animated.View style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 0.5,
                transform: [
                    { translateZ: this.state.animatedTranslation }
                ],
            }}>
                <VrButton
                    onClick={this.onButtonClick}
                    onEnter={this.animateIn}
                    onExit={this.animateOut}
                    style={{
                        backgroundColor: 'rgba(0,0,0,.5)',
                        padding: 0.02,
                        borderRadius: 0.025,
                    }}>
                    <Image  
                        style={{
                            borderRadius: 0.025,
                            width: 0.5,
                            height: 0.5,
                        }}
                        source={asset(this.props.src)}
                    >
                    </Image>
                </VrButton>
            </Animated.View>
        );
    }
};

export default Button;