import React, {Component} from 'react'
import {View, Text, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';

export class MyCarousel extends Component {

    _renderItem = ({item, index}) => {
        return (
            <View style={{}}>
                <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{ item.title }</Text>
                <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{ item.title }</Text>
                <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{ item.title }</Text>
                <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{ item.title }</Text>
                <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{ item.title }</Text>
                <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{ item.title }</Text>
                <Text style={{textAlign: 'center', backgroundColor: 'green'}}>{ item.title }</Text>
            </View>
        );
    }

    render () {
      var {height, width} = Dimensions.get('window');

        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={[{title: 'adadsa'},{title: 'adadsa'},{title: 'adadsa'},{title: 'adadsa'}]}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 100}
            />
        );
    }
}

export default MyCarousel;