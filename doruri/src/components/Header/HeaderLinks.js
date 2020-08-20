/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={MenuIcon}
          dropdownList={[
            <Link to="/about-page" className={classes.dropdownLink}>위해식품 등급 산정 기준</Link>,
            <Link to="/board-page" className={classes.dropdownLink}>최근 회수 및 판매 중지 식품</Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/signin-page">
        <Button
          className={classes.navLink}
          color="transparent"
        >
          SIGN IN
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
      <Link to="/signup-page">
        <Button
          className={classes.registerNavLink}
          color="green"
          round
        >
          SIGN UP
        </Button>
      </Link>
      </ListItem>
    </List>
  );
}
