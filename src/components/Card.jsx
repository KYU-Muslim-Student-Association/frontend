import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ name, bio, img}) {
  const styles = {
    popup:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    }
  };
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia component='img' height='300' image={img} alt='scholars' />
        <CardContent style={styles.popup}>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.popup}>
        <Button size='small' color='primary'>
          abubakarali3w@gmail.com
        </Button>
      </CardActions>
    </Card>
  );
}
