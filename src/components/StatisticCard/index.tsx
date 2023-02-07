import { BiDollar } from "react-icons/bi";
import COLORS from "../../conts/color";
import styles from "./styles.module.scss"

interface CardProps{
    category: string,
    value: string,
    greenValue: string,
    describe: string,
    icon: object
}

export default function StatisticCard({category, value, greenValue, describe, icon}: CardProps){
  
  return(
    <div className={styles.dataContainer}>
        <div className={styles.dataContainerData}>
            <p style={{opacity: 0.8, fontSize: 16, color: `#fff`}}>{category}</p>
            <h3 style={{
                marginTop: 4,
                marginBottom: 4,
                fontSize: 22,
                color: `#fff`
              }}>{value}</h3>
            <p style={{fontSize: 14, color: `#fff`}}><span style={{color: "#22c55e"}}>{greenValue}</span>{describe}</p>
            </div>
            <div className={styles.dataIcon}>
              <span style={{position: 'relative', top: 2}}>{icon}</span>
        </div>
    </div>
  )
}