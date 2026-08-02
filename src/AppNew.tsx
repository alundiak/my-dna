import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { MySideNavRoutingNew } from './base-components/MySideNavRoutingNew';
import { MyDNARoutes } from './Routes';

import { Container } from '@mui/material';
import { AppFooter } from './feature-components/AppFooter';
import { AppHeader } from './feature-components/AppHeader';
import './index_new.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027'
  })
}));

export function AppNew() {
  return (
    <Container maxWidth="xl">
      <AppHeader />

      <Grid container spacing={1}>
        <Grid size={2}>
          <MySideNavRoutingNew />
        </Grid>
        <Grid size={10}>
          <MyDNARoutes />
        </Grid>
      </Grid>

      <AppFooter />
    </Container>
  );
}
