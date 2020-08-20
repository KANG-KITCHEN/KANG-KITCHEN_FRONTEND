import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import kakaoIcon from "assets/img/Kakao_logo.jpg";

import FoodImage from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6}>
          <img
            src={FoodImage}
            alt="foodimg"
            width ="400px"
            height ="400px"
            className={classes.imgRounded + " " + classes.imgFluid}
          />
        </GridItem>
        <GridItem xs={12} sm={6}>
          <h4>제조사 이름</h4>
          <h2>제품명</h2>
          <div>
            제품 번호 <br />

            회수 등급<br />
            <h4>사유</h4>
            사유사유사유사ㅏ유아사유
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4}></GridItem>
        </GridContainer>
    </div>
  );
}
