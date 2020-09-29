import React from 'react';
import './App.scss';
import client from './client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ApolloProvider} from '@apollo/client';
import Characters from './components/Character/Character';


function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <ApolloProvider client={client} >
          <Characters/>
        </ApolloProvider>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
