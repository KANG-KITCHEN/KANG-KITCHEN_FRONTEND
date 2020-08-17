import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Img from "@material-ui/icons/Image";
import Heal from "@material-ui/icons/Healing";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDatas({ text }) {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={6} lg={6}>
                        <h2>
                            <strong>신라면</strong>
                        </h2>
                        <CustomTabs
                            headerColor="success"
                            tabs={[
                                {
                                    tabName: "Information",
                                    tabIcon: Info,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            농심 신라면
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Picture",
                                    tabIcon: Img,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            사진
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Health",
                                    tabIcon: Heal,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            영양
                                        </p>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={6}>
                        <h2>
                            <strong>안성탕면</strong>
                        </h2>
                        <CustomTabs
                            headerColor="success"
                            tabs={[
                                {
                                    tabName: "Information",
                                    tabIcon: Info,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            신라면이 더 맛있음
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Picture",
                                    tabIcon: Img,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            사진
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Health",
                                    tabIcon: Heal,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            영양
                                        </p>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} lg={6}>
                        <h2>
                            <strong>진라면 순한맛</strong>
                        </h2>
                        <CustomTabs
                            headerColor="success"
                            tabs={[
                                {
                                    tabName: "Information",
                                    tabIcon: Info,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            거른다 ㅅㅂ
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Picture",
                                    tabIcon: Img,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            사진
                                        </p>
                                    )
                                },
                                {
                                    tabName: "Health",
                                    tabIcon: Heal,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            영양
                                        </p>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
