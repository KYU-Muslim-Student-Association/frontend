import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MultiActionAreaCard({ name, bio, img }) {
  const styles = {
    card: {
      maxWidth: 500,
    },
    media: {
      height: 300,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  };

  return (
    <Card style={styles.card}>
      <CardActionArea>
        <CardMedia style={styles.media} image={img} title={name} />
        <CardContent style={styles.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.content}>
        <Button size="small" color="primary">
          abubakarali3w@gmail.com
        </Button>
      </CardActions>
    </Card>
  );
}
