
import { useState, FormEvent, useContext, ChangeEvent  } from 'react'

import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

import { AuthContext } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

import Link from 'next/link';
import { FiUpload } from 'react-icons/fi';
import axios from 'axios';
import { api } from '../services/api';
import { Header } from '../components/Header';
import { route } from 'next/dist/server/router';
import Router from 'next/router';

export default function Home() {
  const [empresa, setEmpresa] = useState('')
  const [cpf_cnpj, setCpf_cnpj] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [numero, setNumero] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('ADMIN')
  const [empresaId, setEmpresaId] = useState()
  const [empresaC, setEmpresaC] = useState('')
  const [logo, setLogo] = useState('Logo123.png')

  const [loading, setLoading] = useState(false);

  async function handleEmpresa(event: FormEvent){
    event.preventDefault();

    try{
      const userdata = {
        name,
        email,
        password,
        status,
        empresas_id: empresaId
      }

      const data = {
       name: empresa,
       cpf_cnpj,
       cidade,
       rua,
       bairro,
       numero,
       estado,
       logo
      }

      console.log(data)

      if(empresa === '' || cpf_cnpj === '' || rua === '' || bairro === '' || numero === '' || cidade === '' || estado === '' || name === '' || email === ''|| password === ''){
        toast.error("Preencha todos os campos!");
        return;
      }

      await api.post('/create-empresa', data).then((res) => {
        toast.success('Cadastrado com sucesso!')
        setEmpresaId(res.data.id)

        api.post('/admin', userdata).then((res) => {
          toast.success('ADMIN CRIADO COM SUCESSO')

          Router.push('/signin')
        })
      });
    }catch(err){
      console.log(err)
      toast.error(`Ops erro ao cadastrar! ${err}`)
    }

    setEmpresa('');
    setCpf_cnpj('');
    setRua('');
    setBairro('');
    setNumero('');
    setCidade('');
    setEstado('');
  }

  return (
    <>
    <Head>
      <Header/>
    </Head>
    <div className={styles.containerCenter}>

      <div className={styles.login}>
        <h1>Criando sua Empresa</h1>
        <br />

            <form onSubmit={handleEmpresa}>
          <Input
            placeholder="Digite o nome da sua empresa"
            type="text"
            value={empresa}
            onChange={ (e) => setEmpresa(e.target.value) }
          />

          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }} >
            <Input
              style={{
                width: '47%'
              }}
              placeholder="CPF ou CNPJ"
              type="text"
              value={cpf_cnpj}
              onChange={ (e) => setCpf_cnpj(e.target.value) }
            />

            <Input
              style={{
                width: '47%'
              }}
              placeholder="Endereço (Rua)"
              type="text"
              value={rua}
              onChange={ (e) => setRua(e.target.value) }
            />
          </div>

          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Input
              style={{
                width: '47%'
              }}
              placeholder="Bairro"
              type="text"
              value={bairro}
              onChange={ (e) => setBairro(e.target.value) }
            />

            <Input
              style={{
                width: '47%'
              }}
              placeholder="Número"
              type="text"
              value={numero}
              onChange={ (e) => setNumero(e.target.value) }
            />
          </div>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}>

            <Input
              style={{
                width: '47%'
              }}
              placeholder="Cidade"
              type="text"
              value={cidade}
              onChange={ (e) => setCidade(e.target.value) }
            />
            <Input
              style={{
                width: '47%'
              }}
              placeholder="Estado"
              type="text"
              value={estado}
              onChange={ (e) => setEstado(e.target.value) }
            />
          </div>
          <Input
              style={{
                width: '100%'
              }}
              placeholder="Nome de usuário"
              type="text"
              value={name}
              onChange={ (e) => setName(e.target.value) }
          />
          <Input
              style={{
                width: '100%'
              }}
              placeholder="Email"
              type="text"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
          />
          <Input
              style={{
                width: '100%'
              }}
              placeholder="Senha"
              type="password"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
          />
           
          
          <Button
            type="submit"
            loading={loading}
          >
            Cadastrar
          </Button>
        </form>

        <Link href="/signin">
           <a className={styles.text}>Já possui uma empresa? Faça login!</a>
        </Link>

      </div>
    </div>
    </>
  )
}
