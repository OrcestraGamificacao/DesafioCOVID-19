import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

function Maps() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function userPosition() {
      const { granted } = await Location.requestPermissionsAsync();

      if(granted) {
        const { coords } = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        const { latitude, longitude } = coords;
        
        setCurrentRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.006,
          longitudeDelta: 0.006,
        })
      }
    }
    
    userPosition();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={currentRegion}
      />
    </View>
  );
}

export default Maps;