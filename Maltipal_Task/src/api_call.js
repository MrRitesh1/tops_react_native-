import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AxiosGetRequest, AxiosPostRequest} from './axios';
import axios from 'axios';

const APIcallAxios = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get(`${baseUrl}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   // getData();
  //   // putData();
  //   // postData();
  // }, []);
  // const getData = async () => {
  //   await AxiosGetRequest()
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // const putData = async () => {
  //   await AxiosPutRequest(100, {
  //     title: 'dfgfdgfg',
  //     desc: 'dgsrtadvchdt ccbdgs',
  //     id: 100,
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // const postData = async () => {
  //   await AxiosPostRequest({
  //     title: 'dfgfdgfg',
  //     desc: 'dgsrtadvchdt ccbdgs',
  //     id: 100,
  //   })
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  return (
    <View>
      <ScrollView>
        {/* <Text>{data && JSON.stringify(data)}</Text> */}
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View style={styles.dataBody}>
                {/* <Text style={styles.contentHedar}>ID :</Text>
                <Text>{item.id}</Text> */}
                <Text style={styles.contentHedar}>{item.title} </Text>
                <Text style={styles.contentBody}>{item.title}</Text>
                {/* <Text style={styles.contentHedar}>Content :</Text> */}
                <Text style={styles.contentBody}>{item.body}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dataBody: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  contentHedar: {
    fontSize: 20,
    backgroundColor: '#ffe6ff',
    padding: 5,
    borderRadius: 10,
  },
  contentBody: {
    marginTop: 5,
  },
});

export default APIcallAxios;
