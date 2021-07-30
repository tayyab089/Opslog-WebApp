import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function CardComponent({
  title,
  image,
  description,
  destination,
}) {
  return (
    <Fragment>
      <Card className="Card">
        <Link
          to={destination}
          style={{ textDecoration: 'inherit', color: 'inherit' }}
        >
          <CardMedia component="img" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Fragment>
  );
}
