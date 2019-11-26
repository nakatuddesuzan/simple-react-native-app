import React, { Component } from "react";
import { FlatList, Text } from "react-native";

class EventList extends Component {
  s;
  render() {
    return (
      <FlatList
        data={[{ name: "a" }, { name: "b" }]}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    );
  }
}

export default EventList;
