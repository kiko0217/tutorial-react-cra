import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetail() {
  const urlParams = useParams()
  return (
    <>
      <h1>Blog Detail</h1>
      <p>Halaman ini adalah {urlParams.slug}</p>
    </>
  )
}
