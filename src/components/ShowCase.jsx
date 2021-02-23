import React, { useState } from 'react'

const styles = {
    div: {
         marginTop: 10 ,      
    },
    imgLarge: {
        width: '100%',
        maxWidth: 700,
        display: 'block',
        margin: '0 auto',
    }
}

const Showcase = ({urlImg}) => {
    return (
        <div style={styles.div}>       
            <img src={urlImg} style={styles.imgLarge} />
        </div>
    )
}
export default Showcase




























