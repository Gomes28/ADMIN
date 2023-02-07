import { useState } from 'react'
// import { canSSRAuth } from '../../../utils/canSSRAuth'
import Head from 'next/head';
import styles from './styles.module.scss';

import { Header } from '../../../components/Header'
import { FiRefreshCcw } from 'react-icons/fi'

import { api } from '../../../services/api'

import { ModalOrder } from '../../../components/ModalOrder'

import COLORS from '../../../conts/color'
import graphicData from '../../../json/graphicData.json'
import pieChartData from '../../../json/pieChartData.json'

import Modal from 'react-modal';
import Sidebar from '../../../components/Sidebar';
import { Input } from '../../../components/ui/Input';
import Link from 'next/link';
import { Button } from '../../../components/ui/Button';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector} from 'recharts';

import { BiDollar, BiMessageDetail } from "react-icons/bi"
import { BsCart3 } from "react-icons/bs"
import { BiUser, BiStar } from "react-icons/bi"
import { GiTakeMyMoney, GiShoppingCart } from "react-icons/gi"
import { MdOutlineAnalytics, MdVisibility } from "react-icons/md"
import StatisticCard from '../../../components/StatisticCard';
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

export default function Analytics({ orders }: HomeProps){

  const [orderList, setOrderList] = useState(orders || [])

  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false)
  const [graphicNumber, setGraphicNumber] = useState("7")
  console.log(graphicNumber)

  const graphicLength = (graNum) => {
    let a = graphicData.length -1
    let i = graNum - 1
    let dataFormated = []
    while(i >= 0){
      dataFormated.push(graphicData[a])
      i--
      a--
    }
    return (dataFormated.reverse())
  }

  graphicLength(graphicNumber)

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

  const data01 = [
    { name: 'Desktop', value: 60},
    { name: 'Mobile', value: 30},
    { name: 'Tablet', value: 10}
  ]

  const COLORSPIE = ['#273339', '#333333', '#666666', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return(
    <>
    <Head>
      <title>Analytics - Waiter</title>
    </Head>
    <main>
      <div onClick={divClickedHandler}>
      <Sidebar
        isVisible={sidebarIsVisible}
      />
      </div>
      <div className={sidebarIsVisible? styles.containerMargin: styles.container}>
        <Title
            section='Analytics'
            icon={
              <MdOutlineAnalytics style={{fontSize: 31, position: 'relative', top: -2.5, color:'#273339'}}/>
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
        <section className={styles.graphics}>
          <div className={styles.barChartGraphic}>
            <div style={{
              padding: 16,
              display: 'flex',
              color: '#343434',
              justifyContent: 'space-between'
            }}>
              <p className={styles.graphicTitle}>Vendas e Visitas</p>
              <div>
                <span style={{color: '#3881ef', fontWeight: 'bold'}}>Últimos</span>
                <select className={styles.graphicSelect} name="dias" style={{color: '#3881ef'}} onChange={e => setGraphicNumber(e.target.value)}>
                  <option value="7">7 Dias</option>
                  <option value="5">5 Dias</option>
                  <option value="3">3 Dias</option>
                </select>
              </div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
              marginBottom: '1rem'
            }}>
              <BarChart
                width={+graphicNumber > 2? 550:250}
                height={300}
                data={graphicLength(graphicNumber)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}
                >
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Vendas" fill="#273339" />
                <Bar dataKey="Visitas" fill="#333333" />
              </BarChart>
            </div>
            
          </div>
          <div className={styles.pieChartGraphic}>
            <div>
              <div style={{
                padding: 16,
                display: 'flex',
                color: '#343434',
                justifyContent: 'space-between'
              }}>
                <p className={styles.graphicTitle}>Acesso por Dispositivos</p>
              </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
              }}>
              <PieChart width={400} height={300} >
                <Pie
                    data={data01}
                    labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORSPIE[index % COLORSPIE.length]} />
                  ))}
                </Pie>
                <Legend/>
              </PieChart>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}