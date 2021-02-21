import React from 'react'

export const Form = ({newImageUrl, setNewImageUrl, addImage}) => {
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    value={newImageUrl} 
                    placeholder='url image' 
                    onChange={event => setNewImageUrl(event.target.value)} 
                />
                <button onClick={addImage}>Add image</button>
            </form>            
        </div>
    )
}
export default Form




















