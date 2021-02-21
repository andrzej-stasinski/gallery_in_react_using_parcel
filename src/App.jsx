import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
    img: {
        width: 200,
        display: 'block',
        marginBottom: 5
    }
}
const Image = (props) => (
        <img src={props.srcImg} alt="elephant" style={styles.img} />
    )

const App = () => (
    <>
        <h2>Gallery</h2>
        <Image srcImg="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
        <Image srcImg='https://loremflickr.com/320/240/dog' />
        <Image srcImg='https://loremflickr.com/320/240/cat' />
        <Image srcImg='https://loremflickr.com/320/240/chamster' />
    </>
    )

ReactDOM.render(<App />, document.getElementById('root'))




