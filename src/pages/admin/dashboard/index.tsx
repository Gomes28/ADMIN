import { useState } from 'react'
import Head from 'next/head';
import styles from './styles.module.scss';

import { Header } from '../../../components/Header'
import { FiRefreshCcw } from 'react-icons/fi'

import { api } from '../../../services/api'

import { ModalOrder } from '../../../components/ModalOrder'

import Modal from 'react-modal';
import Sidebar from '../../../components/Sidebar';
import StatisticCard from '../../../components/StatisticCard'
import { Input } from '../../../components/ui/Input';
import Link from 'next/link';
import { Button } from '../../../components/ui/Button';
import COLORS from '../../../conts/color'

import { BiDollar } from "react-icons/bi"
import { BsCart3 } from "react-icons/bs"
import { BiUser, BiStar } from "react-icons/bi"
import { BiMessageDetail } from "react-icons/bi"
import { GiTakeMyMoney, GiShoppingCart } from "react-icons/gi"
import { MdVisibility } from "react-icons/md"
import { RxDashboard } from 'react-icons/rx';
import { Orders } from '../../../components/Orders';
import Title from '../../../components/ui/Title';


type OrderProps = {
  id: string;
  table: string | number;
  status: boolean;
  draft: boolean;
  name: string | null;
}

interface HomeProps{
  orders: OrderProps[];
}

export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product:{
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  }
  order:{
    id: string;
    table: string | number;
    status: boolean;
    name: string | null;
  }
}

export default function Dashboard({ orders }: HomeProps){

  const [orderList, setOrderList] = useState(orders || [])

  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false)

  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;
    console.log(div)
    
    setSidebarIsVisible(!sidebarIsVisible)
  };

  function handleCloseModal(){
    setModalVisible(false);
  }

  async function handleOpenModalView(id: string){

     const response = await api.get('/order/detail', {
       params:{
        order_id: id,
       } 
     })

     setModalItem(response.data);
     setModalVisible(true);

  }


  async function handleFinishItem(id: string){
    await api.put('/order/finish', {
      order_id: id,
    })

    const response = await api.get('/orders');

    setOrderList(response.data);
    setModalVisible(false);
  }


  async function handleRefreshOrders(){

    const response = await api.get('/orders')
    setOrderList(response.data);

  }

  Modal.setAppElement('#__next');

  return(
    <>
    <Head>
      <title>Dashboard - Waiter</title>
    </Head>
    <div>
      <div onClick={divClickedHandler}>
        <Sidebar
          isVisible={sidebarIsVisible}
      />
      </div>
      <div className={sidebarIsVisible? styles.containerMargin: styles.container}>
        <Title
          section='Dashboard'
          icon={
            <RxDashboard style={{fontSize: 31, position: 'relative', top: -2.5, color:'#fff'}}/>
          }
        />
        <section className={styles.containerData}>
          <StatisticCard
            category='Ganhos'
            value='R$ 30.000,00'
            greenValue='%50+'
            describe=' desde semana passada'
            icon={
              <BiDollar style={{color: '#fff', fontSize: 22}}/>
            }
          />
          <StatisticCard
            category='Vendas Diárias'
            value='68'
            greenValue='%50+'
            describe=' desde semana passada'
            icon={
              <GiShoppingCart style={{color: '#fff', fontSize: 22}}/>
            }
          />
          <StatisticCard
            category='Clientes'
            value='1261'
            greenValue='%50+'
            describe=' desde semana passada'
            icon={
              <BiUser style={{color: '#fff', fontSize: 22}}/>
            }
          />
          <StatisticCard
            category='Comentários'
            value='97'
            greenValue='%50+'
            describe=' desde semana passada'
            icon={
              <BiMessageDetail style={{color: '#fff', fontSize: 22}}/>
            }
          />
        </section>
        <section>
          <h2 className={styles.containerTitle} style={{color: `#fff`}}>Monitore seus Pedidos</h2>
          <Orders/>
        </section>
      </div>
    </div>
    </>
  )
}