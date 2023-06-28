import { useState } from "react"

import toast, { Toaster } from 'react-hot-toast';

import Addresses from './address/address.json'
import Social from "./Social";

function App() {

  const [address, setAddress] = useState('')

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(address){
      const found = Addresses.wallets.some((wallet) => wallet.address.toLowerCase() === address.toLowerCase());
  
      if (found) {
        toast.success('Congratulations, You have whitelist', {icon: '🎉'})
        setAddress('')
      } else {
        toast.success('Sorry, Check another address', {icon: '❌'})
        setAddress('')
      }

    } else {
      toast.error('Please enter your address')
    }

  }


  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-900 overflow-hidden">
      <Toaster position="top-center" />
      <div className="">
        <div className="text-center text-white text-3xl py-2">ERAEMOJI Wallet Checker</div>
        <form onSubmit={onSubmit} className="m-4 flex">
          <input 
            className="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-900 border-gray-200 bg-white focus:outline-none"
            type="text"
            placeholder="Enter Your Address"
            value={address}
            onChange={handleAddressChange}
          />

          <button 
            type="submit"
            disabled={!address || address.length !== 42}
            className={address && address.length === 42 ? `px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-2 uppercase border-yellow-500 border-t border-b border-r` : `px-8 rounded-r-lg bg-gray-400 text-white font-bold p-2 uppercase border-gray-500 border-t border-b border-r cursor-not-allowed`}
          >
            Check
          </button>
        </form>
      </div>
      <Social />
    </div>
  )
}

export default App
