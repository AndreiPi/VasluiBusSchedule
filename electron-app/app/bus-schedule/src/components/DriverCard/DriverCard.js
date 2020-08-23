import React, { Component } from 'react';
import styles from './DriverCard.module.scss'
import Delimiter from '../Delimiter/Delimiter.js'

export class DriverCard extends Component  {
  
    state = {
        name: ""
    }

    getName = () =>{
        const {name} = this.props
        return name
    }

  render(){
    return (
        <div className={styles.content}>
            <div className={styles.driver}>
                <p className={styles.name} >{this.getName()}</p>
                <Delimiter color="Primary"/>
            </div>  
        </div>
      );
  }
  
}

export default DriverCard