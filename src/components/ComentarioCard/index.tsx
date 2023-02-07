import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styles from './styles.module.scss'

interface ComentarioCardProps{
  user: string,
  body: string,
}

export default function ComentarioCard({body, user}: ComentarioCardProps){
  return(
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src="./../Captura de tela de 2023-01-23 21-23-56.png" alt="" className={styles.cardAvatar}/>
        <div className={styles.cardUser}>
          <p className={styles.cardUsername}>{user}</p>
          <div>
            <AiFillStar className={styles.cardStar}/>
            <AiFillStar className={styles.cardStar}/>
            <AiFillStar className={styles.cardStar}/>
            <AiFillStar className={styles.cardStar}/>
            <AiOutlineStar className={styles.cardStar}/>
          </div>
        </div>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardText}>{body}</p>
      </div>
    </div>
  )
}