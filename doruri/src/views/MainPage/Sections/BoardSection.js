import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Paginations from "components/Pagination/Pagination.js";

const useStyles = makeStyles(styles);

export default function BoardSection() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5}>
          <h2 className={classes.title}>최근 회수 및 판매 중지 식품</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
          <hr></hr><br />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
          <br />
          <br />
          <Paginations
            pages={[
              { text: "PREV" },
              { text: 1 },
              { text: 2 },
              { active: true, text: 3 },
              { text: 4 },
              { text: 5 },
              { text: "NEXT" }
            ]}
            color="green"
          />
        </GridItem>
      </GridContainer>
    </div >
  );
}
