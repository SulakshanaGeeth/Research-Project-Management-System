import React from "react";
import {
  Collapse,
  Divider,
  List,
  Select,
  Button,
  Form,
  Rate,
  notification,
} from "antd";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../../constant";
import { Input } from "antd";
const { TextArea } = Input;
const { Panel } = Collapse;
const { Option } = Select;

const Actions = () => {
  const [data, setData] = useState([]);
  let [scheme, setScheme] = useState([]);
  const [loading, setLoading] = useState(true);

  const [hide, setHide] = useState(true);
  let [selectedScheme, setSelectedScheme] = useState({});
  const [rate, setRate] = useState("");
  const [comment, setComment] = useState("");

  const [form] = Form.useForm();
  const search = window.location.search;

  useEffect(() => {
    (async () =>
      await axios.get(`${BACKEND_BASE_URL}`).then((res) => {
        setData(res?.data);
        setLoading(false);
      }))();
    (async () =>
      await axios.get(`${BACKEND_BASE_URL}/mark-scheme/`).then((res) => {
        setScheme(res?.data);
        setLoading(false);
      }))();
  }, [search]);

  const genExtra = () => <span className="status">NOT EVALUATED</span>;

  const handleChange = (value) => {
    setHide(false);
    selectedScheme = scheme.filter((res) => res?.schemeName === value);
    setSelectedScheme(selectedScheme);
  };

  const handleRate = (value) => setRate(value);

  const schemeSelection = scheme?.map((res) => res?.schemeName);

  const handleSubmit = async () => {
    await axios
      .post(`${BACKEND_BASE_URL}/evaluation-history/create`, {
        status: "",
        comment,
        rate,
        evaluatedBy: localStorage.getItem("email"),
        submitedBy: "",
        date: new Date(),
        docName: "",
      })
      .then(() =>
        notification.info({
          message: `Succussfully Evaluated.`,
          placement: "top",
        })
      )
      .then(() => form.resetFields())
      .catch((error) =>
        notification.error({
          message: error,
          placement: "top",
        })
      );
  };

  return (
    <>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Document 1" key="1" extra={genExtra()}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <b>Preview of the Document</b>
              <br />{" "}
            </div>
            <div>
              <b>Mark Scheme</b>
              <br /> <br />
              <Select
                defaultValue="Select Scheme "
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
              >
                {schemeSelection.map((value) => (
                  <Option value={value}>{value}</Option>
                ))}
              </Select>{" "}
              <br />
              <br />
              {!hide && (
                <List size="small" bordered>
                  <List.Item>
                    Schema Name: {selectedScheme?.[0]?.schemeName}
                  </List.Item>
                  <List.Item>
                    Description: {selectedScheme?.[0]?.desc}
                  </List.Item>
                  <List.Item>Steps: {selectedScheme?.[0]?.steps}</List.Item>
                  <List.Item>
                    Total Marks: {selectedScheme?.[0]?.totalMarks}
                  </List.Item>
                </List>
              )}
            </div>
          </div>
          <div>
            <Divider orientation="center" plain>
              Evaluation
            </Divider>
            <center>
              <Form onFinish={handleSubmit} form={form}>
                <Form.Item name="Rate">
                  <Rate
                    allowHalf
                    count={10}
                    onChange={handleRate}
                    value={rate}
                  />
                </Form.Item>
                <Form.Item
                  name="Evaluation Description"
                  rules={[{ required: true }, { max: 500 }]}
                >
                  <TextArea
                    maxLength={500}
                    showCount
                    allowClear
                    placeholder={`Evaluate the Document using 
provided Mark Schemes. Type any suggestions or what need to be improved also`}
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="submit-btn"
                    htmlType="submit"
                    type={"primary"}
                  >
                    Evaluate Now
                  </Button>
                </Form.Item>
              </Form>
            </center>
          </div>
        </Panel>
      </Collapse>
    </>
  );
};

export default Actions;
