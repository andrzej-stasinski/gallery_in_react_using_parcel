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
    const [images, setImages] = useState(ArrayImg)
    const [newImageUrl, setNewImageUrl] = useState('')

    const changeImage = (url) => {
        setImageUrl(url)
    }
    const imageComp = images.map(ImgArr => {
        let id = Math.floor(Math.random() * 1000 + 1)
        console.log(id)
        id = ImgArr + id
        return (
            <Image 
                key={id}
                url={ImgArr} 
                changeImage={changeImage} 
                addImage={addImage}
            />            
        )
    })
    const addImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log('click')
        console.log(newImageUrl)
        setImages([...images, newImageUrl])
    }

    return (
        <div>
            {console.log(images)}

            <h2>Gallery</h2>

            <form>
                <input 
                    type="text" 
                    value={newImageUrl} 
                    placeholder='url image' 
                    onChange={event => setNewImageUrl(event.target.value)} 
                />
                <button onClick={addImage}>Add image</button>
            </form>
            <br/>

            { imageComp }
            <div>
                <Showcase urlImg={imageUrl}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))




