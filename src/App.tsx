import * as React from 'react'
import logo from './logo.svg'

const styles = require('./App.module.css')

const App: React.SFC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={styles.link}>Hello World!</a>
      </header>
    </div>
  )
}

export default App
