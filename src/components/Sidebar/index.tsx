import React, { useContext, useState } from 'react';
import styles from './styles.module.scss'
import { GoSearch } from "react-icons/go"
import { BiCode, BiMenu, BiUser, BiFoodMenu } from "react-icons/bi"
import { BiMenuAltRight } from "react-icons/bi"
import { RxDashboard } from "react-icons/rx"
import { TbMessages } from "react-icons/tb"
import { MdOutlineAnalytics, MdControlPoint } from "react-icons/md"
import { VscFileSubmodule } from "react-icons/vsc"
import { BsCart3, BsSuitHeart, BsReceipt } from "react-icons/bs"
import { FiSettings, FiUsers } from "react-icons/fi"
import { RiLogoutBoxRLine } from "react-icons/ri"
import { AiOutlineControl } from "react-icons/ai"
import Link from 'next/link';
import Image from 'next/image';


interface visible{
  isVisible: boolean
}

export default function Sidebar(props:visible){
  const [sidebar, setSidebar] = useState(props.isVisible);

  const showSideBar = (event) => { 
    event.preventDefault();
    setSidebar(!sidebar)
  };

  // const { signOut } = useContext(AuthContext)

  return (
    <div>
      <meta charSet="UTF-8" />
      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className={sidebar ? styles.sidebarOpen : styles.sidebar}>
        <div className={styles.logoDetails}>
          <div className={styles.logoName}><strong>Simple</strong>Pay</div>
          <i className={styles.btn} onClick={showSideBar}><Image width={70} height={70} src={require('../../../public/icon.png')}/></i>
        </div>
        <ul className={styles.navList}>
          <li onClick={showSideBar}>
            <Link href="/admin/dashboard">
              <a>
                <i><RxDashboard color='#868D98'/></i>
                <span className={styles.linksName} style={{position: 'relative', top: -4, color: '#fff'}}>Dashboard</span>
              </a>
            </Link>
            <span className={styles.tooltip}>Dashboard</span>
          </li >
          <li onClick={showSideBar}>
            <Link href="/admin/funcionarios">
              <a>
                <i><FiUsers color='#868D98'/></i>
                <span className={styles.linksName} style={{position: 'relative', top: -4, color: '#fff'}}>Funcionários</span>
              </a>
            </Link>
            <span className={styles.tooltip}>Funcionários</span>
          </li >
          <li onClick={showSideBar}>
            <Link href="/admin/analytics">
              <a>
                <i><MdOutlineAnalytics color='#868D98'/></i>
                <span className={styles.linksName} style={{position: 'relative', top: -4, color: '#fff'}}>Analytics</span>
              </a>
            </Link>
            <span className={styles.tooltip}>Analytics</span>
          </li>
          <li onClick={showSideBar}>
            <Link href="/admin/category">
              <a>
                <i><MdControlPoint color='#868D98'/></i>
                <span className={styles.linksName} style={{position: 'relative', top: -4, color: '#fff'}}>Category</span>
              </a>
            </Link>
            <span className={styles.tooltip}>Category</span>
          </li>
          <li onClick={showSideBar}>
            <Link href="/admin/historico">
              <a>
                <i><BsReceipt color='#868D98'/></i>
                <span className={styles.linksName} style={{position: 'relative', top: -4, color: '#fff'}}>Histórico</span>
              </a>  
            </Link>
            <span className={styles.tooltip}>Histórico</span>
          </li>
          <li onClick={showSideBar}>
            <Link href="/admin/cardapio">
              <a>
                <i><BiFoodMenu color='#868D98'/></i>
                <span className={styles.linksName} style={{position: 'relative', top: -4, color: '#fff'}}>Cardápio</span>
              </a>
            </Link>
            <span className={styles.tooltip}>Cardápio</span>
          </li>
          <li onClick={showSideBar}>
            <Link href="/admin/settings">
              <a>
                <i><FiSettings color='#868D98'/></i>
                <span className={styles.linksName} style={{position: 'relative', top: -4, color: '#fff'}}>Setting</span>
              </a>  
            </Link>
            <span className={styles.tooltip}>Setting</span>
          </li>
          <li className={styles.profile}>
            <div className={styles.profileDetails}>
              <img src="./../Captura de tela de 2023-01-23 21-23-56.png" alt="" />
              <div>
                <div className={styles.name}>Arthur Castro</div>
                <div className={styles.job}>Web designer</div>
              </div>
            </div>
            <i className={styles.logOut} ><RiLogoutBoxRLine style={sidebar? {color: "#868D98"}: {color: "#868D98"}}/></i>
          </li>
        </ul>
      </div>
    </div>
  );
}