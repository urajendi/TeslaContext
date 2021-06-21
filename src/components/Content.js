import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import Pagination from './Pagination';
// import ToggleButton from './ToggleButton.js';
import {ThemeContext} from './ThemeContext.js';

const PHOTO_JSON = 'https://api.jsonbin.io/b/60d0d4a05ed58625fd160a8d/1';

const Content = () => {

    // State Variables
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [photosPerPage] = useState(5);
   
    useEffect(()=>{
        const fetchPhotos = async () => {
            setLoading(true);
            const res = await axios.get(PHOTO_JSON);
            setPhotos(res.data);
            setLoading(false);
        }
        fetchPhotos();
    }, []);
   
    // Get current photos
    const totalPhotos = photos.length;
    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
   
    // Change page onClick
    const paginate = (pageNumber) => setcurrentPage(pageNumber);
    console.log("currentPage = "+currentPage);

    
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <div className="App">
                    <header className="App-header">
                        <h1 className="text-info mt-3">Photo Gallery</h1> 
                        <button 
                            onClick={toggleTheme}
                            id = "toggle" 
                            className = "btn"
                            style={{color: theme.color, backgroundColor: theme.backgroundColor, bordorColor: theme.bordorColor}}
                        >
                            Toggle Theme = {theme.name}
                        </button>
                        {/* <ToggleButton /> */}
                        <PhotoList 
                            photos = {currentPhotos}
                            loading = {loading}
                            color = {theme.color}
                            backgroundColor = {theme.backgroundColor}
                        />
                        <Pagination 
                            photosPerPage={photosPerPage} 
                            totalPhotos={totalPhotos} 
                            paginate={paginate} 
                        />
                    </header>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default Content;
