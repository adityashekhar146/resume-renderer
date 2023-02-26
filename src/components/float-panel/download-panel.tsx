import { Download, Home, Share } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"
import { Link } from "react-router-dom";
import FloatPanel from "./float-panel"

const DownloadPanel = () => {

  return (
    <FloatPanel elevation={6}>
      <Grid container spacing={1}>
        <Grid item>
          <IconButton component={Link} to="/home">
            <Home fontSize="medium" color="error" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Download fontSize="medium" color="primary" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Share fontSize="medium" color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </FloatPanel>
  )
};

export default DownloadPanel;