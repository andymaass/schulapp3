import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, ActivityIndicator, FlatList, SafeAreaView, View, Alert, Image} from 'react-native';
import React, { useState, useEffect } from 'react';


//Startseiten Komponente


const Startseite = () => {
 
  

  return(
    
    <View>
     
    

    <Separator />

    <Text style={styles.title}>Willkommen in der Schullapp</Text>
      <StatusBar style="auto" />
    
    <Separator />

    <Image
      style={styles.logo}
  
      source={{
        uri: 'https://blog.dgq.de/wp-content/uploads/2016/04/Kopf_Illustration-1.jpg',
      }}
    />

    <Separator />

  </View>

  
  );
};


//Login Komponente


const Login = () => {

  const [Benutzername, setBenutzername] = useState('');
  const [Passwort, setPasswort] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getData = async () => {
    try {
      
      
      let url = 'http://localhost/login.php?Benutzername='+Benutzername+'&Passwort='+Passwort;
      console.log (url)
      

      const response = await fetch(url);
      
      const json = await response.json();
      console.log(json);
      
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Benutzername"
        onChangeText={text => setBenutzername(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Passwort"
        secureTextEntry
        onChangeText={text => setPasswort(text)}
      />
      <Button title="Anmelden" onPress={getData} />
    </View>
    
  );
};



//Angemldet Komponente

const Loggedin = () => {
 
  return(
        <Text>loggedin</Text>
  );
};


//Registriert Komponente


const Register = () => {
 
  const [Benutzername, setBenutzername] = useState('');
  const [Passwort, setPasswort] = useState('');
  const [Name, setName] = useState('');
  const [Geburtsdatum, setGeburtsdatum] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getData = async () => {
    try {
      
      
      let url = 'http://localhost/register.php?Benutzername='+Benutzername+'&Passwort='+Passwort+'&Name='+Name+'&Geburtsdatum'+Geburtsdatum;
      console.log (url)
      

      const response = await fetch(url);
      
      const json = await response.json();
      console.log(json);
      
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Benutzername"
        onChangeText={text => setBenutzername(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Passwort"
        onChangeText={text => setPasswort(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Geburtsdatum"
        onChangeText={text => setGeburtsdatum(text)}
      />

      <Button title="Registrieren" onPress={getData} />
    </View>
    
  );
};
  

const Separator = () => <View style={styles.separator} />;






export default function App() {

  const [isStartseite, setStartseite] = useState(true);
  const [isRegister, setRegister] = useState(false);
  const [isLogin, setLogin] = useState(false);
    
  const toggleComponent = () => {
    setStartseite(!isStartseite); 
  
  };
  
  const toggleComponent3 = () => {
    setLogin(!isLogin);
    setStartseite(false);
    setRegister(false);
  };


  const toggleComponent2 = () => {
    setRegister(!isRegister);
    setStartseite(false);
    setLogin(false);
  };

  

  return (
  <SafeAreaView style={styles.container}>

  <View>
  <Text>Startseite</Text>
    {isStartseite ? (<Startseite/>) : ('') }
    {isLogin ? (<Login/>) : ('') }
    {isRegister ? (<Register/>) : ('') }

    <Button
      title = "Wechsel Login"
      onPress={toggleComponent}
      />
    <Button
      title = "Wechsel Register"
      onPress={toggleComponent2}
      />
  </View>  
    
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    width: 200,
    height: 86,
    
  },
});
