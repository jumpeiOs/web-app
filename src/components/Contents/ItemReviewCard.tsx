import React, { useState, useMemo } from "react";
import { styled } from "@mui/material/styles";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { padding } from "@mui/system";
import Divider from "@mui/material/Divider";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
// interface Price {
//   jp?: number;
//   com?: number;
//   uk?: number;
//   es?: number;
//   fr?: number;
//   it?: number;
//   de?: number;
//   yodobashi?: number;
// }

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemReviewCard(props: any) {
  const [expanded, setExpanded]: [boolean | string, any] =
    React.useState(false);
  let sortedCost = {};

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let items = [
    {
      region: "amazon.co.jp",
      id: props.asin_jp,
      price: Number(props.price_jp) + Number(props.extra_fee_jp),
      _price: props.price_jp + "円",
      extra: props.extra_fee_jp + "円",
      date: props.scheduled_date_jp,
      url: props.url_jp,
    },
    {
      region: "amazon.com",
      id: props.asin_com,
      price: Number(props.price_com) + Number(props.extra_fee_com),
      _price: "$" + props.price_com,
      extra: "$" + props.extra_fee_com,
      date: props.scheduled_date_com,
      url: props.url_com,
    },
    {
      region: "amazon.co.uk",
      id: props.asin_uk,
      price: Number(props.price_uk) + Number(props.extra_fee_uk),
      _price: "£" + props.price_uk,
      extra: "£" + props.extra_fee_uk,
      date: props.scheduled_date_uk,
      url: props.url_uk,
    },
    {
      region: "amazon.es",
      id: props.asin_es,
      price: Number(props.price_es) + Number(props.extra_fee_es),
      _price: props.price_es + "€",
      extra: props.extra_fee_es + "€",
      date: props.scheduled_date_es,
      url: props.url_es,
    },
    {
      region: "amazon.fr",
      id: props.asin_fr,
      price: Number(props.price_fr) + Number(props.extra_fee_fr),
      _price: props.price_fr + "€",
      extra: props.extra_fee_fr + "€",
      date: props.scheduled_date_fr,
      url: props.url_fr,
    },
    {
      region: "amazon.it",
      id: props.asin_it,
      price: Number(props.price_it) + Number(props.extra_fee_it),
      _price: props.price_it + "€",
      extra: props.extra_fee_it + "€",
      date: props.scheduled_date_it,
      url: props.url_it,
    },
    {
      region: "amazon.de",
      id: props.asin_de,
      price: Number(props.price_de) + Number(props.extra_fee_de),
      _price: "€" + props.price_de,
      extra: "€" + props.extra_fee_de,
      date: props.scheduled_date_de,
      url: props.url_de,
    },
    {
      region: "yodobashi.com",
      id: props.asin_yodobashi,
      price: Number(props.price_yodobashi) + Number(props.extra_fee_yodobashi),
      _price: props.price_yodobashi + "円",
      extra: props.extra_fee_yodobashi + "円",
      date: props.scheduled_date_yodobashi,
      url: props.url_yodobashi,
    },
  ];

  const sorted_items = useMemo(() => {
    // if (sort.key) {
    items = items.sort((x, y) => {
      // a = a[sort.key];
      // b = b[sort.key];
      let a = x.price;
      let b = y.price;

      if (a === b) {
        return 0;
      }
      if (a > b) {
        return 1;
        // * sort.order
      }
      if (a < b) {
        return -1;
        //  * sort.order;
      }
    });
    // }
    return items;
  }, [expanded]);

  return (
    <Card sx={{ width: "100%", mb: "5px" }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item key="image" xs={5} sm={5} md={5} lg={4} xl={4}>
          <Card
            raised
            sx={{
              maxWidth: 200,
              margin: "5px 0 0 5px",
              padding: "0.1em",
            }}
          >
            <CardMedia
              component="img"
              height="120"
              width="120"
              sx={{
                objectFit: "contain",
                m: "auto",
                // { xs: "5%", sm: "5%", md: "5%", bg: "5%" },
              }}
              image={props.img_path}
              alt="Item image"
            />
          </Card>
        </Grid>
        <Grid item xs={7} sm={7} md={7} lg={8} xl={8}>
          <Typography
            component="div"
            color="text.secondary"
            sx={{
              fontSize: 10,
              pl: 1.5,
              mt: 1.5,
            }}
          >
            <Box>カテゴリー: {props.category}</Box>
          </Typography>
          <Typography
            component="div"
            sx={{
              fontSize: 14,
              fontWeight: 600,
              mt: 1,
              px: 1.5,
            }}
          >
            {props.title_jp}
          </Typography>
        </Grid>
        <CardContent>
          <Typography component="div" variant="body2" color="text.primary">
            {/* {props.sortedCost[2]} */}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ flexGrow: 1, justifyContent: "space-between" }}
        >
          <Box sx={{ fontSize: "12px" }}>ブランド: {props.brand}</Box>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ pt: "0px" }}>
            <Box>
              <ul className="movie_list">
                {sorted_items.map((item, index) =>
                  item.price !== 0 ? (
                    <li>
                      <Divider variant="middle" sx={{ my: "5px" }} />
                      <Container
                        sx={{ display: "flex", justifyContent: "space-around" }}
                      >
                        <Button>
                          <a
                            target="_blank"
                            className="text-inherit no-underline"
                            href={item.url}
                          >
                            {item.region}
                          </a>
                        </Button>
                        <Box sx={{ p: "6px 8px 6px 8px" }}>{item.price}円</Box>
                      </Container>
                      <Container sx={{ fontSize: "12px" }}>
                        (価格約 {item._price} + 関税/配送料 {item.extra})
                      </Container>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        最短配送日 {item.date}
                      </Box>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </Box>
          </CardContent>
        </Collapse>
      </Grid>
    </Card>
  );
}
