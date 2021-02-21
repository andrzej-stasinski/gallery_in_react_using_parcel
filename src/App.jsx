import React, { useState } from 'react'
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

let img1 = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/08/17/botswana-elephant.jpg?width=1200'
let img2 = 'https://wallup.net/wp-content/uploads/2018/10/07/19284-cats-animals-kittens-faces-748x561.jpg'
let img3 = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20113314/Carolina-Dog-standing-outdoors.jpg'
let img4 = 'https://thumbs.dreamstime.com/b/cute-hamsters-snuggle-together-warm-box-cute-hamsters-184133341.jpg'

const Image = ({url}) => {
    const handleClick = event => {
        event.stopPropagation()
        console.log(url)
    }
    return (
        <img
            src={url} alt="elephant" 
            style={styles.img}
            onClick={handleClick} 
        />
    )
}

const Showcase = () => {
    const [url, setUrl] = useState('https://loremflickr.com/320/240/elephant')
    return (
        <div>
            <button 
                onClick={() => setUrl(img1)}
            >
                Image One
            </button>            
            <button 
                onClick={() => setUrl(img2)}
            >
                Image Two
            </button>            
            <button 
                onClick={() => setUrl(img3)}
            >
                Image Three
            </button>   
            <button 
                onClick={() => setUrl(img4)}
            >
                Image Four
            </button>   
            <br/><br/>         
            <img src={url} style={styles.imgLarge} />
        </div>
    )
}

const App = () => (
    <div onClick={event => console.log('click')}>
        <h2>Gallery</h2>
        <Image url={img1} />
        <Image url={img2} />
        <Image url={img3} />
        <Image url={img4} />
        <div>
            <Showcase />
        </div>
    </div>
    )

ReactDOM.render(<App />, document.getElementById('root'))




