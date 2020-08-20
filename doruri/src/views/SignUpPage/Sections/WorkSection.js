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

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>SIGN UP</h2>
          <form>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="ID"
                  id="ID"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={8} >
                <CustomInput
                  labelText="Confirm Password"
                  id="confirmPassword"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={2}>
                <Button className="btnSign" color="green">SIGN UP</Button>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10}>
                <hr class="line"></hr>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <section>
                  <Button color="yellow" fullWidth="true" round="true">
                    <img src={kakaoIcon} lat="kakaoIcon"/> 
                    카카오로 시작하기
                  </Button>
                </section>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
