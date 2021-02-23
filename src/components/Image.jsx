import React, { useState } from 'react'

const styles = {
    divImg: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    img: {
        width: 150,
        marginBottom: 5,
        marginRight: 5,
        cursor: 'pointer',
    },
}

const Image = ({url, changeImage, id, onDeleteImage}) => {
    const handleClick = event => {
        changeImage(url)
    }
    // console.log(id)
    return (
        <div style={styles.divImg}>
            <img
                src={url} alt="elephant" 
                style={styles.img}
                onClick={handleClick} 
            />
            <button onClick={() => onDeleteImage(id)}>Delete</button>            
        </div>

    )
}

export default Image


























