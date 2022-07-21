import React, { FC } from 'react'
import image from '../images/logo.png'
import { Link } from 'gatsby'
// import { Helmet } from 'react-helmet'

const Resume: FC<unknown> = () => {
  return (
    <div>
      {/* <Helmet defer={false}>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet> */}
      <Link to="/">Return Home</Link>
      <h1>React Page</h1>
      <img alt="icon" src={image} />
      <p>My current Résumé.</p>
    </div>
  )
}

export default Resume

export const Head = () => (
  <>
    <title>Résumé</title>
    <meta name="description" content="Résumé" />
  </>
)
