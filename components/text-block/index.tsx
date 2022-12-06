import React from "react";
import LuigiClient from "@luigi-project/client";

export default function TextBlock() {
  React.useEffect(() => {
    LuigiClient.addInitListener((context) =>
      console.log("The context is", context)
    );
  });
  return <h1>Hello World, karna tha bas!!!</h1>;
}
