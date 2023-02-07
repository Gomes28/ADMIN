import { useState } from "react";
import styles from "./styles.module.scss";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";

interface ModalProps{
  closeModal: Function,
  name: string,
  icon: string,
  id: string
}

export default function ModalEditeCategory({closeModal, name, icon, id}:ModalProps){
  const [newName, setNewName] = useState("")
  const [newIcon, setNewIcon] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
  }

  return(
    <form className={styles.container} onSubmit={handleForm}>
      <div className={styles.modalHeader}>
        <h2>Editar Categoria</h2>
        <button onClick={() => {
          setNewName("");
          setNewIcon("")
          closeModal()
        }} style={{background: "none", border: "none"}}>
          <img src="../../Path.svg" alt="Botão de fechar o modal"/>
        </button>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start'}}>
        <div style={{width: '100%'}}>
            <p className={styles.formText}>Emoji</p>
            <Input
              placeholder={icon}
              contentEditable={true}
              value={newIcon}
              onChange={(e) => setNewIcon(e.target.value)}
              style={{width: `85%`}}
            />
          </div>
          <div style={{width: '100%'}}>
            <p className={styles.formText}>Nome</p>
            <Input
              contentEditable={true}
              placeholder={name}
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{width: `85%`}}
            />
          </div>
      </div>
      <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
        <p style={{color: '#273339', fontWeight: 600}} onClick={() => closeModal()}>Manter Categoria</p>
        <Button>
          Salvar Alterações
        </Button>
      </div>
    </form>
  )
}