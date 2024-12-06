import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";

export function SettingsScreen({ navigation }) {
  return (
    <Container>
      <Typography variant="h1" className="mb-4">
        Settings
      </Typography>
      
      <Typography className="mb-4">
        Manage your app settings here
      </Typography>
      
      <Button 
        text="Go Back"
        onTap={() => navigation.goBack()}
      />
    </Container>
  );
}