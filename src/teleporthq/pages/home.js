import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project7</title>
        <meta property="og:title" content="New Project7" />
      </Helmet>
    </div>
  )
}

export default Home
