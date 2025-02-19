import { useEffect, useState } from 'react'
import './App.css'

function App() {

  interface Month {
    idmonth: number;
    description: string;
  }

  const [months, setMonths] = useState<Month[]>([]);

  useEffect(() => {
    const getMonths = async () => {
      const response = await fetch('http://localhost:3000/months')
      const data = await response.json()
      setMonths(data)
      console.log(data)
    }
    getMonths();
  }, [])

  return (
    <>
      <h1>2025</h1>
      <div className='divMonths'>
        {months.map((month) => (
          <div className='cardMonth' key={month.idmonth}>
            <p>{month.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
