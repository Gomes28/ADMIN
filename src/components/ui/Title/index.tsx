import styles from "./styles.module.scss"

interface HeadProps{
  icon: object,
  section: string
}

export default function Title({icon, section} : HeadProps){
  return(
    <div style={{display: `flex`,  alignItems: `center`, gap: 8, color: '#fff'}}>
          <span>
            {icon}
          </span>
          <h1 className={styles.containerTitle}>{section}</h1>
    </div>
  )
}