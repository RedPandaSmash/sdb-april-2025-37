import React, {useState, useEffect} from 'react'

export default function ExternalComponent() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
      async function fetchTodos(){
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos")
          console.log(response)
          const data = await response.json();
          console.log(data)
          setData(data)
        } catch (error) {
          console.error(error)
          setError(error)
        } finally {
          setLoading(false)
        }
      }

      fetchTodos();
    }, []) // empty array means run just ONCE when component first mounts

  return (
    <div>
      <h2>Todos</h2>
      {
        data.map(todo => (
          <ul key={todo.userId}>
            <li>{todo.title}</li>
                      

            <li>{todo.completed.toString()}</li>
          </ul>
        ))
      }
    </div>
  )
}
