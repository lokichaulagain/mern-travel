import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "../../styles/modules/Topbar.module.css";
import { Dialog, Button, DialogContent, DialogActions, Typography, Badge, Grid, Box } from "@mui/material";
import { MailContext } from "../../context/MailContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function MailDialogBox() {
  const { mails, isUpdated, fetchAllMails } = React.useContext(MailContext);
  useEffect(() => {
    fetchAllMails();
  }, [isUpdated]);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Badge
        badgeContent={4}
        color="error">
        <MailIcon
          className="cp"
          onClick={handleClickOpen}
        />
      </Badge>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <DialogContent
          style={{ minWidth: "500px" }}
          className="customCard "
          dividers>
          <Grid
            container
            justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h5"
                className="pb-3">
                Your Recent Mails
              </Typography>
            </Grid>
            <Grid item>
              <ClearIcon
                className="cp"
                onClick={handleClose}
              />
            </Grid>
          </Grid>
          {mails &&
            mails.map((mail: any, index: any) => (
              <div
                key={index}
                className={`${styles.each_mail_div} mb-3`}>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="m-0">From : {mail.email}</h6>
                  <span className="small ">{mail.createdAt}</span>
                </div>
                <small className="p-0">{mail.message}</small>
              </div>
            ))}

          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
}
