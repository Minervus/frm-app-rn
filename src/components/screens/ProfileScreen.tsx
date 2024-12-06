import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";

export function ProfileScreen({ navigation }) {
  return (
    <Container>
      <Typography variant="h1" className="mb-4">
        Profile
      </Typography>
      
      <Typography className="mb-4">
        Welcome to your profile page!
      </Typography>
      
      <Button 
        text="Go Back"
        onTap={() => navigation.goBack()}
      />
    </Container>
  );
}