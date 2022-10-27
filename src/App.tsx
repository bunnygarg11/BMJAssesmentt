import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "./List";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          BMJ Journals exercise demo : Building a channel page using Open Alex
          API
        </Typography>
        <List />
      </Box>
    </Container>
  );
}
