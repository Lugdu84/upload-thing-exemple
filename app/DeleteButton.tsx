'use client'

import { deleteFile } from '@/server/uploadthing'
import React from 'react'

export default function DeleteButton() {

  const handleDelete = async () => {
        const response = await deleteFile("9eca6a0c-67bf-44ea-8253-d46a3eeb706c-dn90v3.jpg")
        console.log("response: ", response)
  }
  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
