import React from 'react';
import { Container } from '@mui/system';

import RefreshIcon from '@mui/icons-material/Refresh';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';


const Random = () => {
  const [verse, setVerse] = React.useState({
    ayat: 'O ye who believe! Be mindful of your duty to Allah, and seek the way of approach unto Him, and strive in His way in order that ye may succeed. ',
    surah: 'Surah Al-Imran',
    number: 'Verse 110',
  });

  const randomAya = Math.random() * (6236 - 1) + 1;

  const getVerse = async () => {
    try {
      await fetch(
        `https://api.alquran.cloud/v1/ayah/${randomAya}/editions/quran-uthmani,en.asad`
      )
        .then((res) => res.json())
        .then((data) => {
          setVerse({
            ayat: data.data[1].text,
            surah: data.data[1].surah.englishName,
            number: data.data[1].surah.number,
          });
        });

      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <IconButton onClick={() => getVerse()}>
        <RefreshIcon fontSize='large' cursor='pointer' />
      </IconButton>

      <Typography variant='body1' textAlign='center'>
        Random Quran Verse
      </Typography>
      <Typography variant='h5' m={5} color='#c98d83'>
        "{verse?.ayat}"
      </Typography>
      <Typography variant='body1' textAlign='center'>
        Surah {verse?.surah} - {verse?.number}
      </Typography>
    </Container>
  );
};

export default Random;
