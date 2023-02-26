import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import { SimpleMarkdown } from "../../../components/typography";
import { IProfile } from "../../../types/profile"

interface SampleResumeTileProps {
  profile: IProfile;
}

const SampleResumeTile = ({profile} : SampleResumeTileProps) => (
  <Stack direction="row">
    <List>
      <ListItem alignItems="center">
        <ListItemAvatar sx={{marginX: "1rem"}}>
          <Avatar src={profile.contactInfo.picture} sx={{width: "5rem", height: "5rem"}} />
        </ListItemAvatar>
        <ListItemText sx={{marginX: "1rem"}}
          primary={
            <Typography variant="h5" color="black">
              {`${profile.personal.firstName} ${profile.personal.lastName}`}
            </Typography>
          }
          secondary="Creator of this platform"
        />
      </ListItem>
    </List>
  </Stack>
);

export default SampleResumeTile;