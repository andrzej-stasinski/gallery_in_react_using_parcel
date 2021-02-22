import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Image from './components/Image'
import Showcase from './components/ShowCase'
import ArrayImg from './components/ArrayImg'
import Form from './components/Form'

const App = () => {

    const [imagesArrayUrl, setImagesArrayUrl] = useState('https://loremflickr.com/320/240/elephant')
    const [images, setImages] = useState([])
    const [newImageUrl, setNewImageUrl] = useState('')

    const loadFormLocalStorage = () =>  {
        let arrayFromLocal =localStorage.getItem('gallery')
        arrayFromLocal = JSON.parse(arrayFromLocal)
        return arrayFromLocal
    }

    const saveToLocalStorage = (newImagesUrl) => {
        console.log(newImagesUrl)
        const arratToSave = JSON.stringify(newImagesUrl)
        console.log(arratToSave)
        localStorage.setItem('gallery', arratToSave)
    }    

    useEffect(() => {
        console.log('useEffect')
        setImages(loadFormLocalStorage())
    },[])

    const changeImage = (url) => {
        setImagesArrayUrl(url)
    }
    const imageComp = images.map(ImgArr => {
        let id = Math.floor(Math.random() * 1000 + 1)
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

        const newImagesUrl = [...images, newImageUrl]
        // setImages([...images, newImageUrl])

        setImages(newImagesUrl)
        saveToLocalStorage(newImagesUrl)

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




