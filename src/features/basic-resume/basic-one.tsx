import { Divider, Grid, Paper, Stack } from "@mui/material"
import { useTheme } from "@mui/material";
import SimpleEducation from "../../components/education/simple-education";
import { SimpleExperience }from "../../components/experience";
import { SimpleLanguages } from "../../components/languages";
import { SimplePerson } from "../../components/person";
import { SimpleSkillGroup } from "../../components/skill-group";
import { SimpleSummary } from "../../components/summary";
import useResumeStore from "../../store/resume-store";

const BasicOne = () => {
  const theme = useTheme();
  const profile = useResumeStore(state => state.profile);
  const {personal, contactInfo, experience, education, summary, skillGroups, languages} = profile;

  return (
    <Paper elevation={6} sx={{margin: "1rem", backgroundColor: theme.palette.common.white, px: "2rem", py: "4rem", minHeight: "100rem", borderRadius: 0 }}>
      <Grid container spacing={2}>
        <SimplePerson person={personal} contactInfo={contactInfo} />
      </Grid>
      <Divider sx={{ mb: "1rem" }} />
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Stack direction="column" spacing={2}>
            <SimpleSummary summary={summary} />
            <SimpleExperience experience={experience} />
          </Stack>          
        </Grid>
        <Grid item md={4}>
          <Stack direction="column" spacing={2}>
            <SimpleSkillGroup skillGroups={skillGroups} />
            <SimpleLanguages languages={languages} />
            <SimpleEducation education={education} />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BasicOne;