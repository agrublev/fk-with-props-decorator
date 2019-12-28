import React from "react";
import { mapProps } from "recompose";

const withStyleProps = () => {
  return function withComponent(Component) {
    let CompName = Component.name;
    let NewCopm = mapProps(oldProps => {
      let newProps = { ...oldProps };
      console.log("OLDIES", oldProps);
      if (oldProps.fkIntent === "success") {
        newProps["color"] = "green";
        delete newProps.fkIntent;
      }
      if (oldProps.fkFill) {
        newProps["block"] = true;
        delete newProps.fkFill;
      }
      if (oldProps.className && newProps.className) {
        newProps = {
          ...newProps,
          ...{ className: oldProps.className + " " + newProps.className }
        };
      }

      return newProps;
    })(Component);
    NewCopm.displayName = CompName;
    return NewCopm;
  };
};
export default withStyleProps;
