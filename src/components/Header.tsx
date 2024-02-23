import {Typography,Toolbar,Box,AppBar} from '@mui/material'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header