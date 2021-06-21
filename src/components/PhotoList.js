import React from 'react'

const PhotoList = ({photos, loading, color, backgroundColor}) => {
    if(loading){
        return <h2>Loading...</h2>;
    }
    
    return (
        <div className="container mt-4" id="photo-list-container">
            <ul className="photo-list list-group mb-4" style={{backgroundColor: backgroundColor}}>
                {photos.map(photo =>(
                    <li key={photo.id} className="imageRow list-group-item" style={{backgroundColor: backgroundColor}}>
                        <th scope="row" style={{color: color}} className="pr-5">{photo.id}</th>
                        <td><img src={photo.url} className="img-fluid" alt="Responsive image" width="100" height="100" /></td>
                        <td className="pl-5"></td>
                        <td style={{color: color}}>{photo.title}</td>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PhotoList

