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

// import Data from "./PracticeData";
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

    return (
      <div>
        <Accordion key={data.asin_jp}>
          <AccordionSummary
            aria-controls={data.asin_jp}
            id={data.asin_jp}
            sx={{
              pointerEvents: "none",
              my: "10px",
            }}
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  pointerEvents: "auto",
                }}
              />
            }
          >
            <Card
              sx={{
                width: "100%",
                borderRadius: 2,
                marginTop: 2,
              }}
            >
              <CardContent>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item key="image" xs={4} sm={4} md={4} lg={4} xl={4}>
                    {/* <ImageList
                        sx={{
                          width: "100%",
                          height: "100%",
                          m: 0,
                          p: 0,
                        }}
                        cols={1}
                      >
                        <ImageListItem key={data.img_path}>
                          <Box
                            component="img"
                            src={`${data.img_path}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${data.img_path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={omittedContent(data.title_jp)}
                            loading="lazy"
                          />
                        </ImageListItem>
                      </ImageList> */}
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    lg={8}
                    xl={8}
                    sx={{ textAlign: "center" }}
                  >
                    <Typography
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pl: 1,
                        m: 0.5,
                        mt: -1,
                      }}
                    >
                      {omittedContent(data.category)}
                      {omittedContent(data.brand)}
                    </Typography>
                    {/* <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 540,
                        ms: 0.5,
                        pl: 1,
                      }}
                    >
                      {omittedContent(data.title_jp)}
                    </Typography> */}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
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
            <SortByPrice data={data} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
