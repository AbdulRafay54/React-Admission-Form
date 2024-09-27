
import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'

const App = () => {
  return (
<>
<Navbar/>
<div className='bg-gray-900 p-1'>
  <h1
    className="text-center mt-8 text-[24px] font-semibold text-[#AAB4BE]"
    style={{
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    }}
  >
    Admission Form
  </h1>
</div>
<Form/>

</>

)
}

export default App