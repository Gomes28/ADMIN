import { FormEvent, useState } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import styles from "./styles.module.scss";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

interface ModalProps{
  closeModal: Function
}

export default function ModalCategory({closeModal}: ModalProps){
  const [emoji, setEmoji] = useState('')
  const [name, setName] = useState('')

  async function handleForm(event: FormEvent){
    event.preventDefault()

    const data = {
      name,
      emoji
    }

    await api.post("/admin/category", data)
      .then(res => console.log("categoria criada com sucesso"))
      .catch(err => toast.error(err))

    setName('')
    setEmoji('')
  }

  return(
    <form className={styles.container} onSubmit={handleForm}>
      <div className={styles.modalHeader}>
        <h2>Nova Categoria</h2>
        <button onClick={() => closeModal()} style={{background: "none", border: "none"}}>
          <img src="../../Path.svg" alt="Botão de fechar o modal"/>
        </button>
      </div>
      <div>
        <div>
          <p className={styles.formText}>Emoji</p>
          <Input
            placeholder="Ex: 🍕"
            value={emoji}
            onChange={e => setEmoji(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText}>Nome da Categoria</p>
          <Input
            placeholder="Ex: Lanches"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
      </div>
      <div style={{alignSelf: 'flex-end'}}>
        <Button>
          Salvar Alterações
        </Button>
      </div>
    </form>
  )
}