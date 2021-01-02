import { AppRegistry } from "react-native";

import App from "./App";

AppRegistry.registerComponent("react-monorepo", () => App);
AppRegistry.runApplication("react-monorepo", {
  rootTag: document.getElementById("root"),
});
