import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './Info.module.css'

const Info = (props) => {
    const { info } = props

    return (
        <Card className={classes.main}>
            <div className={classes.section}>
                <h4>General Buy / Sell Details</h4>
                <div className={classes.fields}>
                    <div className={classes.field}>
                        <label>Buy Tax</label>
                        <span>{info.details.buyTax}</span>
                    </div>
                    <div className={classes.field}>
                        <label>Sell Tax</label>
                        <span>{info.details.sellTax}</span>
                    </div>
                    <div className={classes.field}>
                        <label>Transfer Tax</label>
                        <span>{info.details.transferTax}</span>
                    </div>
                    <div className={classes.field}>
                        <label>Max Tokens Per Buy</label>
                        <span>{info.details.maxTokensPerBuy}</span>
                    </div>
                    <div className={classes.field}>
                        <label>Max Tokens Per Sell</label>
                        <span>{info.details.maxTokensPerSell}</span>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <h4>Your Current Tax Bracket</h4>
                <div className={classes.fields}>
                    <div className={classes.field}>
                        <label>Sell Tier 1 (+10%)</label>
                        <span>{info.taxBracket.sellTier}</span>
                    </div>
                    <div className={classes.field}>
                        <label>Transfer Tier 1 (+10%)</label>
                        <span>{info.taxBracket.transferTier}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Info