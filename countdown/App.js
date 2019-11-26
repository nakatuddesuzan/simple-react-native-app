import React from "react";
import EventList from "./EventList";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "warning: componentWillMount is deprecated",
  "warning: componentWillReceiveProps is deprecated"

])

export default function App() {
  return <EventList />;
}
