import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopNavbar from "views/global/TopNavbar";
import SideNavbar from "views/global/SideNavbar";
// import Dashboard from "views/dashboard";
// import Team from "views/team";
// import Invoices from "views/invoices";
// import Contacts from "views/contacts";
// import BarChart from "views/bar-chart";
// import LineChart from "views/line-chart";
// import PieChart from "views/pie-chart";
// import Faq from "views/faq";
// import Geography from "views/geography";
// import Form from "views/form";
// import Calendar from "views/calendar"


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideNavbar />
          <main className="content">
            <TopNavbar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/bar-chart" element={<BarChart />} /> */}
              {/* <Route path="/line-chart" element={<LineChart />} /> */}
              {/* <Route path="/pie-chart" element={<PieChart />} /> */}
              {/* <Route path="/faq" element={<Faq />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
