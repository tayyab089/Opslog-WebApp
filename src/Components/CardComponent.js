import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import { Fragment } from 'react';

export default function CardComponent({ title, image, description }) {
  return (
    <Fragment>
      <Card className="Card">
        <CardMedia component="img" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
}
