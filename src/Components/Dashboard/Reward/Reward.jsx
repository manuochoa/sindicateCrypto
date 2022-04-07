import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './Reward.module.css'

import circle from '../../../Assets/circle.png'

const Reward = (props) => {
    return (
        <Card className={classes.main}>
            <div className={classes.circleInfo}>
                <img src={circle} alt="circle" className={classes.circle}/>
                <span>Rebases <br/> Every 30 min</span>
                <p>25:30</p>
            </div>
            <div className={classes.info}>
                <p className={classes.infoTitle}>NEXT REWARD</p>
                <p className={classes.cash}>$0.00</p>
                <span>4.48 K $SIN</span>
            </div>
        </Card>
    )
}

export default Reward