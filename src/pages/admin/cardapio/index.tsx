import Head from "next/head";
import { useState } from "react";
import { BiFoodMenu, BiTrash } from "react-icons/bi";
import Sidebar from "../../../components/Sidebar";
import styles from "./styles.module.scss"
import Title from "../../../components/ui/Title";
import categories from "../../../json/category.json"
import ModalCategory from "../../../components/ModalsCategory/ModalNewCategory";
import ModalProduto from "../../../components/ModalsProduto/ModalNewProduto";
import { MdEdit } from "react-icons/md";
import ModalExcluir from "../../../components/ModalExcluir";
import ModalEditeCategory from "../../../components/ModalsCategory/ModalEditCategory";
import ModalEditProduto from "../../../components/ModalsProduto/ModalEditProduto";
import ingredientes from "../../../json/ingredientes.json"
import produtos from "../../../json/produtos.json"
import ModalNewIngrediente from "../../../components/ModalsIngredientes/ModalNewIngrediente";
import ModalEditIngrediente from "../../../components/ModalsIngredientes/ModalEditIngrediente";

export default function Cardapio() {
    const [sidebarIsVisible, setSidebarIsVisible] = useState(false)
    const [produtosVisible, setProdutosVisible] = useState(true);
    const [categoriasVisible, setCategoriasVisible] = useState(false);
    const [ingredientesVisible, setIngredientesVisible] = useState(false);
    const [produto, setProduto] = useState({name: "", description: "",_id: "", preco:"", category: {name: "", icon:"", _id: ""}, ingredients:[{name: "", icon: "", _id: ""}]});
    const [ingrediente, setIngrediente] = useState({name:"", icon: "", _id: ""})
    const [category, setCategory] = useState({name: "", icon: "", _id: ""})
    const [modalEditVisible, setModalEditVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
      setModalDeleteVisible(false)
      setModalEditVisible(false)
    }

    const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const div = event.currentTarget;
        console.log(div)

        setSidebarIsVisible(!sidebarIsVisible)
    };

    const produtoss = {
      name: "Quatro Queijos",
      description: "Com borda",
      category: {
        name: "Buguers",
        icon: "🍔",
        _id: "63741b62c9a816e4dc61767f"
      },
      ingredientesList: ["Mussarela"],
      id:"1"
    }

    const dataVisible = () => {
        if(produtosVisible){
            return(
                <div>
                    <div style={{display: `flex`, alignItems: `center`, width: '90%', justifyContent: "space-between"}}>
                        <div style={{display: `flex`, alignItems: `center`, gap: 8,}}>
                          <h3 className={styles.containerTitle}>Produtos</h3>
                            <div className={styles.containerGray} style={{position: `relative`, top: -5}}>
                                <p style={{color: `#333333`}}>3</p>
                            </div>
                        </div>
                        <h4 className={styles.redText} onClick={handleOpenModal}>Novo Produto</h4>
                        <div className={isOpen? styles.modal: styles.modalClose}>
                          {isOpen? <ModalProduto closeModal={handleCloseModal}/>: ""}
                        </div>
                        <div className={modalEditVisible? styles.modal: styles.modalClose}>
                          {modalEditVisible? <ModalEditProduto 
                            closeModal={handleCloseModal}
                            name={produto.name}
                            description={produto.description}
                            categoryActive={produto.category._id}
                            id={produto._id}
                            ingredientesActive={produto.ingredients.map(ingrediente => ingrediente.name)}
                          />: ""}
                        </div>
                        <div className={modalDeleteVisible? styles.modal: styles.modalClose}>
                          {modalDeleteVisible? <ModalExcluir 
                            closeModal={handleCloseModal}
                            name={produto.name}
                            preco={produto.preco}
                            categoryName={produto.category.name}
                            icon={produto.category.icon}
                            id={produto._id}
                            type="Produto"
                          />: ""}
                        </div>
                    </div>
                    <div className={styles.table}>
                        <table cellSpacing={0} >
                            <tr className={styles.tableHeadBackground}>
                                <th className={styles.tableHead} style={{width: '23%'}}>Imagem</th>
                                <th className={styles.tableHead} style={{width: '23%'}}>Nome</th>
                                <th className={styles.tableHead} style={{width: '22%'}}>Categoria</th>
                                <th className={styles.tableHead} style={{width: '22%'}}>Preço</th>
                                <th className={styles.tableHead} style={{width: '10%'}}>Ações</th>
                            </tr>
                            {produtos.map(produto => {
                              return( 
                                <tr className={styles.tableContent}>
                                  <td className={styles.tableItem} style={{width: '23%', paddingLeft: 8}}><img src="../.././img.png" className={styles.tableImage} alt="" /></td>
                                  <td className={styles.tableItem} style={{width: '23%'}}>{produto.name}</td>
                                  <td className={styles.tableItem} style={{width: '22%'}}>{produto.category.icon}{produto.category.name}</td>
                                  <td className={styles.tableItem} style={{width: '22%'}}>R$ {produto.preco}</td>
                                  <td className={styles.tableItem} style={{width: '10%'}}><div style={{display: `flex`, width: `7%`}}><button className={styles.tableButton}><MdEdit style={{fontSize: 22, color: '#273339'}} onClick={() => {
                                      setProduto(produto)
                                      setModalEditVisible(true)
                                    }}/></button><button className={styles.tableButton} onClick={() => {
                                      setProduto(produto)
                                      setModalDeleteVisible(true)
                                    }}><BiTrash style={{fontSize: 22, color: '#273339'}}/></button></div></td>
                                </tr>
                              )
                            })}
                            
                        </table>
                    </div>
                </div>
            )
        } else if(categoriasVisible){
            return(
              <div>
                <div style={{display: `flex`, alignItems: `center`, width: '90%', justifyContent: "space-between"}}>
                  <div style={{display: `flex`, alignItems: `center`, gap: 8,}}>
                    <h3 className={styles.containerTitle}>Categorias</h3>
                      <div className={styles.containerGray} style={{position: `relative`, top: -5}}>
                        <p style={{color: `#333333`}}>{categories.length}</p>
                      </div>
                    </div>
                    <h4 className={styles.redText} onClick={handleOpenModal}>Nova Categoria</h4>
                      <div className={isOpen? styles.modal: styles.modalClose}>
                        {isOpen? <ModalCategory closeModal={handleCloseModal}/>: ""}
                      </div>
                      <div className={modalEditVisible? styles.modal: styles.modalClose}>
                          {
                            <ModalEditeCategory
                              name={category.name}
                              icon={category.icon}
                              id={category._id}
                              closeModal={handleCloseModal}
                            />
                          }
                        </div>
                        <div className={modalDeleteVisible? styles.modal: styles.modalClose}>
                          {
                            <ModalExcluir
                            closeModal={handleCloseModal}
                            type="Categoria"
                            name={category.name}
                            icon={category.icon}
                            id={category._id}
                            />
                          }
                        </div>
                    </div>
              <div className={styles.table}>
                  <table cellSpacing={0} >
                      <tr className={styles.tableHeadBackground}>
                          <th className={styles.tableHead} style={{width: '10%'}}>Emoji</th>
                          <th className={styles.tableHead} style={{width: '80%'}}>Nome</th>
                          <th className={styles.tableHead} style={{width: '10%'}}>Ações</th>
                      </tr>
                      {categories.map(category => {
                        return(
                          <tr className={styles.tableContentCategory}>
                            <td className={styles.tableItem} style={{width: '10%', marginLeft: 8}}>{category.icon}</td>
                            <td className={styles.tableItem} style={{width: '80%'}}>{category.name}</td>
                            <td className={styles.tableItem} style={{width: '10%'}}><div style={{display: `flex`, width: `7%`}}><button className={styles.tableButton}><MdEdit style={{fontSize: 22, color: '#273339'}} onClick={() => {
                                    setCategory(category)
                                    setModalEditVisible(true)
                                  }}/></button><button className={styles.tableButton} onClick={() => {
                                    setCategory(category)
                                    setModalDeleteVisible(true)
                                  }}><BiTrash style={{fontSize: 22, color: '#273339'}}/></button></div></td>
                          </tr>
                        )
                      })}
                  </table>
              </div>
          </div>
            )
        }else{
          return(
            <div>
                <div style={{display: `flex`, alignItems: `center`, width: '90%', justifyContent: "space-between"}}>
                  <div style={{display: `flex`, alignItems: `center`, gap: 8,}}>
                    <h3 className={styles.containerTitle}>Categorias</h3>
                      <div className={styles.containerGray} style={{position: `relative`, top: -5}}>
                        <p style={{color: `#333333`}}>{categories.length}</p>
                      </div>
                    </div>
                    <h4 className={styles.redText} onClick={handleOpenModal}>Novo Ingrediente</h4>
                      <div className={isOpen? styles.modal: styles.modalClose}>
                        {isOpen? <ModalNewIngrediente closeModal={handleCloseModal}/>: ""}
                      </div>
                      <div className={modalEditVisible? styles.modal: styles.modalClose}>
                          {
                            <ModalEditIngrediente
                              name={ingrediente.name}
                              icon={ingrediente.icon}
                              id={ingrediente._id}
                              closeModal={handleCloseModal}
                            />
                          }
                        </div>
                        <div className={modalDeleteVisible? styles.modal: styles.modalClose}>
                          {
                            <ModalExcluir
                            closeModal={handleCloseModal}
                            type="Ingrediente"
                            name={ingrediente.name}
                            icon={ingrediente.icon}
                            id={ingrediente._id}
                            />
                          }
                        </div>
                    </div>
              <div className={styles.table}>
                  <table cellSpacing={0} >
                      <tr className={styles.tableHeadBackground}>
                          <th className={styles.tableHead} style={{width: '10%'}}>Emoji</th>
                          <th className={styles.tableHead} style={{width: '80%'}}>Nome</th>
                          <th className={styles.tableHead} style={{width: '10%'}}>Ações</th>
                      </tr>
                      {ingredientes.map(ingrediente => {
                        return(
                          <tr className={styles.tableContentCategory}>
                            <td className={styles.tableItem} style={{width: '10%', paddingLeft: 8}}>{ingrediente.icon}</td>
                            <td className={styles.tableItem} style={{width: '80%'}}>{ingrediente.name}</td>
                            <td className={styles.tableItem} style={{width: '10%'}}><div style={{display: `flex`, width: `7%`}}><button className={styles.tableButton}><MdEdit style={{fontSize: 22, color: '#273339'}} onClick={() => {
                                    setIngrediente(ingrediente)
                                    setModalEditVisible(true)
                                  }}/></button><button className={styles.tableButton} onClick={() => {
                                    setIngrediente(ingrediente)
                                    setModalDeleteVisible(true)
                                  }}><BiTrash style={{fontSize: 22, color: '#273339'}}/></button></div></td>
                          </tr>
                        )
                      })}
                  </table>
              </div>
          </div>
          )
        }
    }

    return (
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
                    section='Cardápio'
                    icon={
                      <BiFoodMenu style={{fontSize: 31, position: 'relative', top: -2.5, color:'#273339'}}/>
                    }
                  />
              <p style={{opacity: 0.7, marginBottom: `2rem`}}>Gerencie os produtos do seu Estabelecimento</p>
                    <section>
                        <div className={styles.productOrCategory}>
                            <div className={produtosVisible? styles.optionActive: styles.option} onClick={() => {
                              setProdutosVisible(true)
                              setCategoriasVisible(false)
                              setIngredientesVisible(false)
                            }}>
                                <p>Produtos</p>
                            </div>
                            <div className={categoriasVisible? styles.optionActive: styles.option} onClick={() => {
                              setCategoriasVisible(true)
                              setProdutosVisible(false)
                              setIngredientesVisible(false)
                            }}>
                                <p>Categorias</p>
                            </div>
                            <div className={ingredientesVisible? styles.optionActive: styles.option} onClick={() => {
                              setIngredientesVisible(true)
                              setCategoriasVisible(false)
                              setProdutosVisible(false)
                            }}>
                                <p>Ingredientes</p>
                            </div>
                        </div>
                        {dataVisible()}
                    </section>
                </div>
            </main>
        </>
    )
}