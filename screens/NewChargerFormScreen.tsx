import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { CSSProperties, FormEventHandler, useEffect, useState } from 'react';
import main from '../styles/main';
import { StyleProps } from 'react-native-reanimated';

export default function NewChargerFormScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState('Audi');

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon />)
    });
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }


  return (
    <View style={main.centered}>
      <Text style={{
        fontSize: 18,
        fontWeight: '800',
        paddingBottom: 30
      }}>
        Request a new charging location
      </Text>

      <form onSubmit={handleSubmit} style={{
        textAlign: 'center',
        width: '70%',
        alignContent: 'center'
      }}>
        <Text style={formLabelStyle}>Your EV brand</Text>
        <select style={formInputStyle}
          value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Volvo">Volvo</option>
          <option value="Tesla">Tesla</option>
        </select>

        <Text style={formLabelStyle}>ZIP Code</Text>
        <input style={formInputStyle} type="text" pattern="[0-9]{4}" placeholder='XXXX' />


        <Text style={formLabelStyle}>Comment</Text>
        <textarea style={formInputStyle} name="comment"></textarea>

        <input style={{
          borderWidth: 2,
          borderStyle: 'solid',
          borderRadius: 4,
          marginBottom: 10,
          backgroundColor: '#04AA6D',
          color: 'white',
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 16
        }} type="submit" value="Submit" />
      </form>
    </View >
  )
};

const formInputStyle: CSSProperties = {
  width: '100%',
  paddingTop: 8,
  paddingBottom: 6,
  borderColor: '#343e3d',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 4,
  marginBottom: 10
}

const formLabelStyle: StyleProps = {
  fontSize: 16,
}