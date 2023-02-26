import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { getMonthYear } from "../../helpers/date-helper";
import { IEducation } from "../../types/profile";
import { HeaderUppercase } from "../typography";

interface EducationProps {
  education: IEducation[];
}

const SimpleEducation = ({education}: EducationProps) => {

  return (
    <Stack direction="column" marginY="2rem" paddingY="1rem">
      <HeaderUppercase>Education</HeaderUppercase>
      {education.map((item, index) => (
        <Box key={`education-${index}`}>
          <Typography variant="h6">{item.degree}</Typography>
          <HeaderUppercase variant="h6">{item.institute}</HeaderUppercase>
          <Stack direction="row" spacing={1}>
            <Typography variant="caption" color="primary">{item.score}</Typography>
            <Typography variant="caption">{`From ${getMonthYear(item.startDate)} to ${getMonthYear(item.endDate || new Date())}`}</Typography>
          </Stack>
        </Box>
      ))}
    </Stack>
  )
}

export default SimpleEducation;