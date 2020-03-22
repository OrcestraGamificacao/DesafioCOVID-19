import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const SmallGroup = ({location}) => {
  return (
    <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}} >
      <View style={styles.smallMarker}/>
    </Marker>
  )
}

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
        showsUserLocation
      >
        <SmallGroup location={currentRegion} />
      
      </MapView>
    </View>
  );
}

export default Maps;