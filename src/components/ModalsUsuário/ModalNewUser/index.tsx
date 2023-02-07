import { useState } from "react"
import { Input } from "../../ui/Input"
import styles from "./styles.module.scss"
import { Button } from "../../ui/Button"

interface ModalProps{
  closeModal: Function
}

export default function ModalNewUser({closeModal}: ModalProps){""

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("");

  const handleForm = (e) => {
    e.preventDefault()
  }

  return(
    <form className={styles.container} onSubmit={handleForm}>
      <div className={styles.modalHeader}>
        <h2>Novo Usuário</h2>
        <button onClick={() => closeModal()} style={{background: "none", border: "none"}}>
          <img src="../../Path.svg" alt="Botão de fechar o modal"/>
        </button>
      </div>
      <div>
        <div>
          <p className={styles.formText}>Nome</p>
          <Input
            placeholder="Ex: Matheus"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText}>E-mail</p>
          <Input
            placeholder="Ex: matheus@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText}>Senha</p>
          <Input
            placeholder="Ex: Hk23J4laçs"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText} style={{marginBottom: 8}}>Tipo</p>
          <div style={{display: 'flex', gap: 16}}>
            <div style={{display: "flex", alignItems: "center", gap: 8}} onClick={() => setRole("admin")}>
              <div className={role === "admin"? styles.optionActive: styles.option}><div className={role === "admin"? styles.optionContentActive: styles.optionContent}></div></div>
              <p className={styles.formText} style={role === "admin"? {color: "#273339"}: {color: "#666666"}}>Admin</p>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 8}} onClick={() => setRole("garcom")}>
              <div className={role === "garcom"? styles.optionActive: styles.option}><div className={role === "garcom"? styles.optionContentActive: styles.optionContent}></div></div>
              <p className={styles.formText} style={role === "garcom"? {color: "#273339"}: {color: "#666666"}}>Garçom</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{alignSelf: "center", width: "100%"}}>
        <Button style={{width: "100%", margin: 0 }}>
          Cadastrar Usuário
        </Button>
      </div>
    </form>
  )
}