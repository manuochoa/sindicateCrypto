import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import DiscreteSlider from "../../UI/Form/DiscreteSlider/DiscreteSlider";
import Input from "../../UI/Form/Input/Input";
import classes from './GeneralBuy.module.css'

const GeneralBuy = (props) => {
    const [amount, setAmount] = useState(0)
    const [apy, setApy] = useState(0)
    const [priceAtPurchase, setPriceAtPurchase] = useState(0)
    const [futurePrice, setFuturePrice] = useState(0)
    
    return (
        <Card className={classes.main}>
            <div className={classes.block}>
                <h4>General Buy / Sell Details</h4>
                <div className={classes.row}>
                    <Input
                        topLabel={"$SIN Amount"}
                        onChange={setAmount}
                        value={amount}
                        endAdornment={true}
                        endAdornmentText="MAX"
                        label="$SIN Amount"
                    />
                    <Input
                        topLabel={"APY"}
                        onChange={setApy}
                        value={apy}
                        endAdornment={true}
                        endAdornmentText="CURRENT"
                    />
                </div>
                <div className={classes.row}>
                    <Input
                        topLabel={"$SIN Price at Purchase ($)"}
                        onChange={setPriceAtPurchase}
                        value={priceAtPurchase}
                        endAdornment={true}
                        endAdornmentText="CURRENT"
                    />
                    <Input
                        topLabel={"Future $SIN Price ($)"}
                        onChange={setFuturePrice}
                        value={futurePrice}
                        endAdornment={true}
                        endAdornmentText="CURRENT"
                    />
                </div>
            </div>
            <div className={classes.block}>
                <h4>Staking Duration</h4>
                <DiscreteSlider/>
            </div>
        </Card>
    )
}

export default GeneralBuy