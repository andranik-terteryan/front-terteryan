import React, { useState } from 'react'

export const useBlogWidget = () => {
    const [isOpen,setIsOpen] = useState(false)
    
    const openModal = () => {
        setIsOpen(!isOpen)
    }
    const onClose = () => {
        setIsOpen(false)
    }
  return {
    isOpen,
    openModal,
    onClose
  }
}
