import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import JSwing from "./Assets/JoshuaSwing.png";
import BasicTable from "./Data";
import CardTabs from "./CardTabs";

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    margin: 15,
  },
  media: {
    height: 200
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
      <Card className={classes.root} elevation={15}>
        <CardActionArea>
          <CardMedia
              className={classes.media}
              image={JSwing}
              title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Power Showcase
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              International Power Showcase in Miami, Florida.
            </Typography>
            <BasicTable />
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing={true}>
          <CardTabs />
        </CardActions>
      </Card>
  );
}
