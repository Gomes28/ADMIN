import { useState } from "react";
import styles from "./styles.module.scss"
import Sidebar from "../../../components/Sidebar";
import Head from "next/head";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";
import { ButtonTextDifferent } from "../../../components/ui/ButtonTextDifferent"
import { AiOutlineUser } from 'react-icons/ai'
import { CgPassword } from 'react-icons/cg'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Title from "../../../components/ui/Title";
import { FiSettings } from "react-icons/fi";

export default function Settings(){
  
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const [accountVisible, setAccountVisible] = useState(true)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false)

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(div)
    
    setSidebarIsVisible(!sidebarIsVisible)
  };

  const dataVisible = () => {
    if (accountVisible === true){
      return(<div className={styles.accountContent}>
        <h3>Configurações da Conta</h3>
        <div className={styles.accountInputs}>
          <div className={styles.inputGroup}>
            <div style={{width: '48%'}}>
              <p>Nome da Empresa</p>
              <Input
                value='Speed Jack'
                style={{width: '100%'}}                    
              />
            </div>
            <div style={{width: '48%'}}>
              <p>CNPJ da empresa</p>
              <Input
                value='08.264.512/4201-32'
                style={{width: '100%'}}                 
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div style={{width: '48%'}}>
              <p>Email</p>
              <Input
                value='speedjack@gmail.com'
                style={{width: '100%'}}                   
              />
            </div>
            <div style={{width: '48%'}}>
              <p>Telefone</p>
              <Input
                value='(64) 93441-0894'
                style={{width: '100%'}}                     
              />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div style={{width: '48%'}}>
              <p>Rua</p>
              <Input
                value='Avenida Raulina Fonseca Pascoal'
                style={{width: '100%'}}                     
              />
            </div>
            <div style={{width: '48%'}}>
              <p>Cidade</p>
              <Input
                value='Catalão'
                style={{width: '100%'}}                   
              />
            </div>
          </div>
          <div className={styles.accountDescription}>
            <p>Descrição</p>
            <textarea placeholder='Insira aqui a descrição' className={styles.textArea}></textarea>
          </div>
        </div>
        <div>
          <Button
            style={{backgroundColor: '#101026', marginRight: 8}}
          >Atualizar</Button>
          <ButtonTextDifferent
            style={{backgroundColor: '#ECECEC', border: '1px solid #272727'}}
          >Cancelar</ButtonTextDifferent>
        </div>
      </div>)
    } else if(passwordVisible === true){
      return(<div className={styles.accountContentPassword}>
        <h3>Password Reset</h3>
        <div className={styles.accountInputsPassword}>
          <div className={styles.inputGroupPassword}>
            <div style={{width: '60%'}}>
              <p>Senha Antiga</p>
              <Input
                value=''
                placeholder="Insira a senha antiga"
                style={{width: '100%'}}                    
              />
            </div>
            <div style={{width: '60%'}}>
              <p>Nova Senha</p>
              <Input
                placeholder="Insira a nova senha"
                style={{width: '100%'}}                    
              />
            </div>
            <div style={{width: '60%'}}>
              <p>Confirmar Senha</p>
              <Input
                placeholder="Confirme a nova senha"
                style={{width: '100%'}}                    
              />
            </div>
          </div>
        </div>
        <div>
          <Button
            style={{backgroundColor: '#101026', marginRight: 8}}
          >Salvar</Button>
          <ButtonTextDifferent
            style={{backgroundColor: '#ECECEC', border: '1px solid #272727'}}
          >Cancelar</ButtonTextDifferent>
        </div>
      </div>)
    } else{
      return(<div className={styles.accountContentPassword}>
        <h3>Notificações</h3>
        <div className={styles.accountInputsPassword}>
          <div className={styles.inputGroupNotification}>
            <div style={{width: '60%'}}>
              <p>Título</p>
              <Input
                value=''
                placeholder="Insira o Título"
                style={{width: '100%', border: "1px solid #999999"}}                    
              />
            </div>
            <div style={{width: '60%'}}>
              <p>Texto da Notificação</p>
              <Input
                value=''
                placeholder="Insira o Texto da Notificação"
                style={{width: '100%', border: "1px solid #999999"}}                    
              />
            </div>
          </div>
        </div>
        <div>
          <Button
            style={{backgroundColor: '#', marginRight: 8}}
          >Salvar</Button>
          <ButtonTextDifferent
            style={{backgroundColor: '#fff', border: '1px solid #33333366'}}
          >Cancelar</ButtonTextDifferent>
        </div>
      </div>)
    }
  }

  const whenAccountClicked = () => {
    setAccountVisible(true)
    setPasswordVisible(false)
    setNotificationVisible(false)
  }

  const whenPasswordClicked = () => {
    setAccountVisible(false)
    setPasswordVisible(true)
    setNotificationVisible(false)
  }

  const whenNotificationClicked = () => {
    setAccountVisible(false)
    setPasswordVisible(false)
    setNotificationVisible(true)
  }

  return(
    <>
      <Head>
        <title>Settings - Waiter</title>
      </Head>
      <main>
        <div onClick={divClickedHandler}>
        <Sidebar
          isVisible={sidebarIsVisible}
        />
        </div>
        <div className={sidebarIsVisible? styles.containerMargin: styles.container}>
          <Title
            section='Settings'
            icon={
              <FiSettings style={{fontSize: 31, position: 'relative', top: -2.5, color:'#273339'}}/>
            }
          />
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            <main className={styles.mainContainer}>
              <div className={styles.sidebarContainer}>
                <div className={styles.perfilInfo}>
                  <img className={styles.perfilImage} src=".././speed.png" alt="" />
                  <p style={{fontWeight: 'bold', fontSize: 20}}>Speed Jack</p>
                </div>
                <div className={styles.listaOptions}>
                  <ul className={styles.lista}>
                    <li className={accountVisible? styles.listaElementActive: styles.listaElement} onClick={whenAccountClicked}><AiOutlineUser style={{position: 'relative', top: 2, marginRight: 4}}/>Account</li>
                    <li className={passwordVisible? styles.listaElementSemBordaActive :styles.listaElementSemBorda} onClick={whenPasswordClicked}><CgPassword style={{position: 'relative', top: 2, marginRight: 4}}/>Password</li>
                    <li className={notificationVisible? styles.listaUltimoElementActive :styles.listaUltimoElement}onClick={whenNotificationClicked}><IoMdNotificationsOutline style={{position: 'relative', top: 2, marginRight: 4}}/>Notification</li>
                  </ul>
                </div>
              </div>
              <div className={styles.openTab}>
                {dataVisible()}
              </div>
            </main>
          </div>
        </div>
      </main>
    </>
  )

}