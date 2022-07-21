import { Card, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./css/styles.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function UserCards() {
  return (
    <div style={{ marginTop: 50, marginBottom: 80 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <h1>20</h1>
              <h5>TOTAL CAC MEMBERS</h5>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h1>20</h1>
              <h5>TOTAL FACULTY MEMBERS</h5>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h1>20</h1>
              <h5>Total EVALUATORS</h5>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
