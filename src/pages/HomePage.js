import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import React , { useState , useEffect} from 'react';
import axios from 'axios';


const url = 'https://jsonplaceholder.typicode.com/photos'

const Item = ({item}) => <Text>{item.id}</Text>;

export default function HomePage() {

  const [dataList, setdataList] = useState([]);

 
  const getData = () => { 
    return axios.get(url) 
             .then((response) => setdataList(response.data));}
  
             useEffect(() => {
              getData();
            }, []);
          



  const renderItem = ({item}) => {
    console.log('item', item);

    return (
      
      <View style={{padding: 10}}>
        <Text style={{paddingBottom: 20}}>{item.title}</Text>
        <Image
          style={{width: 100, height: 100, alignSelf: 'center'}}
          source={{uri: item.thumbnailUrl}}
        />
      </View>
    );
  };

  
  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };

  return (

    
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 2, backgroundColor: 'yellow'}}>
        <Text style={{fontSize:50, fontStyle:'italic', fontWeight:"900", alignSelf:'center', paddingTop:25}}>QUOTES</Text>
      </View>
      <View style={{flex: 8, backgroundColor: 'orange'}}>
       {dataList && <FlatList
          renderItem={renderItem}
          data={dataList}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
        />}
      </View>
    </SafeAreaView>
  );
}
