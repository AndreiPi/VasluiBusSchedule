import React, {Component} from 'react';
import MenuBar from './components/MenuBar/MenuBar'
import DriverCard from './components/DriverCard/DriverCard'
import styles from './App.module.scss';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      drivers:[],
      routes:[]
    }
  }

  componentDidMount=()=>{
    this.setState({
      drivers:["Abra Vasile","Cadabra Ion","unu doi","trei patru","cinci sase","sapte opt"]
    })
  }

  renderDrivers=()=>{
    const {drivers} = this.state
    return drivers.map(name=>{
      return <div key={name}>
        <DriverCard name={name} ></DriverCard>
        </div>
    })
  }
  render(){
    const {drivers,routes} = this.state
    return (
      <div className={styles.App}>
        <header className="App-header">
        </header>
        <main className="body">
        <MenuBar/>
          <div className={styles.mainContent}>
            {this.renderDrivers()}
          </div>
        </main>
      </div>
    );
  }
 
}

export default App;
