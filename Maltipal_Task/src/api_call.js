import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
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
      <Text>Welcom API Call With Axios</Text>
      <ScrollView>
        <Text>{data && JSON.stringify(data)}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default APIcallAxios;
