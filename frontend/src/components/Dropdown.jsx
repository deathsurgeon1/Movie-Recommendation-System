import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import { movies } from '../data/movies';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MovieSelector(props) {

    const [selectedMovie, setMovie] = useState("");
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getMovieRecommendations = (movieName) => {
        const param = "https://moviesuggestionhacktober2022.herokuapp.com?movie_name=" + movieName;
        fetch(param)
        .then((res) => res.json())
        .then(res => props.fetchmovies(res));
    };

    const handleMovieSelection = (e,v) => {
        setMovie(v.title);
    };


    
    let options = []
    movies.map((option) => {
        const firstLetter = option[0].toUpperCase();
        options.push({
          firstLetter: firstLetter,
          title: option,
        }
        );
      });

    return (
        <div className="input" sx={{display: 'inline'}}>
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      getOptionLabel={(option) => option.title}
      sx={{ width: 650, display: 'inline-flex' }}
      renderInput={(params) => <TextField {...params} label="Select a movie..." />}
      onChange = { handleMovieSelection}
    />
    <Button variant="contained" sx={{marginLeft: '20px'}} onClick = {
        () => {
                getMovieRecommendations(selectedMovie);
            }
    }>Recommend</Button>
    </div>
    );
}