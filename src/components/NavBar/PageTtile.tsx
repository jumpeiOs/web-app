import Typography from "@mui/material/Typography";

export default function PageTitle() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      MUI
    </Typography>
  );
}
