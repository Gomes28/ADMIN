import { useState } from 'react'
import { canSSRAuth } from '../../../utils/canSSRAuth'
import Head from 'next/head';
import styles from './styles.module.scss';

import { Header } from '../../../components/Header'
import { FiRefreshCcw } from 'react-icons/fi'

import { api } from '../../../services/api'

import { ModalOrder } from '../../../components/ModalOrder'

import Modal from 'react-modal';
import Sidebar from '../../../components/Sidebar';
import { Input } from '../../../components/ui/Input';
import Link from 'next/link';
import { Button } from '../../../components/ui/Button';
import ProdutoCard from '../../../components/ProdutoCard'

import { BiDollar } from "react-icons/bi"
import { BsCart3 } from "react-icons/bs"
import { BiUser, BiStar } from "react-icons/bi"
import product from "../../../json/product.json"
import FileUpload from '../../../components/FileUpload/FileUpload';
import FileList from '../../../components/FileList/FileList';

export default function Product(){

  const [sidebarIsVisible, setSidebarIsVisible] = useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(div)
    
    setSidebarIsVisible(!sidebarIsVisible)
  };

  console.log(product)

  Modal.setAppElement('#__next');

  return(
    <>
    <Head>
      <title>Produtos - Waiter</title>
    </Head>
    <main>
      <div onClick={divClickedHandler}>
      <Sidebar
        isVisible={sidebarIsVisible}
      />
      </div>
      <div className={sidebarIsVisible? styles.containerMargin: styles.container}>
        <h1 className={styles.containerTitle}>Produtos</h1>
        <section className={styles.productSection}>
          {product.map( (item, index) => {
                  return(
                    <>
                      <ProdutoCard
                        name={item.name}
                        preco={item.preco}
                        descricao={item.descricao}
                        unv={item.unv}
                        img={item.img}
                      ></ProdutoCard>
                    </>
                  )
                })}

        </section>
      </div>
    </main>
    </>
  )
}