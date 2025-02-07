import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Logo from "assets/img/Logo.png";
import FoodLogoIcon from "assets/img/foodsafekorea.png";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import ProductSection from "views/LandingPage/Sections/ProductSection.js";
import WorkSection from "views/LandingPage/Sections/WorkSection.js";
// Sections for this page

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function AboutPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div>
            <Header
                brand="DORURI"
                routes={dashboardRoutes}
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/aboutbg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                                <div className={classes.Logo}>
                                    <div>
                                        <br />
                                        <img src={Logo} width="30%" alt="logo" className={imageClasses} />
                                    </div>
                                    <div className={classes.name}>
                                        <h4 className={classes.title}>도르리는 사용자의 식품 안전을 책임집니다.</h4><hr></hr>
                                        <div>
                                            <br />
                                            <strong>제2장 회수의 종류, 대상 및 등급</strong><br /><br />
                                             <b>1. 회수의 종류</b><br />
                                            <b>가. 강제회수</b><br />
                                            「식품위생법」제45조 및 제72조에 근거한 회수<br />
                                            <b>나. 자율회수</b><br />
                                            강제회수 이외의 위생상 위해우려가 의심되거나, 품질 결함 등의 이유로 영업자가 스스로 실시하는 회수<br /><br />

                                            <b>2. 회수대상 식품</b><br />
                                            식품위생법 제72조(폐기처분등)제3항의 규정에 따라 식품위생상의 위해가 발생하였거나 발생할 우려가 있다고 인정되는 식품으로서 다음 각 항목에 해당하는 경우<br /><br />
                                            가.「식품위생법」제4조(위해식품등의 판매등 금지) 내지 제6조(기준·규격이 고시되지 아니한 화학적 합성품등의 판매등 금지) 및 제8조(유독기구등의 판매·사용금지) 규정을 위반한 식품<br />
                                            나.「식품위생법」제7조(기준과 규격)제4항 또는 제9조(기준과 규격)제4항의 기준·규격을 위반한 식품으로서 각 회수등급별 위반사항에 해당되는 경우<br />
                                            다.「식품위생법」제10조(표시기준)제2항, 제37조(영업의 허가등) 규정을 위반한 식품으로서 각 회수등급별 위반사항에 해당되는 경우<br />
                                            라. 기타 인체의 건강에 위해를 가할 가능성이 있어 식품의약품안전처장이 회수하여야 한다고 인정하는 경우<br />

                                            회수등급은 위해요소의 종류, 인체건강에 영향을 미치는 위해의 정도, 위반행위의 경중 등을 고려하여 1, 2, 3등급으로 분류한다. 다만, 위해물질 등이 기준을 초과한 정도, 사회적 여건 등을 종합적으로 고려하여 필요하다고 판단되는 경우에는 회수등급을 조정할 수 있다.<br />
                                            <b>가. 1등급</b><br />
                                            식품의 섭취 또는 사용으로 인해 인체건강에 미치는 위해영향이 매우 크거나 중대한 위반행위로서 다음 각 항목에 해당되는 경우<br /><br />
                                            1) 식품에 사용이 금지된 아래 각 항목의 원료를 사용한 경우<br />
                                                ①「식품위생법」제5조(병든 동물 고기 등의 판매등 금지) 및 같은 법 시행규칙 제4조(판매 등이 금지되는 병든 동물 고기 등) 제1호에 규정된「축산물 위생관리법」상 도축이 금지된 가축전염병〔소해면상뇌증(BSE), 탄저병, 구제역, 돼지콜레라, 가금인플루엔자, 결핵, 브루셀라병 등〕에 감염된 식육<br />
                                                ②「식품위생법」제5조(병든 동물 고기 등의 판매등 금지) 및 같은 법 시행규칙 제4조(판매 등이 금지되는 병든 동물 고기 등) 제2호에 규정된 리스테리아병, 살모넬라병, 파스튜렐라병, 선모충증에 감염된 식육<br />
                                                ③「식품위생법」제93조(벌칙)에 따라 식품에 사용할 수 없는 마황, 부자, 천오, 초오, 백부자, 섬수<br />
                                                ④ 식품공전 「별표 3. “식품에 사용할 수 없는 원료”」의 목록에 등재되어 있는 동․식물<br />
                                                ⑤ 식용으로 부적합한 비가식 부분<br />
                                                ⑥ 기타 식품의약품안전처장이 식용으로 부적절하다고 인정한 동․식물<br />
                                                ⑦ 유통기한이 경과한 식품<br />
                                                ⑧ 한글표시사항 전부 또는 유통기한이 표시되지 않은 식품<br /><br />

                                            2) 국제암연구소(IARC)의 발암물질 분류기준중 Group 1에 해당하는 물질로서 기준을 초과하여 검출된 경우<br />
                                                ① 포름알데히드<br />
                                                ② 방향족탄화수소(벤조피렌 등)<br />
                                                ③ 다이옥신<br />
                                            3) ‘병원성대장균 O157:H7, 리스테리아 모노사이토제네스, 클로스트리디움 보툴리눔 및 엔테로박터 사카자키균’이 기준을 초과하여 검출된 경우<br />
                                            4) 마비성패독이 기준을 초과하여 검출된 경우<br />
                                            5) 아플라톡신이 기준을 초과하여 검출되거나 또는 그 초과한 것을 원료로 사용한 경우<br />
                                            6) 방사능 기준을 초과하여 검출된 경우<br />
                                            7) 인체에 직접적인 손상을 줄 수 있는 금속성 이물, 유리조각 등이 혼입된 경우<br />
                                            8) 사람에게 심한 혐오감을 주는 이물(위생동물의 사체 등)이 혼입된 경우<br />
                                            9) 인체 기생충 및 그 알이 혼입된 경우<br />
                                            10)「식품위생법」제4조(위해식품등의 판매등 금지) 제1호, 제2호 및 제4호를 위반한 것으로 인체 건강에 미치는 위해의 정도가 매우 큰 경우<br />
                                            11)「식품위생법」제4조(위해식품등의 판매등 금지)제6호 및 제7호를 위반한 경우<br />
                                            12)「식품위생법」제6조(기준·규격이 고시되지 아니한 화학적 합성품등의 판매등 금지), 제8조(유독기구등의 판매·사용금지)를 위반한 경우<br />
                                            13) 영업허가·등록 또는 신고를 하지 않고 식품을 제조·소분·수입한 경우<br />
                                            14) 제조일자 또는 유통기한을 변조한 경우<br />
                                            15) 식품에 한글표시사항 전부를 표시하지 않았거나, 제조일자 또는 유통기한을 표시하지 않은 경우(유통기한이 없는 식품첨가물은 제외)<br />
                                            16) 표시대상 알레르기 유발 원료성분 등을 표시하지 아니한 경우<br />
                                            17) 한시적 기준·규격이 정해지지 않은 천연첨가물, 살균·소독제, 기구·용기·포장을 제조․수입․기타 영업상 사용한 경우<br />
                                            18) 기타 인체건강에 미치는 위해의 정도나 위반행위의 정도가 위의 1) 내지 17)항목과 동등하거나 유사하다고 판단되는 경우로서 식품의약품안전처장이 1등급으로 결정하는 경우<br /><br />

                                            <b>나. 2등급</b><br />
                                            식품의 섭취 또는 사용으로 인해 인체건강에 미치는 위해영향이 크거나 일시적인 경우로서 다음 각 항목에 해당하는 경우<br /><br />
                                            1) 중금속인 비소․납․카드뮴․수은이 기준을 초과하여 검출된 경우<br />
                                            2) 식중독균인 ‘살모넬라, 황색포도상구균, 장염비브리오균, 클로스트리디움 퍼프린젠스, 캠필로박터제주니, 바실러스 세레우스, 여시니아 엔테로콜리티카’가 기준을 초과하여 검출된 경우<br />
                                            3) 국제암연구소(IARC)의 발암물질 분류기준중 Group 2A, 2B에 해당하는 물질로서 정해진 기준을 초과하여 검출된 경우<br />
                                                ① 메틸수은<br />
                                            4) 농산물(인삼, 콩나물 포함) 또는 식육의 농약잔류허용기준을 초과하거나 또는 초과한 것을 원료로 사용한 경우<br />
                                            5) 동물용의약품의 잔류허용기준을 초과하거나 또는 초과한 것을 원료로 사용한 경우<br />
                                            6) 메탄올 및 시안화물이 기준을 초과하여 검출된 경우<br />
                                            7) 기타 인체건강에 미치는 위해의 정도가 위의 1) 내지 6)항목과 동등하거나 유사하다고 판단되는 경우로서 식품의약품안전처장이 2등급으로 결정하는 경우<br /><br />
                                            <b>다. 3등급</b><br />
                                            식품의 섭취 또는 사용으로 인해 인체의 건강에 미치는 위해 영향이 비교적 적은 경우로서 다음 각 항목에 해당하는 경우<br /><br />
                                            1) 국제암연구소(IARC)의 발암물질 분류기준중 Group 3에 해당하는 물질로서 정해진 기준을 초과하여 검출된 경우<br />
                                                ① 셀레늄(selenium)<br />
                                                ② 방향족탄화수소(페놀, 톨루엔 등)<br />
                                            2) 대장균․대장균군 또는 일반세균 시험에서 부적합으로 판정된 경우<br />
                                            3) 바륨이 기준을 초과하여 검출된 경우<br />
                                            4) 방사선 조사기준을 위반한 경우<br />
                                            5) 식품첨가물 사용 또는 허용량기준을 위반한 경우 (사용 또는 허용량기준을 10%미만 초과한 것은 제외)<br />
                                            6) 주석·암모니아성질소 또는 형광증백제 시험에서 부적합으로 판정된 경우<br />
                                            7) 제조과정 중에서 파리, 바퀴벌레, 1등급외의 기생충 및 그 알 등 위생곤충이 혼입되어 인체의 건강을 해할 우려가 있는 경우<br />
                                            8) 기타이물 중 제조과정 중에서 혼입될 가능성과 인체에 위해영향을 줄 가능성이 있는 것으로서 식품의약품안전처장이 회수가 필요하다고 인정하는 이물<br />
                                            9) 기타 인체건강에 미치는 위해의 정도가 위의 1) 내지 8)항목과 동등하거나 유사하다고 판단되는 경우로서 식품의약품안전처장이 3등급으로 결정하는 경우<br />
                                            <br />
                                            <h6>출처 : 위해식품 회수지침</h6>
                                        </div>
                                        <a href="https://www.foodsafetykorea.go.kr/main.do">
                                            <Button fullWidth="true" round="true"><img src={FoodLogoIcon} lat="FoodLogo"/></Button>
                                        </a>
                                        <br /><br />
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
