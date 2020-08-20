import React from "react";
// plugin that creates slider
//import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputAdornment from "@material-ui/core/InputAdornment";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
//import Radio from "@material-ui/core/Radio";
//import Switch from "@material-ui/core/Switch";
// @material-ui/icons
//import Favorite from "@material-ui/icons/Favorite";
//import People from "@material-ui/icons/People";
//import Check from "@material-ui/icons/Check";
//import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
//import Paginations from "components/Pagination/Pagination.js";
//import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Icon } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(styles);


export default function SectionSearch({text}) {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={4} md={4} lg={10}>
                        <CustomInput
                            className = "searchKeyword"
                            labelText="제품명이나 사이트 주소를 입력하세요"
                            id="font-awesome"
                            gray
                            default
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4} lg={2}>
                        <IconButton aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </GridItem>
                </GridContainer>
            </div>
        </div>        
    );
}
