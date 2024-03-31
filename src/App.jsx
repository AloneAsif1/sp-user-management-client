import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
   <div className='flex items-center flex-col'>
   <a href="/">  <h1 className='font-bold   text-4xl mt-5 text-center text-red-700'>Sohag Physics Students Management</h1></a>
    <a className='' href="/add"><h1 className='btn  text-xl font-bold btn-primary mt-5 text-center text-white'>Add a Student</h1></a>
   </div>
      <Outlet></Outlet>
    
      
    </>
  )
}

export default App
