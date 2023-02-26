import { Box, List, ListItem, ListItemText, Stack, } from "@mui/material";
import { CommonDivider } from "../common";
import { HeaderUppercase, SimpleMarkdown } from "../typography";

interface SimpleSummaryProps {
  summary: string[];
}

const SimpleSummary = ({ summary }: SimpleSummaryProps) => (
  <Box border="ActiveBorder">
    <Stack direction="column">
        <HeaderUppercase>Summary</HeaderUppercase>
        <CommonDivider />
        <List>
          {summary.map((item, index) => (
            <ListItem key={`summary-${index}`}>
              <ListItemText primary={<SimpleMarkdown children={item} />} />              
            </ListItem>
          ))}
        </List>
    </Stack>
  </Box>
);


export default SimpleSummary;