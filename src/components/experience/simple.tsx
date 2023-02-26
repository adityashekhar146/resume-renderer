import { LocationOn } from "@mui/icons-material";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { getMonthYear } from "../../helpers/date-helper";
import { TenureProps } from "../../types/common";
import { IExperience } from "../../types/profile"
import { CommonDivider } from "../common";
import { HeaderUppercase, SimpleMarkdown } from "../typography";

interface ExperienceProps {
  experience: IExperience[];
}

const SimpleTitle = ({title}: {title: string}) => (
  <Typography variant="h5" sx={{ textTransform: "capitalize" }}>{title}</Typography>
);

const SimpleCompanyName = ({company}: {company: string}) => (
  <Typography variant="h6" sx={{ textTransform: "uppercase" }}>{company}</Typography>
);

const SimpleTenure = ({startDate, endDate, isCurrentJob}: TenureProps) => (
  <Typography variant="caption">
    {isCurrentJob ? 
      `Currently working since ${getMonthYear(startDate)}` : 
      `From ${getMonthYear(startDate)} to ${getMonthYear(endDate || new Date())}`
    }
  </Typography>
);

const SimpleLocation = ({location}: {location: string}) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <LocationOn color="primary" fontSize="small" />
    <Typography variant="caption">{location}</Typography>
  </Stack>
)

const SimpleExperienceItem = ({title, company, startDate, endDate, isCurrentJob, location, responsibilities}: IExperience) => (
  <Stack direction="column" spacing={1}>
    <SimpleTitle title={title} />
    <SimpleCompanyName company={company} />
    <Stack direction="row" spacing={4} alignItems="center">
      <SimpleTenure startDate={startDate} endDate={endDate} isCurrentJob={isCurrentJob} />
      <SimpleLocation location={location} />
    </Stack>
    <List>
      {responsibilities.map((responsibility, index) => (
        <ListItem key={`${title}-${company}-responsibility-${index}`}>
          <SimpleMarkdown 
            key={`${title}-${company}-responsibility-${index}`}
            children={responsibility} />
        </ListItem>
      ))}
    </List>
    <CommonDivider />
  </Stack>
)

const SimpleExperience = ({experience}: ExperienceProps) => {

  return (
    <Box>
      <Stack direction="column">
        <HeaderUppercase>Experience</HeaderUppercase>
        <CommonDivider />
        <Stack direction="column" spacing={1}></Stack>
        {experience.map((item, index) => (
          <SimpleExperienceItem key={`experienceitem-${index}`} {...item} />
        ))}
      </Stack>
    </Box>
  )
}

export default SimpleExperience;