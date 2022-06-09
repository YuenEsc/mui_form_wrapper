import {MenuItem, styled} from "@mui/material";

const SelectItem = styled(MenuItem)(({theme})=>({
  justifyContent: 'space-between',
  padding: '4px 12px',
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.paper,
    "&.Mui-focusVisible": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
    },
    '& svg': {
      display: 'inline-block'
    }
  },
  "&.Mui-selected:hover": {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}))

export default SelectItem;