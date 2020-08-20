import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from "components/CustomButtons/Button.js";
import allergy1 from "assets/img/icons/allergy1.png";
import allergy2 from "assets/img/icons/allergy2.png";
import allergy3 from "assets/img/icons/allergy3.png";
import allergy4 from "assets/img/icons/allergy4.png";
import allergy5 from "assets/img/icons/allergy5.png";
import allergy6 from "assets/img/icons/allergy6.png";
import allergy7 from "assets/img/icons/allergy7.png";
import allergy8 from "assets/img/icons/allergy8.png";
import allergy9 from "assets/img/icons/allergy9.png";
import allergy10 from "assets/img/icons/allergy10.png";
import allergy11 from "assets/img/icons/allergy11.png";
import allergy12 from "assets/img/icons/allergy12.png";
import allergy13 from "assets/img/icons/allergy13.png";
import kakaoIcon from "assets/img/Kakao_logo.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 800,
        flexGrow: 1,
        minWidth: 300,
        //fontFamily: "Spoqa Han Sans B",
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '3px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AllergyModal() {
    const classes = useStyles();
    const rootRef = React.useRef(null);

    return (
        <div className={classes.root} ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
            >
                <GridContainer justify="center">
                    <div className={classes.paper}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={10}>
                                <h3 id="server-modal-title">알레르기가 있으신가요?</h3>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                                <IconButton><CloseIcon></CloseIcon></IconButton>
                            </GridItem> 
                        </GridContainer>
                        
                        <GridItem xs={12} sm={12} md={12}>
                            <p id="server-modal-description">해당하는 알레르기를 선택해주세요.</p>
                        </GridItem>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy1} lat="allergyIcon1" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy2} lat="allergyIcon2" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy3} lat="allergyIcon3" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy4} lat="allergyIcon4" />}</Button>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy5} lat="allergyIcon5" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy6} lat="allergyIcon6" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy7} lat="allergyIcon7" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy8} lat="allergyIcon8" />}</Button>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy9} lat="allergyIcon9" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy10} lat="allergyIcon10" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy11} lat="allergyIcon11" />}</Button>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={3}>
                                <Button color="white">{<img src={allergy12} lat="allergyIcon12" />}</Button>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={4}>
                                <Button color="white">{<img src={allergy13} lat="allergyIcon13" />}</Button>
                            </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={3}>
                                <Button
                                    fullWidth
                                    className={classes.navLink}
                                    color="green"
                                    round
                                    >
                                    확인
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </GridContainer>
            </Modal>
        </div>
    );
}