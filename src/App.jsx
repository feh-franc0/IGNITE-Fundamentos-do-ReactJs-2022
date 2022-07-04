import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Fernando Franco" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, provident numquam. Unde dolore quod repudiandae numquam error, similique iste dolorum distinctio culpa in magni quasi sed saepe quidem labore veritatis?" 
          />  
          <Post 
            author="Felipe Marques" 
            content="texto de ilustracao para ser exibido na tela" 
          />
        </main>
      </div>  
    </>
  )
}

