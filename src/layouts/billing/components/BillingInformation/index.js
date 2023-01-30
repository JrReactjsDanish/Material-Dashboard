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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";
import { useState } from "react";

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

  const [userInfo, setUserInfo] = useState(data);

  const deleteUserInfo = (id, searchTodo) => {
    console.log("id", id);
    console.log("Search todo", searchTodo);

    console.log("Delete");
    var deleteuser = searchTodo.filter((item) => item.id !== id);
    console.log("deleteuser", deleteuser);
    setUserInfo(deleteuser);
    console.log("User Info Deleted");
  };

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill userInfo={userInfo} deleteUserInfo={deleteUserInfo} />

          {/* <Bill
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
          <Bill
            name="lucas harper"
            company="stone tech zone"
            email="lucas@stone-tech.com"
            vat="FRB1235476"
          />
          <Bill
            name="ethan james"
            company="fiber notion"
            email="ethan@fiber.com"
            vat="FRB1235476"
            noGutter
          /> */}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
