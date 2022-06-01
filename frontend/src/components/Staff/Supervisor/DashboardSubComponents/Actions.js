import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Actions = () => {
  const genExtra = () => <span className="status">EVALUATED</span>;
  return (
    <>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Document 1" key="1" extra={genExtra()}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              Preview of the Document
              <br />{" "}
              <iframe
                src={"research?.attachment"}
                width="500"
                height="480"
                allow="autoplay"
              ></iframe>
            </div>
            <div>MarkScheme</div>
          </div>
          <div>Evalution Creteria</div>
        </Panel>
        <Panel header="Document 2" key="2">
          <span>{text}</span>
        </Panel>
        <Panel header="Document 3" key="3">
          <span>{text}</span>
        </Panel>
      </Collapse>
    </>
  );
};

export default Actions;
