import React from "react"
import { Card, CardContent, Box, CardMedia } from '@mui/material';
import MovieSelector from './Dropdown.jsx';
import {useEffect, useState} from 'react';

export default function RecommendationCard(props) {

    const [movies, setMovies] = useState([]);

    const recommendedMovies = (recommendations) => {
        setMovies(recommendations);
    };

    return (
         <Box sx={{marginTop: "100px", marginLeft: "200px"}}  >
         <MovieSelector sx={{}} fetchmovies={recommendedMovies}/>
         <div>
            {movies && movies.map((movie) => {
                return (
                <Card variant='outlined' sx={{ marginTop: '20px', maxWidth: '300px', marginLeft: '10px', display: 'inline-flex'}}>
                <CardMedia square component="img" height="50%" width="50%"
            title="GeeksforGeeks" image={movie.poster_url} alt={movie.title} display="inline-flex"/>
             </Card>);
            })}
        </div>
         </Box>
    );
}