import React from "react";
import { Button, Dialog } from "@mui/material";

// Dialog box
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const MDDialog = ({
  onSubmit,
  editBillingInfo,
  setMyState,
  myState,
  open,
  setOpen,
  editOpen,
  setEditOpen,
  onEditSubmit,
}) => {
  console.log("inside");
  console.log("myState", myState);

  const handleClose = () => {
    editBillingInfo ? setEditOpen(false) : setOpen(false);
  };

  return (
    <Dialog open={editBillingInfo ? editOpen : open} onClose={handleClose}>
      <DialogTitle>
        {editBillingInfo ? "Update Your Bill Information" : "Billing Information"}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Enter Name"
          value={myState?.name}
          type="text"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            // storeVal("name", e.target.value);
            setMyState({ ...myState, name: e.target.value });
          }}
        />
        <TextField
          margin="dense"
          name="company"
          label="Enter Company"
          value={myState?.company}
          type="text"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            // storeVal("name", e.target.value);
            setMyState({ ...myState, company: e.target.value });
          }}
        />
        <TextField
          margin="dense"
          name="email"
          label="Enter Email"
          value={myState?.email}
          type="email"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            // storeVal("name", e.target.value);
            setMyState({ ...myState, email: e.target.value });
          }}
        />
        <TextField
          margin="dense"
          name="vat"
          label="Enter Vat"
          value={myState?.vat}
          type="text"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            // storeVal("name", e.target.value);
            setMyState({ ...myState, vat: e.target.value });
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={editBillingInfo ? onEditSubmit : onSubmit}>
          {editBillingInfo ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MDDialog;
