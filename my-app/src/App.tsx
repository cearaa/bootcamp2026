import './App.css'
import Lista from './componentes/ListaAluno'
import Fiap1 from './assets/fiap1.jpg'

export default function App(){
  const aluno = "Tárik M. Alma "
  const curso = 'ADS'

  return(
    <>
    <h1>TDS FIAP - RwD</h1>
    <p>Alunos: {aluno} </p>
    <p>Curso: {curso} </p>
    <Lista/>
    </>
  )
}