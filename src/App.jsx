import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Image from './components/Image'
import Showcase from './components/ShowCase'
// import ArrayImg from './components/ArrayImg'
import Form from './components/Form'
import firebase from './firebase'
import {DATABASE_URL} from './firebase'

const App = () => {

    const [imagesArrayUrl, setImagesArrayUrl] = useState('https://loremflickr.com/320/240/elephant')
    const [images, setImages] = useState([])
    const [newImageUrl, setNewImageUrl] = useState('')
 
    const getData = () => {
        fetch(`${DATABASE_URL}/images.json`)
        .then(res => res.json())
        .then(data => {
            const arr3 = Object.keys(data).map(key => {
                return {
                    id: key, 
                    ...data[key]
                } 
            })
            console.log(arr3)
            const loadImages = arr3.map(img => {
                return {id: img.id, url: img.url}
            })
            console.log(loadImages)
            setImages(loadImages)
        })        
    }
    // get data from Database
    // ------------------------------
    useEffect(() => {
        getData()
    },[])

    // save data to Database
    // ------------------------------    
    const addImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        fetch(`${DATABASE_URL}/images.json`,{
            method: 'POST',
            body: JSON.stringify({
                url: newImageUrl, 
            })
        }).then(() => console.log('Written to firebase'))
        setNewImageUrl('')
        getData()
    }

    const deleteImage = (id) => {
        console.log('deleteImage', id)
        fetch(`${DATABASE_URL}/images/${id}.json`,{
            method: 'DELETE',
        })
        .then(() => {
            console.log('Delete YES')
            getData()
        }) 
        .catch((err) => console.log('Delete NO'))       
    }

    const changeImage = (url) => {
        setImagesArrayUrl(url)
    }
    const imageComp = images.map(ImgArr => {
        return (
            <Image 
                key={ImgArr.id}
                id={ImgArr.id}
                url={ImgArr.url} 
                changeImage={changeImage} 
                onDeleteImage={deleteImage}
            />            
        )
    })

    return (
        <div>
            <h2>Gallery</h2>

            <Form 
                newImageUrl={newImageUrl} 
                setNewImageUrl={setNewImageUrl} 
                addImage={addImage} 
            />

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                { imageComp }
            </div>
            
            <div>
                <Showcase urlImg={imagesArrayUrl}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))




