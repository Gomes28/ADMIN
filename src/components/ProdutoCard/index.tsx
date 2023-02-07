import { Button } from '../ui/Button'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import styles from './styles.module.scss'

interface ProdutoCardProps{
  name: string,
  preco: string,
  descricao: string,
  unv: string,
  img: string
}

export default function ProdutoCard({name, preco, unv, descricao, img}: ProdutoCardProps){
  return(
    <div className={styles.card}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={`${img}`} alt="" className={styles.cardImg}/>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.nameAndPrice}>
          <p className={styles.name}>{name}</p>
          <p className={styles.preco}>{preco}</p>
        </div>
        <div className={styles.description}>
          <p>{descricao}</p>
        </div>
        <div className={styles.cardFooter}>
          <p style={{fontSize: 19}}><span style={{fontWeight: 'bold'}}>{unv}</span> Vendidos</p>
          <div style={{display: 'flex'}}>
            <Button style={{backgroundColor: '#ffbd00', fontSize: 22, paddingLeft: 4, paddingRight: 4, width: 40 }}>
              <AiFillEdit style={{position: 'relative', top: 2}}/>
            </Button>
            <Button style={{backgroundColor: '#d90429', marginLeft: 8, fontSize: 22, width: 40}}>
              <AiFillDelete style={{position: 'relative', top: 2}}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}