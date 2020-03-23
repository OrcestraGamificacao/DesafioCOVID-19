import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { MAPS } from './mock';
import GroupMarker from '../../components/GroupMarker';

function Maps() {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [mapList, setMapList] = useState(MAPS);
  const [isPlaceable, setPlaceable] = useState(false);

  useEffect(() => {
    const { granted } =  Location.requestPermissionsAsync();

    if(granted) {
      const { coords } = Location.getCurrentPositionAsync({enableHighAccuracy: true});
      const { latitude, longitude } = coords;
      
      setCurrentRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      })
    }
  }, []);


  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}> Mapa de fuxo de pessoas </Text>
        </View>
        <MapView
          style={styles.map}
          region={currentRegion}
          showsUserLocation
          onPress={e => {
            if(isPlaceable)
            {
              setMapList({ agglomerations: [...mapList.agglomerations,
                {
                  __v: 0,
                  _id: "5e78eeb1ef76bb001d70c159",
                  active: true,
                  agglomeration_level: 1,
                  description: "",
                  end_timestamp: "2020-03-23T18:00:29.716Z",
                  image_url: "",
                  location: {
                    _id: "5e78eeb1ef76bb001d70c15a",
                    coordinates: [
                      e.nativeEvent.coordinate.latitude,
                      e.nativeEvent.coordinate.longitude
                    ],
                    type: "Point"
                  },
                  location_name: "",
                  start_timestamp: "2020-03-23T17:15:29.722Z",
                  votes_positive: 0,
                  votes_negative: 0,
              }]});
              setPlaceable(false);
            }
          }}
        >
          {mapList.agglomerations.map((marker, id) => <GroupMarker key={id.toString()} level={marker.agglomeration_level} marker={marker}/>)}
        </MapView>
        <TouchableOpacity style={{
          position: "absolute", left: Dimensions.get('screen').width -90,top: Dimensions.get('screen').height - 250,
          backgroundColor: '#ffffff', borderRadius: 100,
          padding: 10
        }}
          onPress={() => setPlaceable(true)}
        ><MaterialIcons name="add-location" size={50} color="rgba(255, 0, 0, 1)" /></TouchableOpacity>
      </View>
  );
}

export default Maps;