import * as React from 'react'
import { styled } from '@mui/material/styles'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import ClearIcon from '@mui/icons-material/Clear'
import {
  Dialog,
  Button,
  DialogContent,
  DialogActions,
  Typography,
  Badge,
  Grid,
  Box,
} from '@mui/material'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export default function NotificationDialogBox() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Badge badgeContent={4} color="error">
        <NotificationsActiveIcon className="cp" onClick={handleClickOpen} />
      </Badge>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent className="customCard" dividers>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Your Latest Notifications </Typography>{' '}
            </Grid>
            <Grid item>
              <ClearIcon className="cp" onClick={handleClose} />{' '}
            </Grid>
          </Grid>
          <Typography>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          </Typography>

          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>

            <Button autoFocus onClick={handleClose}>
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </BootstrapDialog>
    </Box>
  )
}
