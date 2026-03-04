import './styles/theme.css'
import './styles/global.css'
import {Heading} from './component/Heading.tsx'
export function App() {
  return (
    <>
     <h1>Olá mundo 💕</h1>
     <Heading>
        <h2>Este é o título do heading</h2>
     </Heading>
    </>
  )
}