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
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='Email' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home