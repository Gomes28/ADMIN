import { useState } from "react"
import { Input } from "../../ui/Input"
import styles from "./styles.module.scss"
import { Button } from "../../ui/Button"

interface ModalProps{
  closeModal: Function
}

export default function ModalNewIngrediente({closeModal}: ModalProps){""

  const [name, setName] = useState("")
  const [emoji, setEmoji] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
  }

  return(
    <form className={styles.container} onSubmit={handleForm}>
      <div className={styles.modalHeader}>
        <h2>Novo Ingrediente</h2>
        <button onClick={() => closeModal()} style={{background: "none", border: "none"}}>
          <img src="../../Path.svg" alt="Botão de fechar o modal"/>
        </button>
      </div>
      <div>
        <div>
          <p className={styles.formText}>Emoji</p>
          <Input
            placeholder="Ex: 🧀"
            value={emoji}
            onChange={e => setEmoji(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText}>Nome</p>
          <Input
            placeholder="Ex: Mussarela"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
      </div>
      <div style={{alignSelf: "center", width: "100%"}}>
        <Button style={{width: "100%", margin: 0 }}>
          Criar Ingrediente
        </Button>
      </div>
    </form>
  )
}