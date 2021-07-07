
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import AppNavigator from './src/navigation/appnavigator/appnavigator';
import ReduxThunk from 'redux-thunk';

//IMPORT REDUCERS
import authReducer from './src/reducers/auth/auth';
import homeReducer from './src/reducers/home/home';

const rootReducer = combineReducers({
  auth: authReducer,
  home:homeReducer
})


 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>

    </>
  );
};


export default App;