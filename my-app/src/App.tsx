import './App.css'
import Lista from './componentes/ListaAluno'
import Fiap1 from './assets/fiap1.png'

export default function App(){
  const aluno = "Tárik M. Alma "
  const curso = 'ADS'

  return(
    <>
    <h1>TDS FIAP - RwD</h1>
    <img src={Fiap1} width='100px' />
    <p>Alunos: {aluno} </p>
    <p>Curso: {curso} </p>
    <Lista/>
    </>
  )
}