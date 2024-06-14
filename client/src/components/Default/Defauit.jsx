import React from 'react'

import Header from '../Header/Header'
// children la thang co tuc thanh phan nao fdc thang cha boc 
const Defauit = ({children}) => {
  return (
    <div>
      <Header/>
      {children} 
      <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        &copy; 2023 Ecommerce Site. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Defauit
