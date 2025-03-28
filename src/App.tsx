import { useState } from 'react'
import axios from 'axios'

import './App.css'

type ServerResponse = {
  id: number
  name: string
}

function App() {
  const [dataFromServer, setDataFromServer] = useState<ServerResponse | null | 'error'>(null)

  async function fetchData(url: string): Promise<void> {
    try {
      const response = await axios.get<ServerResponse>(url)
      setDataFromServer(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
      setDataFromServer('error')
    }
  }

  const handleClickButton = () => {
    fetchData('https://grabber-server.con.ua')
  }

  return (
    <div className="wrap">
      <button type="button" onClick={handleClickButton}>
        Відправити запит на сервер
      </button>

      {dataFromServer && dataFromServer !== 'error' && (
        <div className="content">
          <p>Id: {dataFromServer.id}</p>
          <p>Name: {dataFromServer.name}</p>
        </div>
      )}

      {dataFromServer === 'error' && (
        <h1>Упс! Нажаль під час отримання даних від сервера сталася помилка 🤷‍♂️</h1>
      )}
    </div>
  )
}

export default App
