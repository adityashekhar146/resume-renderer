import { Star, StarBorder } from "@mui/icons-material";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ILanguage } from "../../types/profile";
import { HeaderUppercase } from "../typography";

const SimpleFluency = ({fluency}: ILanguage) => {
  switch (fluency) {
    case "novice": return (
      <>
        <Star color="primary" /><StarBorder color="primary" /><StarBorder color="primary" /><StarBorder color="primary" />
      </>
    )
    case "advanced": return (
      <>
        <Star color="primary" /><Star color="primary" /><StarBorder color="primary" /><StarBorder color="primary" />
      </>
    )
    case "expert": return (
      <>
        <Star color="primary" /><Star color="primary" /><Star color="primary" /><StarBorder color="primary" />
      </>
    )
    case "native": return (
      <>
        <Star color="primary" /><Star color="primary" /><Star color="primary" /><Star color="primary" />
      </>
    )
    default: return <></>
  }
}

const LanguageRenderer = (language: ILanguage) => (
  <Stack direction="row" alignItems="center">
    <Typography variant="body1">{language.name}</Typography>
    <SimpleFluency {...language} />
  </Stack>
)

interface LanguageProps {
  languages: ILanguage[];
}

const SimpleLanguages = ({languages}: LanguageProps) => (
  <Stack direction="column" paddingY="1rem">
    <HeaderUppercase variant="h4">Languages</HeaderUppercase>
    {languages.map((language, index) => (
      <LanguageRenderer key={`language-${index}`} {...language} />
    ))}
  </Stack>
)

export default SimpleLanguages;