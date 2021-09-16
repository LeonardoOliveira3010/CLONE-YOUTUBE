import React from "react";
import Home from "./components/Home/Home";
import { ThemeProvider, createTheme} from '@material-ui/core';



function App() {
// Criando a variavel tema referente ao estilo
  const theme = createTheme({
    palette: {
        primary: {
        main: '#f44336'
        },
        secondary: {
        main: '#3f51b5'
        }
    }
})

  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home></Home>
      </ThemeProvider>
      
    </>
  );
}

export default App;
