import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import { useSelector } from 'react-redux'
import { useQuery } from "@apollo/client"
import { GET_ME } from "../../../sql/quieries/MeQuery"

const KzrUser = () => {
  const [login, setLogin] = useState(useSelector((state) => state.kzrSlice.login))
  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [group, setGroup] = useState(null)

  const [updt, {data,loading}] = useQuery(GET_ME,{
    onCompleted: async ({findOneUser}) => {
      setId(findOneUser.id)
      setName(findOneUser.name)
      setGroup(findOneUser.group)
      console.log('user found')
      console.log(findOneUser)
    },                                  
    onError: ({message}) => {
      console.log(message)
      if (message==='GraphQL error: Incorrect password'){
          console.log('Incorrect password')
          return  null
      }
      console.log('Something went wrong')
    }
  })
    
  const isDataCorrect = () => {
    if (login === '') {
      console.log('Null login')
      return false
    }
    return true
  }

  if (loading)
    return (
      <SafeAreaView style={styles.kzrMain}>
        <ActivityIndicator color="#82D2FF" backgroundColor="#333333"/>
      </SafeAreaView>
    )

  const findUserByLogin = () => {
    if (isDataCorrect())
      updt({
        variables: {
          login
        }
      })
  }

  return (
    <SafeAreaView style={styles.kzrMain}>
      <View>
        <TextInput style = {styles.rnInput} onChangeText={text => setLogin(text)} value={login} placeholder='Login'/>
        <View style={styles.kzrItem}>
          <Text style = {styles.kzrItemText}>id: {id}</Text>
        </View>
        <View style={styles.kzrItem}>
          <Text style = {styles.kzrItemText}>name:{name}</Text>
        </View>
        <View style={styles.kzrItem}>
          <Text style = {styles.kzrItemText}>group:{group}</Text>
        </View> 
        <Pressable 
          onPress={() => {findUserByLogin()}}
          style = {styles.kzrButton}
        >
          <Text style={styles.kzrButtonText}>
            Find user by login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  kzrButton: {
    marginTop: 54.9,
    marginLeft: 54.9,
    height: 46.54,
    width: 282.54,
    borderRadius: 8.72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5E5E5E",
  },
  kzrButtonText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
  kzrItem: {
    backgroundColor: "#5E5E5E",
    height: 46.54,
    width: 369.45,
    marginTop: 11.63,
    marginLeft: 11.63,
    borderRadius: 8.72,
    padding: 5.81,
    display: 'flex',
    flexDirection: 'row'
  },
  kzrItemText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16
  },
  kzrMain: {
    backgroundColor: "#333333",
    height: "100%",
    justifyContent: 'center',
  }
});

export default KzrUser