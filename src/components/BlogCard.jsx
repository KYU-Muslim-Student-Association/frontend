import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard({ name, bio, img, id }) {
  return (
    <Link to={`/blogs/${id}`}>
      <Card sx={{ maxWidth: { xs: 450, md: 345 } }}>
        <CardMedia sx={{ height: 140 }} image={img} title='blog image' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Read More</Button>
        </CardActions>
      </Card>
    </Link>
  );
}
