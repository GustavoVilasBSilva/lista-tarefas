import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
