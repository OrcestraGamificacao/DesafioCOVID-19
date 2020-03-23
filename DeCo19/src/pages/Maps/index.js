import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { MAPS } from './mock';
import AlertaAglo from '../../components/AlertaAglo';


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
  const [mapList, setMapList] = useState(MAPS);
  const [isModalVisible, setModalVisible] = useState(false);

  function openModal () {
    (e) => {
        setMapList({ markers: [...mapList.markers, { 
        aglomeration_level: 0,
        aglomeration_size: 100,
        location: {
          coordinates: [
            e.nativeEvent.coordinate.latitude,
            e.nativeEvent.coordinate.longitude
          ]
        },
        fillColor: 'rgba(0, 255, 0, 0.2)',
        strokeColor: 'rgba(0, 255, 0, 1)',

        }]
      })
    }
  }

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
      <View style={styles.header}>
        <Text style={styles.title}> Mapa de fuxo de pessoas </Text>
      </View>
      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation
        onPress = {() => openModal()}
      >
        {
          mapList.markers.map((marker, id) => {
            return(
              <SmallGroup marker={marker} key={id.toString()} />
            )
          })
        }
        <Modal
          animationType="slide"
          transparent={false}
          visible={isModalVisible}
        >
          <AlertaAglo/>
        </Modal>
      </MapView>
    </View>
  );
}

export default Maps;