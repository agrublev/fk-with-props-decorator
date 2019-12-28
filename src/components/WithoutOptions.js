import React from "react";
import {
  withProps,
  mapProps,
  getDisplayName,
  compose,
  setPropTypes,
  renameProps,
  withState,
  withHandlers
} from "recompose";
// @withProps({ className: "awesome" })
//

const withStyleProps = Component => {
  // return function withComponent() {
  // let NewComp = //compose(
  // renameProps({ fkFill: "block" }),
  let NewCopm = mapProps(oldProps => {
    let newProps = { ...oldProps };
    console.log("OLDIES", oldProps);
    if (oldProps.fkIntent === "success") {
      newProps["color"] = "green";
      delete newProps.fkIntent;
      // delete oldProps.fkIntent;
    }
    if (oldProps.fkFill) {
      newProps["block"] = true;
      delete newProps.fkFill;
      // delete oldProps.fkIntent;
    }
    if (oldProps.className) {
      newProps = {
        ...newProps,
        ...{ className: "greatgreat " + oldProps.className }
      };
    }
    // this.displayName = Component.name;
    console.info("Console --- ", Component.name);

    return newProps;
    // return { newProps: newProps, ...newProps };
  })(Component);
  NewCopm.displayName = Component.name;
  return NewCopm;
};
export default withStyleProps;
//
// console.log("NAMEMEE", getDisplayName(Component));

// NewComp.displayName = getDisplayName(Component);
// return NewComp;
// };
// export default BaseComponent =>
//   compose(
//     withState("firstName", "setFirstName", "Jon"),
//     withState("lastName", "setLastName", "Travis"),
//     withState("age", "setAge", 22),
//     withHandlers({
//       handleSubmit: props => e => {
//         e.preventDefault();
//         // submit data somewhere :)
//       }
//     })
//   )(BaseComponent);
