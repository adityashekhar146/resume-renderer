import { Typography, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { MarkdownProps } from "../../types/typography";

const SimpleMarkdown = ({children}: MarkdownProps) => { 
  const theme = useTheme();
  return (
    <ReactMarkdown
      children={children}
      components={{
        h1: "h2",
        p: ({node, ...props}) => (
          <Typography {...props} variant="body1" component="p"
            sx={{ textJustify: "auto" }} />
        ),
        strong: ({node, ...props}) => (
          <Typography 
            {...props}
            variant="body1"
            component="span"
            sx={{ 
              my: "0.2rem",
              color: theme.palette.primary.main,
              fontWeight: theme.typography.h4.fontWeight 
            }}
          />
        )
      }} 
    />
  )
}

export default SimpleMarkdown;