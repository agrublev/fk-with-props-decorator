import React from "react";
import { render } from "react-dom";
import { ButtonToolbar } from "rsuite";

import Button from "./components/FkButton";
import "rsuite/dist/styles/rsuite-default.css"; // or ''
import "./style.css";

render(
  <div className="wrap">
    <ButtonToolbar>
      <Button appearance="default" active fkFill>
        Default
      </Button>
      <Button appearance="primary" active>
        Primary
      </Button>
      <Button appearance="link" active>
        Link
      </Button>
      <Button appearance="subtle" active>
        Subtle
      </Button>
      <Button appearance="ghost" active>
        Ghost
      </Button>
    </ButtonToolbar>
    <Button className={"old-name"}>WHOA</Button>
    <Button fkIntent={"success"} fkFill className={"old-name"}>
      WHOA
    </Button>
  </div>,
  document.getElementById("root")
);
