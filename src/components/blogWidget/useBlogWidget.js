import React, { useState } from 'react'

export const useBlogWidget = () => {
    const [isOpen,setIsOpen] = useState(false)
    
    const openModal = () => {
        setIsOpen(!isOpen)
        document.body.classList.add('hidden')
    }
    const onClose = () => {
        setIsOpen(false)
        document.body.classList.remove('hidden')
    }
  return {
    isOpen,
    openModal,
    onClose
  }
}
