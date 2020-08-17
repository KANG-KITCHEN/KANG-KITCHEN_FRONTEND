import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SearchSection from "../Components/Sections/SectionSearch.js";


const useStyles = makeStyles(styles);

export default function InfoPage(props) {
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                brand="Material Kit React"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/bg3.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Project Title</h1>
                                <h3 className={classes.subtitle}>main...</h3>
                            </div>
                            <SearchSection />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <Footer />
        </div>
    );
}