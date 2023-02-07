import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import styles from "./styles.module.scss";
import { BiCategory } from "react-icons/bi";

interface ModalProps{
  closeModal: Function,
  name: string,
  categoryName?: string,
  preco?: string,
  email?: string,
  icon?: string,
  id: string,
  type: string
}

export default function ModalExcluir({closeModal, name, icon, email, type, categoryName, preco}: ModalProps){

  const dataVisible = () => {
    if(type === "Usuário"){
      return(
        <div>
          <div style={{textAlign: 'center'}}>
            <p style={{marginBottom: 8}}>Tem certeza que deseja excluir o Usuário?</p>
          </div>
          <div>
            <p className={styles.formText}>Nome</p>
            <Input
              value={name}
              style={{width: `85%`}}
            />
          </div>
          <div>
            <p className={styles.formText}>E-Mail</p>
            <Input
              value={email}
              style={{width: `85%`}}
            />
          </div>
        </div>
      )
    } else if(type === "Categoria"){
      return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{marginBottom: 8}}>Tem certeza que deseja excluir a categoria?</p>
          <div className={styles.categoryContainer}>
            <p style={{fontSize: 14}}>{icon}</p>
            <p style={{fontSize: 14, color: "#333333"}}>{name}</p>
          </div>
        </div>
      )
    } else if(type === "Produto"){
      return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{marginBottom: 8}}>Tem certeza que deseja excluir o produto?</p>
          <div className={styles.produtoContainer}>
            <img src="../../.././img.png" alt="" className={styles.produtoImg} />
            <div className={styles.produtoInfo}>
              <p>{icon} {categoryName}</p>
              <p>{name}</p>
              <p>R$ {preco}</p>
            </div>
          </div>
        </div>
      )
    } else if(type === "Ingrediente"){
      return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{marginBottom: 8}}>Tem certeza que deseja excluir o ingrediente?</p>
          <div className={styles.categoryContainer}>
            <p style={{fontSize: 14}}>{icon}</p>
            <p style={{fontSize: 14, color: "#333333"}}>{name}</p>
          </div>
        </div>
      )
      
    }
  }

  return(
    <div className={styles.container} style={{width: '40%'}}>
      <div className={styles.modalHeader}>
        <h2>Excluir {type}</h2>
        <button onClick={() => closeModal()} style={{background: "none", border: "none"}}>
          <img src="../../Path.svg" alt="Botão de fechar o modal"/>
        </button>
      </div>
      {dataVisible()}
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
        <p style={{color: '#273339', fontWeight: 600}} onClick={() => closeModal()}>Manter {type} </p>
        <Button>
          Excluir {type}
        </Button>
      </div>
    </div>
  )
}