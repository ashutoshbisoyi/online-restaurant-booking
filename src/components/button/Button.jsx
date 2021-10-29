import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RegularButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '0.8em 2em',
  fontWeight: '500',
  borderRadius: 0,
});
export const SmallButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  padding: '0.6em 1.6em',
  fontWeight: '500',
  borderRadius: '4px',
});
