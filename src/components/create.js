import React, { useState } from "react";
import { app } from "../firebase-config";
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
  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    demoUrl: "",
    imageUrl: "",
    catagory: "",
  });

  function onInputChange(e) {
    const id = e.target.id;
    setUserInput({
      ...userInput,
      [id]: e.target.value,
    });
  }
  function onSelectChange(e) {
    setUserInput({
      ...userInput,
      catagory: e.target.value,
    });
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
          value={userInput.title}
          variant="outlined"
          onChange={onInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id="description"
          label="description"
          value={userInput.description}
          onChange={onInputChange}
          variant="outlined"
        />{" "}
      </Grid>
      <Grid item>
        <TextField
          id="demoUrl"
          value={userInput.demoUrl}
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
          value={userInput.imageUrl}
          onChange={onInputChange}
        />
      </Grid>
      <Grid item>
        <InputLabel id="catagory">Catagory</InputLabel>
        <Select
          labelId="catagory"
          id="catagory"
          value={userInput.catagory}
          onChange={onSelectChange}
          label="catagory"
        >
          <MenuItem value="front-end">front-end</MenuItem>
          <MenuItem value={"back-end"}>back-end</MenuItem>
          <MenuItem value={"others"}>others</MenuItem>
        </Select>
      </Grid>
      <Button type="primary">Submit</Button>
    </Grid>
  );
}
