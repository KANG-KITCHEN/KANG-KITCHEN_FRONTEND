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
          <h2 className={classes.title}>안성탕면</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={10}>
          <hr></hr><br />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
                수출안성탕면
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                20050810
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
              수출해물안성탕면
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              20190814
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
              안성탕면
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              20060517
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
              안성탕면(단체급식용)
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                20090630
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
              안성탕면컵
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              20100908
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
              안성탕면컵 분말스프
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              20100909
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
                일본 안성탕면
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              20030610
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
              쫄병 안성탕면맛
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              19720154001
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              (주)농심
              </Typography>
              <Typography variant="h5" component="h2">
              해물안성탕면
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              20180828
              </Typography>
            </CardContent>
            <CardActions>
            <Button size="small">자세히 보기</Button>
            </CardActions>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
          <br />
          <br />
          <Paginations
            pages={[
              { text: "PREV" },
              { active: true, text: 1 },
              { text: 2 },
              { text: 3 },
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
