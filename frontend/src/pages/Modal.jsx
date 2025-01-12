import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button,Typography } from '@mui/material';

const Modal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Επιλογή Επαγγελματία</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Θα θέλατε να αναθέσετε εργασία σε αυτόν τον επαγγελματία;</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Κλείσιμο
        </Button>
        <Button onClick={onClose} color="primary">
          Επιβεβαίωση
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
