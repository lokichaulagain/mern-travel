import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";

export default function CardSmall() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className="customCard"
      p={2}
      style={{ width: "400px" }}>
      <Grid item>
        <Avatar style={{ backgroundColor: "#0795A2" }}>
          <AirportShuttleOutlinedIcon />
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="h6">Processing</Typography>
        <Typography variant="h4">14</Typography>
      </Grid>
    </Grid>
  );
}
