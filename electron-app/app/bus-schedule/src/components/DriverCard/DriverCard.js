import React, { Component } from 'react';
import styles from './DriverCard.module.scss'
import Delimiter from '../Delimiter/Delimiter.js'
import DriverStatusButton from '../DriverStatus/DriverStatusButton'

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
                <div className={styles.driverInfo}>
                    <p className={styles.name} >{this.getName()}</p>
                    <DriverStatusButton/>
                </div>  
                <Delimiter color="Primary"/>
            </div>  
        </div>
      );
  }
  
}

export default DriverCard