import React from 'react';
import './App.css'
import Header from './components/header'
import Footer from './components/footer';


class App extends React.Component {
  render() {

    return (
      <div>
        <Header />
        <h1 style={
          { backgroundColor: 'red',
            fontSize: 50,
            textAlign: 'center'
           }
        }>Main Component</h1>
        <img className='imgCar' src="https://images.unsplash.com/photo-1614687153862-b0e115ebcef1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwY2FyfGVufDB8fDB8fHww" alt="" />
        
        <Footer />
      </div>
    )
  }
}

export default App;
