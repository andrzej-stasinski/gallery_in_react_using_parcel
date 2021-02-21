import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Image from './components/Image'
import Showcase from './components/ShowCase'
import ArrayImg from './components/ArrayImg'
import Form from './components/Form'

const App = () => {

    const [imagesArrayUrl, setImagesArrayUrl] = useState('https://loremflickr.com/320/240/elephant')
    const [images, setImages] = useState(ArrayImg)
    const [newImageUrl, setNewImageUrl] = useState('')

    const changeImage = (url) => {
        setImagesArrayUrl(url)
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
        setNewImageUrl('')
    }

    return (
        <div>
            {console.log(images)}
            <h2>Gallery</h2>

            <Form 
                newImageUrl={newImageUrl} 
                setNewImageUrl={setNewImageUrl} 
                addImage={addImage} 
            />

            { imageComp }
            
            <div>
                <Showcase urlImg={imagesArrayUrl}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))




