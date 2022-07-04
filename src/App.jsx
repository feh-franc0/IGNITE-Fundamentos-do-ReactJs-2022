import { Header } from "./components/Header"
import { Post } from "./Post"

import './styles.css'

export function App() {
  return (
    <>
    <Header />

    <Post 
      author="Fernando Franco" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, provident numquam. Unde dolore quod repudiandae numquam error, similique iste dolorum distinctio culpa in magni quasi sed saepe quidem labore veritatis?" 
    />  
    <Post 
      author="Felipe Marques" 
      content="texto de ilustracao para ser exibido na tela" 
    />  
    </>
  )
}

