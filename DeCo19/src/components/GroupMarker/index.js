import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { Marker, Circle, Callout } from 'react-native-maps';
import styles from './styles';

const GroupMarker = ({marker, level}) => {
    const coordinate = {
      latitude: marker.location.coordinates[0],
      longitude: marker.location.coordinates[1]
    }
  
    let radius = [80, 100, 120];
    let strokeColors = ['rgba(52, 162, 0, 0.6)',
    'rgba(234, 212, 13, 0.6)',
    'rgba(255, 0, 0, 0.6)'];
    let fillColors = ['rgba(52, 162, 0, 0.1)',
    'rgba(234, 212, 13, 0.1)',
    'rgba(255, 0, 0, 0.1)'];
  
    return (
      <View>
        <Marker coordinate={coordinate} >
          <View style={{...styles.smallMarker, backgroundColor: 'rgba(255, 0, 0, 0.6)'}}/>
        </Marker>
        <Circle
          center={coordinate}
          radius={100}
          fillColor={'rgba(255, 0, 0, 0.1)'}
          strokeColor={'rgba(255, 0, 0, 0.6)'}
        />
      </View>
    )
}

export default GroupMarker;