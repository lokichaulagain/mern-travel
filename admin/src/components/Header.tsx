import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, Typography } from "@mui/material";

const Header = ({ pageTitle }: any) => {
  return (
    <div>
      <Grid
        item
        marginBottom={5}
        xs={6}>
        <Typography
          variant="h4"
          className="customPrimaryTxtColor">
          Gem Plasticrafts
        </Typography>
        <Typography
          variant="h6"
          className="customSecondaryTxtColor">
          <span className="customPrimaryTxtColor">Dashboard / </span>

          <span className="customSecondaryTxtColor">{pageTitle}  </span>
        </Typography>
      </Grid>
    </div>
  );
};

export default Header;
