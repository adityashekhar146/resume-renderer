import { Box, Chip, Stack, styled } from "@mui/material";
import { ISkillGroup } from "../../types/profile";
import { HeaderUppercase } from "../typography";

interface SkillGroupProps {
  skillGroups: ISkillGroup[];
}

const Chipper = styled(Chip)(theme => ({
  borderRadius: "0.3rem",
  margin: "0.2rem"
}));

const SimpleSkillGroupItem = ({groupName, skills}: ISkillGroup) => (
  <Stack 
    direction="column" 
    spacing={1} 
    border="dashed 0.1rem" 
    borderColor="silver"
    sx={{ padding: "0.1rem" }}
  >
    <HeaderUppercase variant="h6">{groupName}</HeaderUppercase>
    <Box flexWrap="wrap">
      {skills.map((skill, index) => (
        <Chipper
          key={`${groupName}-skill-${index}`}  
          color="secondary" label={skill.title} />
      ))}
    </Box>
  </Stack>
)

const SimpleSkillGroup = ({skillGroups}: SkillGroupProps) => (
  <Stack direction="column" spacing={2}>
    {skillGroups.map((skillGroup, index) => (
      <SimpleSkillGroupItem 
        key={`skill-group-${index}`}
        {...skillGroup}/>
    ))}
  </Stack>
);

export default SimpleSkillGroup;