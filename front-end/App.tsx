import 'react-native-url-polyfill/auto'
import React, { Component, useState, useEffect } from 'react'
import { supabase } from './api/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Session } from '@supabase/supabase-js'

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/appNavigation';


// const App = () => {
//     return (
//         <NavigationContainer>
//             <appNavigation />
//         </NavigationContainer>    
//     );
// };

function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}

export default App;