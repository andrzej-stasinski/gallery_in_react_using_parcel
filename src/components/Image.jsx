import React, { useState } from 'react'

const styles = {
    img: {
        width: 150,
        marginBottom: 5,
        marginRight: 5,
        cursor: 'pointer',
    },
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

export default Image


























