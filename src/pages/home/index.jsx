import './style.css'
import Trash from '../../assets/delete.svg'

function Home() {

  const users = [
    {
      id: '2424jhdwjh',
      name: 'Rodolfo',
      age: 33,
      email: 'sla@gmail.com',
    },
    {
      id: '2424jhdwjh',
      name: 'Aline',
      age: 33,
      email: 'aline@gmail.com',
      },
]

  return (

    <div className='container'>
    <form>
      <h1>Cadastro de Usuários</h1>
      <input name='nome' type='text'/>
      <input name='idade' type='number'/>
      <input name='email' type='email'/>
      <button type='button'>Cadastrar</button>
    </form>

    { users.map( user => (
      <div key={user.id}>
        <div>
        <p>Nome: {user.name}</p>
        <p>Idade: {user.age}</p>
        <p>Email: {user.email}</p>
        </div>
      <button>
        <img src={Trash}/>
      </button>
    </div>
        ))}  

  </div>    
  )
}

export default Home