import React, { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Dimensions, Button } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { MAPS } from './mock';
import { Dropdown } from 'react-native-material-dropdown';
import { createStackNavigator } from '@react-navigation/stack';
import api from '../../services/api';

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

const Forms = ({navigation}) =>
{

  let [severity, setSeverity] = useState();
  const data = [
      {
        value: 0,
        label: "Leve"
      },
      {
        value: 1,
        label: "Média"
      },
      {
        value: 2,
        label: "Grave"
      }
  ];
  
  

  return (
    <View style={styles.container}>
      <Text>Aviso de Aglomeração</Text>
      <Dropdown
        onChangeText={(value) => {setSeverity(value)}}
        label="Severidade"
        data={data}
      />
      <Button title="Severidade" onPress={() => navigation.navigate("InsertMap", {severity: severity})} />
    </View>
  );
}

const InsetMap = ({navigation, route}) => {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [mapList, setMapList] = useState(MAPS);
  const { severity } = route.params;

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
    <MapView
      style={styles.map}
      region={currentRegion}
      showsUserLocation
      onPress={(e => {setMapList(
        { markers: [...mapList.markers,
          { 
            aglomeration_level: severity,
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
        }
      ); navigation.replace("Maps")})}
    >
      {
        mapList.markers.map((marker, id) => {
          return(
            <SmallGroup marker={marker} key={id.toString()} />
          )
        })
      }
    </MapView>
  )
}

function MainMaps({navigation, route}) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [mapList, setMapList] = useState(MAPS);

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
        >
          {
            mapList.markers.map((marker, id) => {
              return(
                <SmallGroup marker={marker} key={id.toString()} />
              )
            })
          }
        </MapView>
        <TouchableOpacity style={{
          position: "absolute", left: Dimensions.get('screen').width -90,top: Dimensions.get('screen').height - 250,
          backgroundColor: '#ffffff', borderRadius: 100,
          padding: 10
        }}
          onPress={() => navigation.navigate("Forms")}
        >
          <MaterialIcons name="add-location" size={50} color="rgba(255, 0, 0, 1)" />
        </TouchableOpacity>
      </View>
  );
}

const Stack = createStackNavigator();

const Maps = () => 
{
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={MainMaps} name="Maps" />
      <Stack.Screen component={Forms} name="Forms" />
      <Stack.Screen component={InsetMap} name="InsertMap" />
    </Stack.Navigator>
  )
}

export default Maps;