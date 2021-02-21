import React from 'react'
import ReactDOM from 'react-dom'

const Image = () => (
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="elephant" />
    )

const App = () => (
    <>
        <h2>Gallery</h2>
        <Image />
        <Image />
    </>
    )

ReactDOM.render(<App />, document.getElementById('root'))




