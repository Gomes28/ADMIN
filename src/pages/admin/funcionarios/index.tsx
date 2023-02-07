import Head from 'next/head';
import styles from './styles.module.scss'
import Sidebar from '../../../components/Sidebar';
import { useState } from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import Title from '../../../components/ui/Title';
import { FiUsers } from 'react-icons/fi';
import funcionarios from "../../../json/funcionarios.json"
import { BiTrash } from 'react-icons/bi';
import { MdEdit, MdEmail } from 'react-icons/md';
import ModalExcluir from '../../../components/ModalExcluir';
import ModalNewUser from '../../../components/ModalsUsuário/ModalNewUser';
import ModalEditUser from '../../../components/ModalsUsuário/ModalEditUser';

export default function Vendedores(){
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const [funcionario, setFuncionario] = useState({name: "", email: "",password: "", role:"", id: ""})
  const [modalEditVisible, setModalEditVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false)
  const [modalCreateVisible, setModalCreateVisible] = useState(false)

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(div)
    
    setSidebarIsVisible(!sidebarIsVisible)
  };

  const handleModalClose = () => {
    setModalEditVisible(false);
    setModalDeleteVisible(false);
    setModalCreateVisible(false)
  }

  return(
    <>
      <Head>
        <title>Funcionarios - Waiter</title>
      </Head>
      <main>
        <div onClick={divClickedHandler}>
        <Sidebar
          isVisible={sidebarIsVisible}
        />
        </div>
        <div className={sidebarIsVisible? styles.containerMargin: styles.container}>
        <Title
            section='Funcionários'
            icon={
              <FiUsers style={{fontSize: 31, position: 'relative', top: -2.5, color:'#273339'}}/>
            }
          />
          <p style={{opacity: 0.7, marginBottom: `2rem`}}>Cadastre e gerencie seus usuários</p>
          <section className={styles.containerData}>
          <div>
                    <div style={{display: `flex`, alignItems: `center`, width: '90%', justifyContent: "space-between"}}>
                        <div style={{display: `flex`, alignItems: `center`, gap: 8,}}>
                          <h3 className={styles.containerTitle}>Funcionários</h3>
                            <div className={styles.containerGray} style={{position: `relative`, top: -5}}>
                                <p style={{color: `#333333`}}>3</p>
                            </div>
                        </div>
                        <h4 className={styles.redText} onClick={() => setModalCreateVisible(true)}>Novo Funcionário</h4>
                        <div className={modalCreateVisible? styles.modal: styles.modalClose}>
                          {
                            <ModalNewUser
                              closeModal={handleModalClose}
                            />
                          }
                        </div>
                        <div className={modalEditVisible? styles.modal: styles.modalClose}>
                          {
                            <ModalEditUser
                              closeModal={handleModalClose}
                              name={funcionario.name}
                              email={funcionario.email}
                              password={funcionario.password}
                              role={funcionario.role}
                              id={funcionario.id}
                            />
                          }
                        </div>
                        <div className={modalDeleteVisible? styles.modal: styles.modalClose}>
                          {
                            <ModalExcluir
                            closeModal={handleModalClose}
                            type="Usuário"
                            name={funcionario.name}
                            email={funcionario.email}
                            id={funcionario.id}
                            />
                          }
                        </div>
                    </div>
                    <div className={styles.table}>
                        <table cellSpacing={0} >
                            <tr className={styles.tableHeadBackground}>
                                <th className={styles.tableHead} style={{width: '30%'}}>Nome</th>
                                <th className={styles.tableHead} style={{width: '40%'}}>E-mail</th>
                                <th className={styles.tableHead} style={{width: '20%'}}>Cargo</th>
                                <th className={styles.tableHead} style={{width: '10%'}}>Ações</th>
                            </tr>
                            {funcionarios.map(funcionario => {
                              return(
                                <tr className={styles.tableContent} key={funcionario.id}>
                                  <td className={styles.tableItem} style={{width: '30%'}}>{funcionario.name}</td>
                                  <td className={styles.tableItem} style={{width: '40%'}}>{funcionario.email}</td>
                                  <td className={styles.tableItem} style={{width: '20%'}}>{funcionario.role}</td>
                                  <td className={styles.tableItem} style={{width: '10%'}}><div style={{display: `flex`, width: `7%`}}><button className={styles.tableButton}><MdEdit style={{fontSize: 22, color: '#273339'}} onClick={() => {
                                    setFuncionario(funcionario)
                                    setModalEditVisible(true)
                                  }}/></button><button className={styles.tableButton} onClick={() => {
                                    setFuncionario(funcionario)
                                    setModalDeleteVisible(true)
                                  }}><BiTrash style={{fontSize: 22, color: '#273339'}}/></button></div></td>
                                </tr>
                              )
                            })}
                        </table>
                    </div>
                </div>
          </section>
        </div>
      </main>
    </>
  )
}