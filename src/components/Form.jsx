import React from 'react'

const styles = {
    formDiv: {
        marginBottom: 10,
    },
    form: {
        display: 'flex',
    },
    input: {
        outline: 'none',
        padding: 5,
        width: '100%',
    },
    button: {
        width: 100,
        marginLeft: 10,
        cursor: 'pointer',
    }
}
export const Form = ({newImageUrl, setNewImageUrl, addImage}) => {
    const onAddImage = (e) => {
        console.log(e)
        e.preventDefault()
        if(newImageUrl.length > 0)
            addImage(newImageUrl)
    }
    return (
        <div style={styles.formDiv}>
            <form style={styles.form} onSubmit={onAddImage}>
                <input 
                    style={styles.input} 
                    type="text" 
                    value={newImageUrl} 
                    placeholder='url image' 
                    onChange={event => setNewImageUrl(event.target.value)} 
                />
                <button 
                    style={styles.button} 
                >Add image</button>
                
            </form>            
        </div>
    )
}
export default Form




















