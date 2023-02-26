import { Box, Divider, Typography } from "@mui/material"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError() as any;
  return (
    <Box alignItems="center" justifyContent="center">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body1">Aww Snap! Something unexpected happened with the page you are looking for.</Typography>
      <Divider sx={{ my: "3rem" }} />
      <Typography variant="body2">{error.statusText}</Typography>
    </Box>
  )
};

export default ErrorPage;
