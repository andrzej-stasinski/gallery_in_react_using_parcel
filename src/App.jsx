import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const styles = {
    img: {
        width: 150,
        marginBottom: 5,
        marginRight: 5,
        cursor: 'pointer',
    },
    imgLarge: {
        width: '100%',
    }
}

const Image = ({url, changeImage}) => {
    const handleClick = event => {
        console.log(url)
        changeImage(url)
    }
    return (
        <img
            src={url} alt="elephant" 
            style={styles.img}
            onClick={handleClick} 
        />
    )
}

const Showcase = ({urlImg}) => {
    return (
        <div>       
            <img src={urlImg} style={styles.imgLarge} />
        </div>
    )
}

const App = () => {

    const ArrayImg = [
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/08/17/botswana-elephant.jpg?width=1200',
        'https://wallup.net/wp-content/uploads/2018/10/07/19284-cats-animals-kittens-faces-748x561.jpg',
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20113314/Carolina-Dog-standing-outdoors.jpg',
        'https://thumbs.dreamstime.com/b/cute-hamsters-snuggle-together-warm-box-cute-hamsters-184133341.jpg',
    ]

    const [imageUrl, setImageUrl] = useState('https://loremflickr.com/320/240/elephant')
    const changeImage = (url) => {
        setImageUrl(url)
    }
    const imageComp = ArrayImg.map(ImgArr => (
        <Image 
            key={ImgArr}
            url={ImgArr} 
            changeImage={changeImage} 
        />
    ))
    return (
        <div>
            <h2>Gallery</h2>
            { imageComp }
            <div>
                <Showcase urlImg={imageUrl}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))




