import React, { Fragment } from 'react'
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'

const App = () => {
  return (
    <Fragment>
      <Header />

      <Exercises />
      <Footer />
    </Fragment>
  )
}
export default App
