import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './src/components/common/Header';
import reducer from './src/reducers';
import LibraryList from './src/components/LibraryList';

const App = () => {
   return (
      <Provider store={createStore(reducer)}>
         <View>
            <Header />
               <LibraryList />
         </View>
      </Provider>
   );
};

export default App;
