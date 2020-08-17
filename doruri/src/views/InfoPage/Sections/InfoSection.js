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

export default function InfoSection({ text }) {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={6} lg={12}>
                        <h2>
                            <strong>제품명</strong>
                        </h2>
                        <CustomTabs
                            headerColor="success"
                            tabs={[
                                {
                                    tabName: "Information",
                                    tabIcon: Info,
                                    tabContent: (
                                        <p className={classes.textCenter}>
                                            제품정보
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
