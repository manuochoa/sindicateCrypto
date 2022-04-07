import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './Balance.module.css'
import Baidge from '../../UI/Baidge/Baidge'

import treasure_icon from '../../../Assets/Icons/treasure.svg'
import gift_icon from '../../../Assets/Icons/gift.svg'

const Balance = (props) => {
    const { balance } = props

    return (
        <Card className={classes.main}>
            <Baidge
                icon={treasure_icon}
                text="Treasury Balance"
                value={`$${balance.treasury.value} K`}
            />
            <Baidge
                icon={gift_icon}
                text="Today’s Gains"
                value={`$${balance.today.value} K`}
            />
        </Card>
    )
}

export default Balance