import React, {useState} from 'react'
let initialState = {title : "", description : ""}
const randomId = () => Math.random().toString(36).slice(2)
export default function Todo() {
  const [state,setState] = useState(initialState)

  const [todos,setTodos] = useState([])

  const handleChange = e => setState(s => ({...s,[e.target.name] : e.target.value}))
  
  const handleSubmit = () => {
    const {title,description} = state
    let todo = {
      title , description,
      id : randomId(),
      status : "Incompleted"
    }
    setTodos(s => [...s,todo])
  }
  return (
    <div className='py-5' id='todos'>
      <div className="container">
        <div className="card p-3 p-md-4 mx-auto" style={{width : 500}}>
          <h2 className='text-center mb-4'>Todos</h2>
          <div className="row">
            <div className="col-12 mb-3">
              <input type="text" name='title' className='form-control' placeholder='Enter the title' onChange={handleChange}  />
            </div>
            <div className="col-12 mb-3">
              <textarea type="text" name='description' className='form-control' placeholder='Enter the description' onChange={handleChange}  />
            </div>
            <div className="col-12 mb-3 text-center">
              <button className="btn btn-primary w-100" onClick={handleSubmit}>Add Todo</button>
            </div>
          </div>
        </div>

        <div className="card p-3 p-md-4 mx-auto mt-3">
          <h2 className="text-center mb-4">Todos</h2>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo,i) => {
          const {id,description,title,status} = todo
          return  <tr key={i}>
          <th scope="row">{i + 1} </th>
          <td scope="row">{id} </td>
          <td scope="row">{title} </td>
          <td scope="row">{description} </td>
          <td scope="row">{status} </td>
        </tr>
        })}
       
      </tbody>
</table>
        </div>
      </div>
    </div>
  )
  
}
