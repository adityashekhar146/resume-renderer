import { Typography, TypographyProps } from "@mui/material";

const HeaderUppercase = (props: TypographyProps) => (
  <Typography variant="h4" sx={{ textTransform: "uppercase" }} {...props} />
);

export default HeaderUppercase;