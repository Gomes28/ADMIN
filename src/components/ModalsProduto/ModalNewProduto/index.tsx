import { FormEvent, useState } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import styles from "./styles.module.scss";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import categories from "../../../json/category.json"
import { BsImage, BsSearch } from "react-icons/bs";
import ingredientes from "../../../json/ingredientes.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ModalProps{
  closeModal: Function
}

export default function ModalProduto({closeModal}: ModalProps){
  const [emoji, setEmoji] = useState('')
  const [name, setName] = useState('')
  const [categoryId, setCategoryId] = useState('');
  const [ingredienteList, setIngredientesList] = useState([]);
  const [files, setFiles] = useState({})

  async function handleForm(event: FormEvent){
    event.preventDefault()

    const data = {
      name,
      emoji
    }

    await api.post("/admin/category", data)
      .then(res => toast.success("Categoria criada com sucesso"))
      .catch(err => toast.error(err))

    setName('')
    setEmoji('')
  }

  const handleIngredientList = (e) => {
    let element = e.target.value;
    if(ingredienteList.length === 0){
      ingredienteList.push(element)
      console.log(ingredienteList)
      return
    } else{
      if(ingredienteList.includes(element)){
        let i = ingredienteList.indexOf(element)
        delete ingredienteList[i]
      } else{
        ingredienteList.push(element)
      }
    }
    setIngredientesList(ingredienteList.filter(x => x != null))
  }

  const handleUpload = (e) => {
    let file = e.target.files[0]
    setFiles(file);
  }

  return(
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.modalHeader} style={{marginBottom: '0.5rem'}}>
          <h2 onClick={() => console.log(files)}>Novo Produto</h2>
        </div>
        <div style={{display: "flex",alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: "1rem"}}>
          <p className={styles.modalTitle}>Imagem</p>
        </div>
        <form className={styles.form}>
          <div className={styles.choseImg}>
            <img className={styles.image} src="../.././cardápio-modal-img.png" alt="" />
            <div className={styles.fileInputs}>
              <input type="file" onChange={handleUpload} />
              <button>
                <BsImage/> Alternar Imagem
              </button>
            </div>
          </div>
          <div style={{marginBottom: ".8rem"}}>
            <div>
              <p className={styles.formText}>Nome do produto</p>
              <Input style={{width: `85%`, marginBottom: '.6rem'}}
                placeholder="Quatro Queijos"
              />
            </div>
            <div>
              <p className={styles.formText}>Descrição do Produto</p>
              <Input style={{width: `85%`, marginBottom: 4}}
                placeholder="Pizza de Quatro Queijos com borda tradicional"
              />
              <p style={{fontSize: 13, color: `#333333`}}>Máximo 110 caracteres</p>
            </div>
          </div>
          <div>
            <p style={{fontSize: 14, color: "#666666"}}>Categoria</p>
            <div className={styles.categoriesList}>
              {categories.map((category, index) => {
                return(
                  <div key={`${category._id}`} className={categoryId === category._id? styles.categoryContainerActive: styles.categoryContainer} onClick={() => {
                    setCategoryId(category._id)
                  }}>
                    <p style={{fontSize: 14}}>{category.icon}</p>
                    <p style={{fontSize: 14, color: "#333333"}}>{category.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <div className={styles.modalHeaderRight}>
          <img onClick={() => closeModal()} src="../../Path.svg" alt="Botão de fechar o modal"/>
        </div>
        <div style={{display: "flex",alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: "1rem"}}>
          <p className={styles.modalTitle}>Ingredientes</p>
          <p className={styles.redText}>Novo Ingrediente</p>
        </div>
        <div style={{marginBottom: "2rem"}}>
          <p className={styles.formText}>Busque um Ingrediente</p>
          <div className={styles.searchBox}>
            <Input
              placeholder="Ex: Tomate"
              style={{width: "98%", border: "none", margin: 0}}
            />
            <BsSearch/>
          </div>
        </div>
        <div style={{marginBottom: "2rem"}}>
          <ul className={styles.lista}>
            {ingredientes.map( ingrediente => {
              return(
                <div key={ingrediente._id} className={styles.ingredienteContainer}>
                  <div style={{display: "flex", gap: 8, marginLeft: 8, alignItems: "center"}}>
                    <p className={styles.formText}>{ingrediente.icon}</p>
                    <p className={styles.formText}>{ingrediente.name}</p>
                  </div>
                  <div>
                    <Input
                      type="checkbox"
                      value={ingrediente.name}
                      onChange={handleIngredientList}
                      style={{marginBottom: 0, marginRight: 8, height: 40}}
                    />
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
        <div style={{display: 'flex', alignItems: 'center', width: '100%',justifyContent: 'flex-end', paddingTop: '1rem'}}>
          <Button style={{alignSelf: 'flex-end'}}>
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  )
}