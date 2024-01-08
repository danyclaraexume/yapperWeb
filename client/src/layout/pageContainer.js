import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { Container, Stack, Switch, MenuItem, MenuList } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const PageContainer = ({ children }) => {

   // state to manage the dark mode
   const [toggleDarkMode, setToggleDarkMode] = useState(true);

   // function to toggle the dark mode as true or false
   const toggleDarkTheme = () => {
     setToggleDarkMode(!toggleDarkMode);
   };

   // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: toggleDarkMode? '#1A2027' : '#F5FFFA',
  //   textAlign: 'center',
  //   color: toggleDarkMode? '#fff' : '#1A2027',
  // }));


  return (
    <ThemeProvider theme={darkTheme}>
    <Container maxWidth={false}>
     
      <CssBaseline />
      <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 2 }}
              margin={{md: 1}}
      >
        <Header/>
        <MenuList className='navbar-List' style={{display: "inline-flex"}}>
          <MenuItem>
            <img src={toggleDarkMode?"./icons/bright.png":"./icons/brightness.svg"} alt="Brightness" style={{width:"25px",height:"25px", marginTop:"5px", marginLeft: "5px"}}/>
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
          </MenuItem>
          <MenuItem>
            <img src="./icons/globe.png" alt="Region icon" style={{width:"20px",height:"20px", margin:"5px 5px 0px 5px"}}/>
          </MenuItem>
          <MenuItem>
            <img src="./icons/setting.png" alt="Setting icon" style={{width:"22px",height:"20px", margin:"5px 5px 0px 5px"}}/>
          </MenuItem>
        </MenuList>
      </Stack>
      <hr/>
      <div>
        {children}
      </div>
      <Footer />
    </Container>
    </ThemeProvider>
  );
}

export default PageContainer;