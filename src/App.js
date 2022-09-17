// import { Settings } from "@mui/icons-material";
import { Box, Button, Stack, styled } from "@mui/material";
import Feeds from "./components/Feeds";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  // emotins and styles components & can use theme in custom button
  // const BlueButton = styled(Button)(({ theme }) => ({
  //   backgroundColor: theme.palette.secondary.light,
  //   color: "white",
  //   margin: "5%",
  //   "&:hover": {
  //     backgroundColor: "blue",
  //     color: "black",
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //     color: "white",
  //   },
  // }));

  // return (
  //   <div className="App">
  //     {/* ==== normal ---------------------------------*/}
  //     <Button
  //       variant="contained"
  //       startIcon={<Settings />}
  //       color="secondary"
  //       size="small"
  //     >
  //       button
  //     </Button>

  //     <Button
  //       variant="contained"
  //       startIcon={<Settings />}
  //       color="myTheme"
  //       size="small"
  //     >
  //       button
  //     </Button>

  //     {/* inline CSS ----------------------------------- */}
  //     <Button
  //       disabled
  //       variant="contained"
  //       startIcon={<Settings />}
  //       sx={{
  //         backgroundColor: "red",
  //         color: "white",
  //         margin: "5%",
  //         "&:hover": {
  //           backgroundColor: "blue",
  //           color: "black",
  //         },
  //         "&:disabled": {
  //           backgroundColor: "gray",
  //           color: "white",
  //         },
  //       }}
  //     >
  //       button
  //     </Button>

  //     {/* calling const component ---------------------- */}
  //     <BlueButton>Button</BlueButton>
  //   </div>
  // );

  return (
    <>
      <Box>
        <NavBar></NavBar>
        <Stack direction="row" spacing={0} justifyContent="space-between"> 
          <SideBar></SideBar>
          <Feeds></Feeds>
          <RightBar></RightBar>
        </Stack>
      </Box>
    </>
  );
}

export default App;
