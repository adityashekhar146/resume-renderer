import { Box, Button, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAdiResume } from "../../apis/resume";
import useResumeStore from "../../store/resume-store";
import HomeBanner from "./components/home-banner";

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
      <Box>
        <Button onClick={onSampleLoad}>Check out my resume!</Button>
      </Box>
    </Stack>
  );
};

export default HomePage;