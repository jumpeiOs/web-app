import * as React from "react";
import { styled } from "@mui/material/styles";
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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%" }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item key="image" xs={4} sm={4} md={4} lg={4} xl={4}>
          <CardMedia
            component="img"
            height="100%"
            sx={{
              m: { xs: "10%", sm: "10%", md: "5%", bg: "5%" },
            }}
            image="https://www.galiton.co.jp/shop/item/toys/picture/goods/4501_1.jpg"
            alt="Item image"
          />
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          // sx={{ textAlign: "left", px: "10px" }}
        >
          <Typography
            color="text.secondary"
            sx={{
              mt: 1,
              pl: 3,
            }}
          >
            <Box>VideoGames</Box>
            <Box>任天堂 Nintendo</Box>
            {/* {props.category} */}
            {/* {props.brand} */}
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 600,
              mt: 1,
              pl: 3,
            }}
          >
            Nintendo Switch(有機ELモデル) Joy-Con(L) ネオンブルー/(R)
            ネオンレッド
            {/* {props.title_jp} */}
          </Typography>
        </Grid>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
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
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Grid>
    </Card>
  );
}

//   return (
//     <Card
//       sx={{
//         width: "100%",
//         borderRadius: 2,
//         marginTop: 5,
//       }}
//     >
//       <CardContent>
//         <Grid container sx={{ alignItems: "center" }}>
//           <Grid item key="image" xs={4} sm={4} md={4} lg={4} xl={4}>
//             <CardMedia
//               component="img"
//               // height="194"
//               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPjllb8RKmrEHo2LE0JXBkzToaPuJOhRKxY_0ceylsmfbJBC2lURTq4tfq41IDWiNFRQ&usqp=CAU"
//               // {props.img_path}
//               alt="Item image"
//             />
//           </Grid>
//           <Grid
//             item
//             xs={8}
//             sm={8}
//             md={8}
//             lg={8}
//             xl={8}
//             sx={{ textAlign: "left", px: "10px" }}
//           >
//             <Typography
//               color="text.secondary"
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 pl: 1,
//                 m: 0.5,
//                 mt: -8,
//               }}
//             >
//               <Box>VideoGames</Box>
//               <Box>任天堂 Nintendo</Box>
//               {/* {props.category} */}
//               {/* {props.brand} */}
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: 18,
//                 fontWeight: 540,
//                 mt: 2,
//                 pl: 1,
//               }}
//             >
//               Nintendo Switch(有機ELモデル) Joy-Con(L) ネオンブルー/(R)
//               ネオンレッド
//               {/* {props.title_jp} */}
//             </Typography>
//           </Grid>
//           {/* sx={{
//               justifyContent: "flex-end",
//               mt: 0,
//               pl: 0,
//             }} */}
//           <CardActions disableSpacing>
//             <Box>
//               <Box component="h2">amazon.co.jp</Box>
//               <IconButton aria-label="add to favorites">
//                 <FavoriteIcon />
//               </IconButton>
//               <IconButton aria-label="share">
//                 <ShareIcon />
//               </IconButton>
//               <ExpandMore
//                 expand={expanded}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//               >
//                 <ExpandMoreIcon />
//               </ExpandMore>
//             </Box>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph>Method:</Typography>
//               <Typography paragraph>
//                 Heat 1/2 cup of the broth in a pot until simmering, add saffron
//                 and set aside for 10 minutes.
//               </Typography>
//               <Typography paragraph>
//                 Heat oil in a (14- to 16-inch) paella pan or a large, deep
//                 skillet over medium-high heat. Add chicken, shrimp and chorizo,
//                 and cook, stirring occasionally until lightly browned, 6 to 8
//                 minutes. Transfer shrimp to a large plate and set aside, leaving
//                 chicken and chorizo in the pan. Add pimentón, bay leaves,
//                 garlic, tomatoes, onion, salt and pepper, and cook, stirring
//                 often until thickened and fragrant, about 10 minutes. Add
//                 saffron broth and remaining 4 1/2 cups chicken broth; bring to a
//                 boil.
//               </Typography>
//               <Typography paragraph>
//                 Add rice and stir very gently to distribute. Top with artichokes
//                 and peppers, and cook without stirring, until most of the liquid
//                 is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
//                 reserved shrimp and mussels, tucking them down into the rice,
//                 and cook again without stirring, until mussels have opened and
//                 rice is just tender, 5 to 7 minutes more. (Discard any mussels
//                 that don&apos;t open.)
//               </Typography>
//               <Typography>
//                 Set aside off of the heat to let rest for 10 minutes, and then
//                 serve.
//               </Typography>
//             </CardContent>
//           </Collapse>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }
