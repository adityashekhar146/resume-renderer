import { Box, Button, Container, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAdiResume } from "../../apis/resume";
import useResumeStore from "../../store/resume-store";
import HomeBanner from "./components/home-banner";
import SampleResumeTile from "./components/sample-resume-tile";

const HomePage = () => {
  const resumeStore = useResumeStore();
  const navigate = useNavigate();

  const onSampleLoad = () => {
    resumeStore.initialize(getAdiResume());
    navigate("/cv/basic");
  };

  return (
    <Stack direction="column">
      <HomeBanner />
      <Container maxWidth="lg">
        <Box justifyContent="center">
          <Button onClick={onSampleLoad} variant="text">
            <SampleResumeTile profile={getAdiResume()} />
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};

export default HomePage;