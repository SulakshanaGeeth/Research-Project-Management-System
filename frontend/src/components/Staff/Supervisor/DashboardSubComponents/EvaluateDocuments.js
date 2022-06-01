import React from "react";
import { Tabs } from "antd";
import { QuestionCircleFilled, ToolFilled } from "@ant-design/icons";
import "../styles/TabContainer.css";
import Actions from "./Actions";
import EvaluationHistory from "./EvaluationHistory";
const { TabPane } = Tabs;

const EvaluateDocuments = () => (
  <div className="card-container">
    <Tabs type="card">
      <TabPane
        tab={
          <>
            <ToolFilled /> Actions
          </>
        }
        key="1"
      >
        <Actions />
      </TabPane>
      <TabPane
        tab={
          <>
            <QuestionCircleFilled /> Evaluation History
          </>
        }
        key="2"
      >
        <EvaluationHistory />
      </TabPane>
    </Tabs>
  </div>
);

export default EvaluateDocuments;
