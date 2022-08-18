import { Button, Grid, Typography } from '@material-ui/core/';
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  return (
    <Grid
      container
      className="container pt-3 pb-3"
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography variant="h3">Dio Shopping</Typography>
      <div>
        <Link to="/" style={{ textDecoration: 'none', padding: 0 }}>
          <Button>Home</Button>
        </Link>
        <Link to="/contato" style={{ textDecoration: 'none', padding: 0, margin: '0 60px 0 30px' }}>
          <Button>Contato</Button>
        </Link>

        <Cart />
      </div>
    </Grid>
  );
};

export default Header;
