/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/reducers';
import { Header } from './app/Components/Common/index';
import LibraryList from './app/Components/LibraryList';

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={createStore(reducers)} >
            <View style = {{flex: 1}}>

                <Header headerText="Tech Stack"/>
                <LibraryList/>

            </View>
        </Provider>

    );
  }
}
