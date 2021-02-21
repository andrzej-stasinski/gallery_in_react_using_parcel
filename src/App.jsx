import React from 'react'
import ReactDOM from 'react-dom'

// const Comp = () => React.createElement('h1', {}, 'Hello')
const App = () => (
    <div>
        <h2>Hello World</h2>
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="elephant" />
    </div>
    )

// ReactDOM.render(React.createElement(App), document.getElementById('root'))
ReactDOM.render(<App />, document.getElementById('root'))




