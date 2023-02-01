import React, { useState } from "react";
import { Button, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Card from "@mui/material/Card";
import { useDropzone } from "react-dropzone";
import "./styles.scss";
import MDButton from "components/MDButton";
import axios from "axios";

const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Styles
  const thumbsContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  const text = {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    padding: "50px",
    cursor: "pointer",
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <Box style={thumb} key={file.name}>
      <Box style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </Box>
    </Box>
  ));

  console.log("imageFile", files);

  const postUploads = () => {
    console.log("inside");

    var imageData = new FormData();

    imageData.append("file", files[0]);

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlciI6eyJpZCI6MiwiZmlyc3ROYW1lIjoiTklrdW5qIiwibGFzdE5hbWUiOiJWZWthcml5YSIsInVzZXJQcm9maWxlUGljdHVyZSI6Imh0dHA6Ly9va3Rpb24tZGV2LnMzLmFtYXpvbmF3cy5jb20vcHVibGljX2Fzc2V0LzI5ZmEwNDZjLTFjNzUtNGM4Zi1hZjNhLWM2ZjI5OGNhYTczZS5wbmciLCJlbWFpbCI6Im5pa3Vuai5qbmV4dEBnbWFpbC5jb20iLCJzb2NrZXRJZCI6IiIsInBob25lTnVtYmVyIjoiMTIzNDU2Nzg5MCIsImFwcFRva2VuIjoiOGRkMjhhNTYtMzk2NS00OGM3LWIzYWEtOWI1YzY1ZmVjY2U5Iiwid2ViQXBwVG9rZW4iOm51bGwsInVzZXJTdHJpcGVJZCI6ImN1c19NR2NkeHprRFBHVU5VNyIsInBhc3N3b3JkIjoiJDJhJDEwJGIuSXdqTGVBN0FJTkltalpuSDRqMWV0MGdQb3MxZEZrSkV5Wk9LSXJJOGN4c1BBbEswT1llIiwib3RwQ29kZSI6MCwiY3VycmVudE9yZ2FuaXNhdGlvbiI6MiwiY291bnRyeUlkIjozLCJvdHBDb2RlRXhwaXJlVGltZSI6bnVsbCwic3RhdHVzIjoiYWN0aXZlIiwiZG9iIjoiMjAwMy0wNy0wNVQwMDowMDowMC4wMDBaIiwiaXNBbm9ueW1vdXNDb250cmlidXRpb24iOnRydWUsInVzZXJUeXBlIjoibm9ybWFsIiwiY3JlYXRlZEF0IjoiMjAyMS0wNy0wMlQwNDoxMToyMi4zMDZaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0yM1QxMjowNjoyMi40MzdaIn0sImlhdCI6MTY3NTIyNTQ5MCwiZXhwIjoxNjc1MjM2MjkwfQ.JrcK3_O78Y8UYowmv85caFRtyT9RdCeHwn5ISfhmqdE";

    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };

    axios({
      method: "post",
      url: "https://ok2.staging.oktion.com.au/api/v1/private/media/upload",

      data: imageData,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => console.log("res", res?.data?.msg))
      .catch((err) => console.log(err?.response?.data?.msg));
  };

  function handleChange(e) {
    console.log(e.target.files);
    setFiles(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <DashboardLayout>
      <Card>
        <Box sx={{ margin: "0 auto" }}>
          <Typography variant="h4" m={2}>
            Image Upload
          </Typography>
        </Box>
        <Box className="container" sx={thumbsContainer}>
          <Box {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} onChange={(e) => handleChange(e)} />
            <Typography style={text}>Drag 'n' drop or click to select files</Typography>
          </Box>
          <Box mt={3} mx={0}>
            <Typography variant="h6">Files</Typography>
            {files === "" ? "No files here" : <ul>{thumbs}</ul>}
          </Box>
        </Box>
        <Box sx={{ margin: "0 auto", marginBottom: "10px", marginTop: "5px" }}>
          <MDButton variant="gradient" color="dark" onClick={() => postUploads()}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;upload
          </MDButton>
        </Box>
      </Card>
    </DashboardLayout>
  );
};

export default ImageUpload;
