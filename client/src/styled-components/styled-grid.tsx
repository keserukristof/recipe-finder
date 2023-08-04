import { styled } from '@mui/system';
import { Grid, GridProps } from '@mui/material';

const StyledCenteredGridContainer = styled(Grid)<GridProps>({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
});

export default StyledCenteredGridContainer;