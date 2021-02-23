import React, { useState } from 'react'

const styles = {
    divImg: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 5,
        border: '1px solid #555',
        marginRight: 5,
        paddingBottom: 5,
        borderRadius: 5,
    },
    img: {
        width: 150,
        marginBottom: 5,
        cursor: 'pointer',
    },
    button: {
        width: '80%',
        margin: '0 auto',
        borderRadius: 5,
        outline: 'none',
        border: '1px solid #333',
        cursor: 'pointer',
        backgroundColor: '#e67e22',
    }
}

const Image = ({url, changeImage, id, onDeleteImage}) => {
    const handleClick = event => {
        changeImage(url)
    }
    return (
        <div style={styles.divImg}>
            <img
                src={url} alt="elephant" 
                style={styles.img}
                onClick={handleClick} 
            />
            <button style={styles.button} onClick={() => onDeleteImage(id)}>Delete</button>            
        </div>

    )
}

export default Image


























