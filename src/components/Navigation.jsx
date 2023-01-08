import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { list } from './SideDrawer';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AddCardIcon from '@mui/icons-material/AddCard';
import { CssBaseline } from '@mui/material';
import Drawer from '@mui/material/Drawer';

const pages = ['Home', 'About', 'Gallery', 'Leaders', 'ContactUs'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box>
      <CssBaseline />
      <AppBar position='static' sx={{ bgcolor: 'whitesmoke', color: 'black' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'roboto',
                fontWeight: 900,
                letterSpacing: '.3rem',
                color: '#c98d83',
                textDecoration: 'none',
              }}
            >
              KyUMSA
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: {
                  xs: 'flex',
                  md: 'none',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign='center'
                      onClick={() => {
                        window.location.replace(`/#${page.toLowerCase()}`);
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'roboto',
                fontWeight: 900,
                letterSpacing: '.3rem',
                color: '#c98d83',
                textDecoration: 'none',
              }}
            >
              KyUMSA
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  md: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  <Typography
                    textAlign='center'
                    onClick={() => {
                      window.location.replace(`/#${page.toLowerCase()}`);
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Payments'>
                <IconButton onClick={toggleDrawer('right', true)} sx={{ p: 0 }}>
                  <AddCardIcon fontSize='large' />
                </IconButton>
              </Tooltip>
            </Box>

            <React.Fragment key={'right'}>
              <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
              >
                {list('right', toggleDrawer)}
              </Drawer>
            </React.Fragment>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
