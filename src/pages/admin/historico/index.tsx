import Head from "next/head"
import Sidebar from "../../../components/Sidebar"
import Title from "../../../components/ui/Title"
import { BsReceipt } from "react-icons/bs"
import styles from "./styles.module.scss"
import { useState } from "react"
import { BiTrash } from "react-icons/bi"
import { MdEdit } from "react-icons/md"

export default function Historico(){
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false)
    }

    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const div = event.currentTarget;
        console.log(div)

        setSidebarIsVisible(!sidebarIsVisible)
    };

  return(
    <>
      <Head>                  
          <title>Cardápio - Waiter</title>
      </Head>
      <main>
          <div onClick={divClickedHandler}>
              <Sidebar
                  isVisible={sidebarIsVisible}
              />
          </div>
          <div className={sidebarIsVisible ? styles.containerMargin : styles.container}>
                  <Title
                    section='Histórico'
                    icon={
                      <BsReceipt style={{fontSize: 31, position: 'relative', top: -2.5, color:'#273339'}}/>
                    }
                  />
              <p style={{opacity: 0.7, marginBottom: `2rem`}}>Gerencie os Histórico de vendas do seu Comércio</p>
              <div>
                    <div style={{display: `flex`, alignItems: `center`, width: '90%', justifyContent: "space-between"}}>
                        <div style={{display: `flex`, alignItems: `center`, gap: 8,}}>
                          <h3 className={styles.containerTitle}>Histórico</h3>
                            <div className={styles.containerGray} style={{position: `relative`, top: -5}}>
                                <p style={{color: `#333333`}}>3</p>
                            </div>
                        </div>
                        <h4 className={styles.redText}></h4>
                    </div>
                    <div className={styles.table}>
                        <table cellSpacing={0} >
                            <tr className={styles.tableHeadBackground}>
                                <th className={styles.tableHead} style={{width: '10%'}}>Mesa</th>
                                <th className={styles.tableHead} style={{width: '15%'}}>Data</th>
                                <th className={styles.tableHead} style={{width: '35%'}}>Nome</th>
                                <th className={styles.tableHead} style={{width: '20%'}}>Categoria</th>
                                <th className={styles.tableHead} style={{width: '10%'}}>Total</th>
                                <th className={styles.tableHead} style={{width: '10%'}}>Ações</th>
                            </tr>
                            <tr className={styles.tableContent}>
                                <td className={styles.tableItem} style={{width: '10%', paddingLeft: 8}}>123</td>
                                <td className={styles.tableItem} style={{width: '15%'}}>01/01/2023</td>
                                <td className={styles.tableItem} style={{width: '35%', boxSizing: 'border-box'}}>Frango com Catupiry</td>
                                <td className={styles.tableItem} style={{width: '20%'}}>🍕 Pizza</td>
                                <td className={styles.tableItem} style={{width: '10%'}}>R$ 40,00</td>
                                <td className={styles.tableItem} style={{width: '10%'}}><div style={{display: `flex`, width: `7%`}}><button className={styles.tableButton}><MdEdit style={{fontSize: 22, color: '#273339'}}/></button><button className={styles.tableButton}><BiTrash style={{fontSize: 22, color: '#273339'}}/></button></div></td>
                            </tr>
                        </table>
                    </div>
                </div>
          </div>
      </main>
    </>
  )
}