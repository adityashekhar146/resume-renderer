import { Email, LinkedIn, LocationOn, Phone } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Stack, Typography, useTheme } from "@mui/material"
import { IContact, IPerson } from "../../types/profile"

interface SimplePersonProps {
  person: IPerson;
  contactInfo: IContact;
}

const SimplePerson = ({ person, contactInfo }:  SimplePersonProps) => {
  const theme = useTheme();
  const { firstName, lastName } = person;
  const { email, phone, city, linkedin, picture } = contactInfo;

  return (
    <>
      <Grid container flexGrow={1}>
        <Grid item container xs={6} md={8} lg={9} mx="1rem">
          <Grid item xs={12}>
            <Typography variant="h2" sx={{fontFamily: theme.typography.fontFamily}}>
              {firstName} {lastName}
            </Typography>
          </Grid>
          <Grid container item xs={12} alignItems="center">
            <Stack direction="row" spacing={3} alignItems="center">
              <Stack direction="row" spacing={1}>
                <Email fontSize="small" />
                <Typography variant="body1">{email}</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Phone fontSize="small" />
                <Typography variant="body1">{phone}</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LocationOn fontSize="small" color="primary" />
                <Typography variant="body1">{city}</Typography>
              </Stack>
              <Stack spacing={1}>
                <IconButton href={linkedin}>
                  <LinkedIn fontSize="medium" color="primary" />
                </IconButton>
              </Stack>
            </Stack>        
          </Grid>
        </Grid>
        <Grid item xs={6} md={4} lg={2} container justifyContent="center">
          <Avatar src={picture} sx={{ height: 120, width: 120, marginBottom: "1rem" }} />
        </Grid>
      </Grid>      
      
    </>
  )
};

export default SimplePerson;
