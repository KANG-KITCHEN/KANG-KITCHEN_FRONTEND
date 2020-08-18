import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function SignUpPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="DORURI"
                routes={dashboardRoutes}
                rightLinks={
                    <List className={classes.list}>
                        <Button
                            href="#pablo"
                            className={classes.navLink}
                            onClick={e => e.preventDefault()}
                            color="transparent"
                        >
                            SIGN IN
                  </Button>
                        <Button
                            href="#pablo"
                            className={classes.registerNavLink}
                            onClick={e => e.preventDefault()}
                            color="green"
                            round
                        >
                            SIGN UP
                  </Button>
                    </List>
                }
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/bg8.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <WorkSection />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <Footer />
        </div>
    );
}