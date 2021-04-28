import React from 'react';


import  { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fecthData } from './api';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

 async componentDidMount() {
    const fetcheddata = await fecthData();

     this.setState({ data: fetcheddata });
 }

 handleCountryChange = async (country) => {
   console.log(country);

 }

 render() {
    const { data } = this.state;

    return ( 
       <div className= {styles.container}>
           <Cards data={data} />
           <CountryPicker  handleCountryChange={this.handleCountryChange} />
           <Chart />
       </div>
    )
  }
}


export default App;