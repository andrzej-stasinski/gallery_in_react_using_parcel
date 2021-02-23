import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Image from './components/Image'
import Showcase from './components/ShowCase'
import ArrayImg from './components/ArrayImg'
import Form from './components/Form'
import firebase from './firebase'
import {DATABASE_URL} from './firebase'

const App = () => {

    const [imagesArrayUrl, setImagesArrayUrl] = useState('https://loremflickr.com/320/240/elephant')
    const [images, setImages] = useState(ArrayImg)
    const [newImageUrl, setNewImageUrl] = useState('')
 
    // get data from Cloud firestore
    // -----------------------------
    useEffect(() => {
        const unsub = firebase
            .firestore().collection('Images').get()
            .then(images => {
                const loadImages = images.docs.map(image => image.data().url)
                setImages(loadImages)
            })
        return () => unsub()
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

    // save data to Cloud firestore
    // ------------------------------    
    const addImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setImages([...images, newImageUrl])
        firebase.firestore().collection('Images').add({url: newImageUrl})
        setNewImageUrl('')
    }

    return (
        <div>
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




