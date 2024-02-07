import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ModernRxApp from './modernRedux/ModernRx_App';
import { Provider } from 'react-redux';
import modernStore from './modernRedux/store/store';
import legendaryStore from './legendaryRedux/store/store';
import LegendaryRxApp from './legendaryRedux/LegendRx_App';
// console.log(legendaryStore); //output {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
// console.log(modernStore);    //output {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModernRedux />
    <LegenDaryRedux />
  </React.StrictMode>
);

function ModernRedux(){ //This app create with modern way of redux-react
  return(
    <Provider  store={modernStore}>
      <ModernRxApp />
    </Provider>
  );
}

function LegenDaryRedux(){//This app create with legendary way of redux-react
  return(
    <Provider store={legendaryStore}>
      <LegendaryRxApp />
    </Provider>
  );
}