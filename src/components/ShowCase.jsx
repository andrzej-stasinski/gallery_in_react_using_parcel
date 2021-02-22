import React, { useState } from 'react'

const styles = {
    imgLarge: {
        width: '100%',
        maxWidth: 600,
    }
}

const Showcase = ({urlImg}) => {
    return (
        <div>       
            <img src={urlImg} style={styles.imgLarge} />
        </div>
    )
}
export default Showcase




























