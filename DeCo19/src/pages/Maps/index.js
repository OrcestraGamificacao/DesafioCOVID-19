import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { MAPS } from './mock';

const SmallGroup = ({marker}) => {
  const coordinate = {
    latitude: marker?.location?.coordinates[0] || 0,
    longitude: marker?.location?.coordinates[1] || 0,
  }

  return (
    <View>
      <Marker coordinate={coordinate} >
        <View style={{...styles.smallMarker, backgroundColor: MAPS.strokeColors[marker?.aglomeration_level || 0]}}/>
      </Marker>
      <Circle
        center={coordinate}
        radius={marker?.aglomeration_size || 0}
        fillColor={MAPS.fillColors[marker?.aglomeration_level || 0]}
        strokeColor={MAPS.strokeColors[marker?.aglomeration_level || 0]}
      />
    </View>
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
        {
          MAPS.markers.map((marker) => {
            return(
              <SmallGroup marker={marker} />
            )
          })
        }
      </MapView>
    </View>
  );
}

export default Maps;