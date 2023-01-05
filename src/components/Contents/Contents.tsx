import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import Item from "@mui/material/Item";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import ItemReviewCard from "./ItemReviewCard";
import { valueToPercent } from "@mui/base";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Data from "./PracticeSearchedData";
import Hero from "./Hero";
import Footer from "../Footer/Footer";

interface Price {
  jp?: number;
  com?: number;
  uk?: number;
  es?: number;
  fr?: number;
  it?: number;
  de?: number;
  yodobashi?: number;
}

export default function Contents() {
  const [pricedData, usePricedData] = React.useState({});
  const [datedData, useDatedData] = React.useState({});
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let sortedCost = {};

  const omittedTitle = (text: string) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    let textLength = 20;
    if (matches == true) {
      textLength = 50;
    } else {
      textLength = 35;
    }
    if (text.length > textLength) {
      return text.substring(0, textLength) + "...";
    }
    return text;
  };

  const SortByPrice = (data: any) => {
    // let cost: Price = {};
    // const [expanded, setExpanded]: [boolean | string, any] =
    //   React.useState("panel_0");

    // // for (const [key, value] of Object.entries(data)) {
    // try {
    //   cost.jp = Number(data.price_jp) + Number(data.extra_fee_jp);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   cost.com = Number(data.price_com) + Number(data.extra_fee_com);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   cost.uk = Number(data.price_uk) + Number(data.extra_fee_uk);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   cost.fr = Number(data.price_fr) + Number(data.extra_fee_fr);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   cost.es = Number(data.price_es) + Number(data.extra_fee_es);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   cost.it = Number(data.price_it) + Number(data.extra_fee_it);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   cost.de = Number(data.price_de) + Number(data.extra_fee_de);
    // } catch (error) {
    //   console.error(error);
    // }
    // try {
    //   cost.yodobashi =
    //     Number(data.price_yodobashi) + Number(data.extra_fee_yodobashi);
    // } catch (error) {
    //   console.error(error);
    // }
    // // Object.keys(cost).sort((a, b) => a - b);
    // sortedCost = Object.fromEntries(
    //   Object.entries(cost).sort(([, a], [, b]) => a - b)
    // );
    // console.log(sortedCost);
    return (
      <ItemReviewCard
        img_path={data.img_path}
        category={data.category}
        brand={data.brand}
        title_jp={data.title_jp}
        // sortedCost={sortedCost}
        asin_jp={data.asin_jp}
        asin_com={data.asin_com}
        asin_uk={data.asin_uk}
        asin_es={data.asin_es}
        asin_fr={data.asin_fr}
        asin_it={data.asin_it}
        asin_de={data.asin_de}
        asin_yodobashi={data.asin_yodobashi}
        price_jp={data.price_jp}
        price_com={data.price_com}
        price_uk={data.price_uk}
        price_es={data.price_es}
        price_fr={data.price_fr}
        price_it={data.price_it}
        price_de={data.price_de}
        price_yodobashi={data.price_yodobashi}
        extra_fee_jp={data.extra_fee_jp}
        extra_fee_com={data.extra_fee_com}
        extra_fee_uk={data.extra_fee_uk}
        extra_fee_es={data.extra_fee_es}
        extra_fee_fr={data.extra_fee_fr}
        extra_fee_it={data.extra_fee_it}
        extra_fee_de={data.extra_fee_de}
        extra_fee_yodobashi={data.extra_fee_yodobashi}
        scheduled_date_jp={data.scheduled_date_jp}
        scheduled_date_com={data.scheduled_date_com}
        scheduled_date_uk={data.scheduled_date_uk}
        scheduled_date_es={data.scheduled_date_es}
        scheduled_date_fr={data.scheduled_date_fr}
        scheduled_date_it={data.scheduled_date_it}
        scheduled_date_de={data.scheduled_date_de}
        scheduled_date_yodobashi={data.scheduled_date_yodobashi}
        url_jp={data.url_jp}
        url_com={data.url_com}
        url_uk={data.url_uk}
        url_es={data.url_es}
        url_fr={data.url_fr}
        url_it={data.url_it}
        url_de={data.url_de}
        url_yodobashi={data.url_yodobashi}
      />
    );
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Hero />
      <Container maxWidth="md" component="main">
        <Grid container alignItems="flex-start">
          {Data.map((data: any) => (
            <SortByPrice
              key={data.asin_jp}
              img_path={data.img_path}
              category={data.category}
              brand={data.brand}
              title_jp={data.title_jp}
              // sortedCost={sortedCost}
              asin_jp={data.asin_jp}
              asin_com={data.asin_com}
              asin_uk={data.asin_uk}
              asin_es={data.asin_es}
              asin_fr={data.asin_fr}
              asin_it={data.asin_it}
              asin_de={data.asin_de}
              asin_yodobashi={data.asin_yodobashi}
              price_jp={data.price_jp}
              price_com={data.price_com}
              price_uk={data.price_uk}
              price_es={data.price_es}
              price_fr={data.price_fr}
              price_it={data.price_it}
              price_de={data.price_de}
              price_yodobashi={data.price_yodobashi}
              extra_fee_jp={data.extra_fee_jp}
              extra_fee_com={data.extra_fee_com}
              extra_fee_uk={data.extra_fee_uk}
              extra_fee_es={data.extra_fee_es}
              extra_fee_fr={data.extra_fee_fr}
              extra_fee_it={data.extra_fee_it}
              extra_fee_de={data.extra_fee_de}
              extra_fee_yodobashi={data.extra_fee_yodobashi}
              scheduled_date_jp={data.scheduled_date_jp}
              scheduled_date_com={data.scheduled_date_com}
              scheduled_date_uk={data.scheduled_date_uk}
              scheduled_date_es={data.scheduled_date_es}
              scheduled_date_fr={data.scheduled_date_fr}
              scheduled_date_it={data.scheduled_date_it}
              scheduled_date_de={data.scheduled_date_de}
              scheduled_date_yodobashi={data.scheduled_date_yodobashi}
              url_jp={data.url_jp}
              url_com={data.url_com}
              url_uk={data.url_uk}
              url_es={data.url_es}
              url_fr={data.url_fr}
              url_it={data.url_it}
              url_de={data.url_de}
              url_yodobashi={data.url_yodobashi}
            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
