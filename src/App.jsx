import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
    img: {
        width: 200,
        display: 'block',
        marginBottom: 5
    }
}

const handleClick = (event) => {
    console.log(event.target.src)
}
const Image = ({url}) => (
        <img
            src={url} alt="elephant" 
            style={styles.img}
            // onClick={() => console.log(url)} 
            onClick={handleClick} 
        />
)

const App = () => (
    <>
        <h2>Gallery</h2>
        <Image url="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
        <Image url='https://loremflickr.com/320/240/dog' />
        <Image url='https://loremflickr.com/320/240/cat' />
        <Image url='https://loremflickr.com/320/240/chamster' />
    </>
    )

ReactDOM.render(<App />, document.getElementById('root'))




