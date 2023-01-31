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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
import { useEffect, useState } from "react";

function Bill({ userInfo, deleteUserInfo, setEditBillingInfo, dialogForm }) {
  const [searchInfo, setSearchInfo] = useState(userInfo);
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  useEffect(() => {
    userInfo && setSearchInfo(userInfo);
  }, [userInfo]);

  // To update the todo with id
  const updatedBillingInfo = ({ id }) => {
    console.log("inside updated TODO", id);

    let findInfo = userInfo.find((info) => info.id === id);

    console.log("findTodo", findInfo);
    setEditBillingInfo(findInfo);
  };

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      flexDirection="column"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={searchInfo.noGutter ? 0 : 1}
      mt={2}
    >
      {searchInfo?.map((item, index) => {
        return (
          <MDBox width="100%" display="flex" flexDirection="column" key={index} p={2}>
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
              mb={2}
            >
              <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                {item?.name}
              </MDTypography>

              <MDBox
                display="flex"
                alignItems="center"
                mt={{ xs: 2, sm: 0 }}
                ml={{ xs: -1.5, sm: 0 }}
              >
                <MDBox mr={1}>
                  <MDButton
                    variant="text"
                    color="error"
                    onClick={() => deleteUserInfo(item?.id, searchInfo)}
                  >
                    <Icon>delete</Icon>&nbsp;delete
                  </MDButton>
                </MDBox>
                <MDButton
                  variant="text"
                  color={darkMode ? "white" : "dark"}
                  onClick={() => updatedBillingInfo()}
                >
                  <Icon>edit</Icon>&nbsp;edit
                </MDButton>
              </MDBox>
            </MDBox>
            <MDBox mb={1} lineHeight={0}>
              <MDTypography variant="caption" color="text">
                Company Name:&nbsp;&nbsp;&nbsp;
                <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                  {item?.company}
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDBox mb={1} lineHeight={0}>
              <MDTypography variant="caption" color="text">
                Email Address:&nbsp;&nbsp;&nbsp;
                <MDTypography variant="caption" fontWeight="medium">
                  {item?.email}
                </MDTypography>
              </MDTypography>
            </MDBox>
            <MDTypography variant="caption" color="text">
              VAT Number:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="caption" fontWeight="medium">
                {item?.vat}
              </MDTypography>
            </MDTypography>
          </MDBox>
        );
      })}
    </MDBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
