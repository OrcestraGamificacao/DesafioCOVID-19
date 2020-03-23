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
    latitude: marker?.location?.coordinates[0] || -48.076,
    longitude: marker?.location?.coordinates[1] || -16.003
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
        <View style={{...styles.smallMarker, backgroundColor: strokeColors[marker?.agglomeration_level || 0]}}/>
      </Marker>
      <Circle
        center={coordinate}
        radius={radius[marker?.agglomeration_level || 0]}
        fillColor={fillColors[marker?.agglomeration_level || 0]}
        strokeColor={strokeColors[marker?.agglomeration_level || 0]}
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
  const [ currentRegion, setCurrentRegion ] = useState(null);
  const [ mapList, setMapList ] = useState(MAPS);
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
        });

        api.get('/agglomerations/')
        .then(function (response) {
          setMapList(...mapList.markers,response.data);
          /* console.log(response.data); */
        })
        .catch(function (error) {
          console.log(error);
        })
        /* console.log(mapList); */
      }
    }



    userPosition();
  }, []);

  return (
    <MapView
      style={styles.map}
      region={currentRegion}
      showsUserLocation
      onPress={(e => {
        api.post('/agglomerations/create',{
            location_name: "barzinho do zé",
            description: "barzinho da casa 10",
            image_url: "",
            agglomeration_level: severity,
            longitude: e.nativeEvent.coordinate.latitude,
            latitude: e.nativeEvent.coordinate.longitude
        });
        setMapList(
        { agglomerations: [...mapList.agglomerations,
          {
            __v: 0,
            _id: "5e78eeb1ef76bb001d70c159",
            active: true,
            agglomeration_level: 3,
            description: "barzinho da casa 10",
            end_timestamp: "2020-03-23T18:00:29.716Z",
            image_url: "",
            location: {
               _id: "5e78eeb1ef76bb001d70c15a",
              coordinates: [
                -48.0768634,
                -16.003195
              ],
              type: "Point"
            },
            location_name: "barzinho do seu ze",
            start_timestamp: "2020-03-23T17:15:29.722Z",
            votes_positive: 0,
            votes_negative: 0,
        }
          ]
        }
      );
      navigation.replace("Maps")})}
    >
      {
        mapList.agglomerations.map((marker, id) => {
          return(
            <SmallGroup index={id} marker={marker} key={id.toString()} />
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

    api.get('/agglomerations/')
    .then(function (response) {
      console.log([...mapList, response.data]);
      setMapList([...mapList, response.data]);
    })
    .catch(function (error) {
      console.log(error);
    });


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
            mapList.agglomerations.map((marker, id) => {
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