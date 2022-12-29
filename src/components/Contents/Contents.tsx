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
import Hero from "./Hero";
import Footer from "../Footer/Footer";

import ItemReviewCard from "./ItemReviewCard";
import Data from "./PracticeSearchedData";
import { valueToPercent } from "@mui/base";

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

  let sortedCost = {};

  const omittedContent = (text: string) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    let textLength = 20;
    if (matches == true) {
      textLength = 60;
    } else {
      textLength = 35;
    }

    if (text.length > textLength) {
      return text.substring(0, textLength) + "...";
    }
    return text;
  };

  const SortByPrice = (data: any) => {
    let cost: Price = {};
    const [expanded, setExpanded]: [boolean | string, any] =
      React.useState("panel_0");

    // for (const [key, value] of Object.entries(data)) {
    try {
      cost.jp = Number(data.price_jp) + Number(data.extra_fee_jp);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.com = Number(data.price_com) + Number(data.extra_fee_com);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.uk = Number(data.price_uk) + Number(data.extra_fee_uk);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.fr = Number(data.price_fr) + Number(data.extra_fee_fr);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.es = Number(data.price_es) + Number(data.extra_fee_es);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.it = Number(data.price_it) + Number(data.extra_fee_it);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.de = Number(data.price_de) + Number(data.extra_fee_de);
    } catch (error) {
      console.error(error);
    }
    try {
      cost.yodobashi =
        Number(data.price_yodobashi) + Number(data.extra_fee_yodobashi);
    } catch (error) {
      console.error(error);
    }
    // Object.keys(cost).sort((a, b) => a - b);
    sortedCost = Object.fromEntries(
      Object.entries(cost).sort(([, a], [, b]) => a - b)
    );
    // console.log(data.data);
    return (
      <ItemReviewCard
        img_path={data.img_path}
        category={data.category}
        brand={data.brand}
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
            <SortByPrice key={data.asin_jp} data={data} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
