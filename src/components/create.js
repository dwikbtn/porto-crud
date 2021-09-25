import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

import {
  Grid,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import "./style.css";

export default function Create() {
  const [portofolio, setUserInput] = useState({
    title: "",
    description: "",
    demoUrl: "",
    imageUrl: "",
    catagory: "",
  });

  function onInputChange(e) {
    const id = e.target.id;
    setUserInput({
      ...portofolio,
      [id]: e.target.value,
    });
  }
  function onSelectChange(e) {
    setUserInput({
      ...portofolio,
      catagory: e.target.value,
    });
  }
  async function onSubmitHandler(e) {
    try {
      const docRef = await addDoc(collection(db, "portofolios"), {
        portofolio,
      });
      await setUserInput({
        title: "",
        description: "",
        demoUrl: "",
        imageUrl: "",
        catagory: "",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{
        bgcolor: "background.default",
      }}
    >
      <Typography variant="h3" component="h1" className="header" gutterBottom>
        Porto CRUD
      </Typography>

      <Grid item>
        <TextField
          id="title"
          label="title"
          value={portofolio.title}
          variant="outlined"
          onChange={onInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id="description"
          label="description"
          value={portofolio.description}
          onChange={onInputChange}
          variant="outlined"
        />{" "}
      </Grid>
      <Grid item>
        <TextField
          id="demoUrl"
          value={portofolio.demoUrl}
          onChange={onInputChange}
          label="Demo Url"
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          id="imageUrl"
          label="ImageUrl"
          variant="outlined"
          value={portofolio.imageUrl}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item>
        <InputLabel id="catagory">Catagory</InputLabel>
        <Select
          labelId="catagory"
          id="catagory"
          value={portofolio.catagory}
          onChange={onSelectChange}
          label="catagory"
        >
          <MenuItem value="front-end">front-end</MenuItem>
          <MenuItem value={"back-end"}>back-end</MenuItem>
          <MenuItem value={"others"}>others</MenuItem>
        </Select>
      </Grid>
      <Button type="submit" onClick={onSubmitHandler} color="primary">
        Submit
      </Button>
    </Grid>
  );
}
