import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import DatabaseScreen from '../screens/DatabaseScreen';
import FileSystemScreen from '../screens/FileSystemScreen';
import NewChargerFormScreen from '../screens/NewChargerFormScreen';
import { DrawerParamList, DatabaseParamList, FileSystemParamList, NewChargerFormParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Database"
        component={DatabaseNavigator} />
      <Drawer.Screen
        name="FileSystem"
        component={FileSystemNavigator}
      />
      <Drawer.Screen
        name="NewChargerForm"
        component={NewChargerFormNavigator}
      />
    </Drawer.Navigator>
  );
}

const DatabaseStack = createStackNavigator<DatabaseParamList>();

function DatabaseNavigator() {
  return (
    <DatabaseStack.Navigator>
      <DatabaseStack.Screen
        name="DatabaseScreen"
        component={DatabaseScreen}
      />
    </DatabaseStack.Navigator>
  )
}

const FileSystemStack = createStackNavigator<FileSystemParamList>();

function FileSystemNavigator() {
  return (
    <FileSystemStack.Navigator>
      <FileSystemStack.Screen
        name="FileSystemScreen"
        component={FileSystemScreen}
      />
    </FileSystemStack.Navigator>
  )
}

const NewChargerFormStack = createStackNavigator<NewChargerFormParamList>();

function NewChargerFormNavigator() {
  return (
    <NewChargerFormStack.Navigator>
      <NewChargerFormStack.Screen
        name="NewChargerFormScreen"
        component={NewChargerFormScreen}
      />
    </NewChargerFormStack.Navigator>
  )
}
