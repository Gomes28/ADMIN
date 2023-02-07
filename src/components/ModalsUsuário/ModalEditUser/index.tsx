import { useState } from "react"
import { Input } from "../../ui/Input"
import styles from "../ModalNewUser/styles.module.scss"
import { Button } from "../../ui/Button"

interface ModalProps{
  closeModal: Function,
  name: string,
  email: string,
  password: string,
  role: string,
  id: string
}

export default function ModalEditUser({closeModal, name, email, password, role, id}: ModalProps){""

  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("")
  const [newRole, setNewRole] = useState(role);

  const handleForm = (e) => {
    e.preventDefault()
  }

  return(
    <form className={styles.container} onSubmit={handleForm}>
      <div className={styles.modalHeader}>
        <h2>Editar Usuário</h2>
        <button onClick={() => closeModal()} style={{background: "none", border: "none"}}>
          <img src="../../Path.svg" alt="Botão de fechar o modal"/>
        </button>
      </div>
      <div>
        <div>
          <p className={styles.formText}>Nome</p>
          <Input
            placeholder={name}
            contentEditable
            value={newName}
            onChange={e => setNewName(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText}>E-mail</p>
          <Input
            placeholder={email}
            contentEditable
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText}>Senha</p>
          <Input
            placeholder={password}
            contentEditable
            value={newPassword}
            type="password"
            onChange={e => setNewPassword(e.target.value)}
            style={{width: `85%`}}
          />
        </div>
        <div>
          <p className={styles.formText} style={{marginBottom: 8}}>Tipo</p>
          <div style={{display: 'flex', gap: 16}}>
            <div style={{display: "flex", alignItems: "center", gap: 8}} onClick={() => setNewRole("admin")}>
              <div className={role === "admin"? styles.optionActive: styles.option}><div className={role === "admin"? styles.optionContentActive: styles.optionContent}></div></div>
              <p className={styles.formText} style={role === "admin"? {color: "#273339"}: {color: "#666666"}}>Admin</p>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 8}} onClick={() => setNewRole("garcom")}>
              <div className={role === "garcom"? styles.optionActive: styles.option}><div className={role === "garcom"? styles.optionContentActive: styles.optionContent}></div></div>
              <p className={styles.formText} style={role === "garcom"? {color: "#273339"}: {color: "#666666"}}>Garçom</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center"}}>
        <p className={styles.redText}>Manter Usuário</p>
        <Button>
          Salvar Alterações
        </Button>
      </div>
    </form>
  )
}