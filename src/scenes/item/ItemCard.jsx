import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ItemCard() {
  return (
    <Card sx={{ maxWidth: 200, flex:"none" }}>
      <CardMedia
        sx={{ height: 150 }}
        image="https://picsum.photos/id/237/300/600"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product Description
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
