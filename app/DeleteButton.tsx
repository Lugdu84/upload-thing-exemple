'use client'

import { deleteFile } from '@/server/uploadthing'
import React from 'react'

export default function DeleteButton() {

    const handleDelete = async () => {
        const response = await deleteFile("c57f69a4-5108-4eee-834c-1a29840cb393-1zrcb.jpg")
        console.log("response: ", response)
  }
  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
