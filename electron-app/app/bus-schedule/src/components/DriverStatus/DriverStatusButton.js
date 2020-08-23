import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import styles from './DriverStatusButton.module.scss'

const DriverStatusButton=(props)=>{

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

    const buttons=[]
    for(let i=1; i<31; ++i)
    {
        buttons.push(
            <Checkbox
            key={i}
            className={styles.statusButton}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
             />
            //<checkedButton key={i} className={styles.statusButton}></checkedButton>
        )
    }

    return <div className={styles.content}>
        {buttons}
    </div>
}

export default DriverStatusButton;