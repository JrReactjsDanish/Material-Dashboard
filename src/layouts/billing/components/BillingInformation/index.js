/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Button, Dialog, Icon } from "@mui/material";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import { useState } from "react";

// Dialog box
import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MDDialog from "components/MDDialog";

function BillingInformation() {
  let data = [
    {
      id: 1,
      name: "oliver liam",
      company: "viking burrito",
      email: "oliver@burrito.com",
      vat: "FRB1235476",
      noGutter: false,
    },

    {
      id: 2,
      name: "lucas harper",
      company: "stone tech zone",
      email: "lucas@stone-tech.com",
      vat: "FRB1235476",
      noGutter: false,
    },

    {
      id: 3,
      name: "ethan james",
      company: "fiber notion",
      email: "ethan@fiber.com",
      vat: "FRB1235476",
      noGutter: true,
    },
  ];

  // Adding & updating info
  const [userInfo, setUserInfo] = useState(data);
  const [editBillingInfo, setEditBillingInfo] = useState(null);
  const [myState, setMyState] = useState({
    name: "",
    company: "",
    email: "",
    vat: "",
  });

  //Open and close dialogue box
  const [open, setOpen] = useState(false);

  // Add billing info
  const handleSubmit = (name, company, email, vat) => {
    setUserInfo((oldVal) => [
      ...oldVal,
      {
        id: userInfo.length + 1,
        name: name,
        company: company,
        email: email,
        vat: vat,
      },
    ]);
    setOpen(false);
  };

  //Edit info
  const updateInfo = (id, name, company, email, vat) => {
    setUserInfo(
      userInfo.map((info) => {
        if (info.id === id) {
          info.name = name;
          info.company = company;
          info.email = email;
          info.vat = vat;

          return info;
        } else {
          return info;
        }
      })
    );
    setEditBillingInfo(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (editBillingInfo) {
      updateInfo(editBillingInfo.id, myState?.name, myState?.company, myState?.email, myState?.vat);
    } else {
      handleSubmit(myState?.name, myState?.company, myState?.email, myState?.vat);
    }
    setMyState({
      name: "",
      company: "",
      email: "",
      vat: "",
    });
  };

  // Delete billing info
  const deleteUserInfo = (id, searchTodo) => {
    var deleteuser = searchTodo.filter((item) => item.id !== id);
    setUserInfo(deleteuser);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const storeVal = (e) => {
  //   var { name, value } = e;
  //   setMyState({ ...myState, [name]: value });
  // };

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
        <MDButton variant="gradient" color="dark" onClick={() => handleClickOpen()}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add billing info
        </MDButton>
      </MDBox>
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Bill Information</DialogTitle>
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
              // storeVal("company", e.target.value);
              setMyState({ ...myState, company: e.target.value });
            }}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email Address"
            value={myState?.email}
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => {
              // storeVal("email", e.target.value);
              setMyState({ ...myState, email: e.target.value });
            }}
          />
          <TextField
            margin="dense"
            name="vat"
            label="Enter VAT"
            value={myState?.vat}
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => {
              // storeVal("vat", e.target.value);
              setMyState({ ...myState, vat: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => onSubmit(e)}>Add</Button>
        </DialogActions>
      </Dialog> */}

      {/* COMMON DIALOG COMPONENT */}
      <MDDialog
        open={open}
        myState={myState}
        setOpen={setOpen}
        setMyState={setMyState}
        onSubmit={onSubmit}
        editBillingInfo={editBillingInfo}
      />
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            userInfo={userInfo}
            deleteUserInfo={deleteUserInfo}
            setEditBillingInfo={setEditBillingInfo}
            updateInfo={updateInfo}
            myState={myState}
            setMyState={setMyState}
            onSubmit={onSubmit}
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
