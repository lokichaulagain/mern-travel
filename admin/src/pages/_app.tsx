import type { AppProps } from "next/app";
import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Grid } from "@mui/material";
import LeftAppBar from "../components/LeftBar";
import Topbar from "../components/Topbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AncientHimalayanContextProvider } from "../../context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MiscellaneousContextProvider } from "../../context/MiscellaneousContext";
import { CmsContextProvider } from "../../context/CmsContext";
import { TeamContextProvider } from "../../context/TeamContext";
import { OurServicesContextProvider } from "../../context/OurServicesContext";
import { HomeContextProvider } from "../../context/HomeContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  const router = useRouter();
  const location = router.pathname.split("/")[1];

  return (
    <>
      <AncientHimalayanContextProvider>
        <MiscellaneousContextProvider>
          <CmsContextProvider>
            <TeamContextProvider>
              <OurServicesContextProvider>
                <HomeContextProvider>
                  <Box
                    className="customBg"
                    style={{ height: "100vh" }}>
                    <>
                      {location === "login" || location === "register" ? (
                        <Grid container>
                          <Component {...pageProps} />
                        </Grid>
                      ) : (
                        <>
                          <Topbar />
                          <Grid container>
                            <Grid
                              item
                              xs={3}
                              lg={2}
                              className="customLeftBar">
                              <LeftAppBar />
                            </Grid>

                            {/* Right side */}
                            <Grid
                              item
                              xs={9}
                              lg={10}
                              p={5}
                              className="right_side_bg">
                              <Component {...pageProps} />
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </>
                  </Box>
                </HomeContextProvider>
              </OurServicesContextProvider>
            </TeamContextProvider>
          </CmsContextProvider>
        </MiscellaneousContextProvider>
      </AncientHimalayanContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default MyApp;
