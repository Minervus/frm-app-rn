import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Typography } from "../ui/Typography";

export function HomeScreen({ navigation }) {
  return (
    <Container>
      <Typography variant="h1" className="mb-4">
        Welcome to My CrAPP
      </Typography>
      
      <Button 
        text="View Profile" 
        onTap={() => navigation.navigate("Profile")}
        className="mb-2"
      />
      
      <Button 
        text="View Settings"
        onTap={() => navigation.navigate("Settings")}
      />
    </Container>
  );
}