import { useState, FormEvent } from 'react'
import Head from "next/head"
import {Header} from '../../../components/Header'
import styles from './styles.module.scss'

import { toast } from 'react-toastify'
import Sidebar from '../../../components/Sidebar'
import { Input } from '../../../components/ui/Input'
import { Button } from '../../../components/ui/Button'

import categories from '../../../json/category.json'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { api } from '../../../services/api'
import { Router } from 'next/router'
import ModalCategory from '../../../components/ModalsCategory/ModalNewCategory'
import ModalProduto from '../../../components/ModalsProduto/ModalNewProduto'


export default function Crud(){

  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const [category, setCategory] = useState('')
  const [isOpen, setIsOpen] = useState(false);

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(div)
    
    setSidebarIsVisible(!sidebarIsVisible)
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return(
    <>
    <Head>
      <title>Categoria - Waiter</title>
    </Head>
    <main>
      <div onClick={divClickedHandler}>
      <Sidebar
        isVisible={sidebarIsVisible}
      />
      </div>
      <div className={sidebarIsVisible? styles.containerMargin: styles.container}>
        <h1 className={styles.containerTitle}>Categoria</h1>
        <div style={{display: 'flex', gap: 32, flexDirection: 'column'}}>
          {/* <CreateCategory/>
          <section className={styles.categoriesList}>
            <h2 style={{marginBottom: 4}}>Lista de Categorias</h2>
            <div>
              {categories.map(category => {
                return(
                  <div className={styles.categoryCard}>
                    <p>{category.category}</p>
                    <div style={{display: 'flex'}}>
                      <Button style={{backgroundColor: '#ffbd00', fontSize: 18, paddingLeft: 4, paddingRight: 4, width: 25, height: 25}}>
                        <AiFillEdit style={{position: 'relative', top: -5, left: -.5}}/>
                      </Button>
                      <Button style={{backgroundColor: '#d90429', marginLeft: 8, fontSize: 18, width: 25, height: 25}}>
                        <AiFillDelete style={{position: 'relative', top: -5, left: -2}}/>
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </section> */}
          <Button onClick={handleOpenModal}>
            Abrir modal
          </Button>
          <div className={isOpen? styles.modal: styles.modalClose}>
            {isOpen? <ModalProduto closeModal={handleCloseModal}/>: ""}
          </div>
          <div style={{width: '70%'}}>
            <ModalCategory
              closeModal={handleCloseModal}
            />
          </div>
          <div style={{width: `70%`}}>
            <ModalProduto closeModal={handleCloseModal}/>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}