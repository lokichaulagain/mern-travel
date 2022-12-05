import type { AppProps } from "next/app";
import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
import LeftAppBar from "../components/LeftBar";
import Topbar from "../components/Topbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MiscellaneousContextProvider } from "../../context/MiscellaneousContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  const router = useRouter();
  const location = router.pathname.split("/")[2];

  return (
    <>
      <MiscellaneousContextProvider>
        <div className="customBg h100">
          <>
            {location === "signin" || location === "signup" ? (
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
        </div>
      </MiscellaneousContextProvider>
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
