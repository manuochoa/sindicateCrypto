import React from "react";
import CalculatorInfoItem from "../../Components/Calculator/CalculatorInfoItem/CalculatorInfoItem";
import GeneralBuy from "../../Components/Calculator/GeneralBuy/GeneralBuy";

import classes from "./Calculator.module.css";

import coins from "../../Assets/Icons/coins.svg";
import briefcase from "../../Assets/Icons/briefcase.svg";
import coin from "../../Assets/Icons/coin.svg";

const Calculator = (props) => {
  const info = {
    initialInvestment: "0.0000",
    currentWealth: "137,76.80",
    sin: "612",
    initialInvestment2: "137,76.80",
  };

  return (
    <div className={classes.main}>
      <div className={classes.left}>
        <GeneralBuy />
      </div>
      <div className={classes.right}>
        <CalculatorInfoItem
          icon={coins}
          text="Your Initial Inverstment"
          value={`$${info.initialInvestment}`}
        />
        <CalculatorInfoItem
          icon={briefcase}
          text="Your Current Wealth"
          value={info.currentWealth}
        />
        <CalculatorInfoItem
          icon={coin}
          text="$SIN Rewards Est."
          value={`${info.sin} $SIN`}
        />
        <CalculatorInfoItem
          icon={coins}
          text="Your Initial Inverstment"
          value={`$${info.initialInvestment2}`}
        />
      </div>
    </div>
  );
};

export default Calculator;
