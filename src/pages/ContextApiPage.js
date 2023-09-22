// App.js
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {DataProvider, useData} from '../context/Mycontext';

export default function App() {
  return (
    <DataProvider>
      <MainComponent />
    </DataProvider>
  );
}

function MainComponent() {
  const {data, loading} = useData();

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };

  return (
    <View>
      <Text style={{alignSelf:'center', fontSize:50, fontWeight:'900', fontStyle:'italic', paddingBottom:25, paddingTop:50, textDecorationLine:'underline'}}>QUOTES</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View>
              <View>
                <Text style={{marginLeft: 10, marginRight:10 ,fontSize:18}}>{item.title}</Text>
              </View>
              <View>
                <Image
                  source={{uri: item.thumbnailUrl}}
                  style={{width: 100, height: 100, alignSelf: 'center'}}
                />
              </View>
            </View>
          )}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      )}
    </View>
  );
}
