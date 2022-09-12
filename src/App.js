import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { deepOrange, purple, teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4dabf5",
    },
    primary: deepOrange,
    secondary: purple,
  },
  typography: {
    fontFamily: "roboto",
    fontWeightLeft: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightLight: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
