"use client";
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleOptionsTable({ optionsTable, handleChange }: any) {
  return (
    <ToggleButtonGroup color="primary" value={optionsTable} exclusive onChange={handleChange} aria-label="Platform">
      <ToggleButton value="crypto">crypto</ToggleButton>
      <ToggleButton value="forex">forex</ToggleButton>
      <ToggleButton value="commodity">commodity</ToggleButton>
      <ToggleButton value="index">index</ToggleButton>
    </ToggleButtonGroup>
  );
}
