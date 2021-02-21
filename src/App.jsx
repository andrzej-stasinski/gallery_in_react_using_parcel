import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
    img: {
        width: 150,
        marginBottom: 5,
        marginRight: 5
    },
    imgLarge: {
        width: '100%',
    }
}

const Image = ({url}) => {
    const handleClick = event => {
        event.stopPropagation()
        console.log(url)
        Showcase(url)
    }
    return (
        <img
            src={url} alt="elephant" 
            style={styles.img}
            onClick={handleClick} 
        />
    )
}

const Showcase = (url) => (
    <div>
        <img src='https://loremflickr.com/320/240/fish' style={styles.imgLarge} />
    </div>
)

const App = () => (
    <div onClick={event => console.log('click')}>
        <h2>Gallery</h2>
        <Image url="https://loremflickr.com/320/240/elephant"/>
        <Image url='https://loremflickr.com/320/240/dog' />
        <Image url='https://loremflickr.com/320/240/cat' />
        <Image url='https://loremflickr.com/320/240/fish' />
        <div>
            <Showcase />
        </div>
    </div>
    )

ReactDOM.render(<App />, document.getElementById('root'))




