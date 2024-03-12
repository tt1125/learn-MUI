import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function AutoComplete() {

  const [selectedMovie, setSelectedMovie] = React.useState<string>();

  return (
    <main className='m-20'>
      <Autocomplete
        
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        onChange={(e, value) => setSelectedMovie(value?.label)} 
        renderInput={(params) => <TextField {...params} label="Movie"/>}
      />
      <p>{selectedMovie}</p>
    </main>
  );
}

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
];