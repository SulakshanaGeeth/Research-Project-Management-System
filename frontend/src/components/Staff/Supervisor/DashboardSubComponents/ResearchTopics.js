import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Empty,
  Modal,
  notification,
  Spin,
  Switch,
  Tooltip,
} from "antd";
import { CloseCircleFilled, SafetyCertificateFilled } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";

function ResearchTopics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reject, setReject] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    (async () =>
      await axios.get("/research-topic/").then((res) => {
        setData(res?.data.filter((el) => el?.status === "PENDING"));
        setLoading(false);
      }))();
  }, []);

  const markType = async (id, type) => {
    const acceptOrRejectBy = localStorage.getItem("username");
    let status = "";
    if (type === "accept") {
      status = "ACCEPTED";
    } else {
      status = "REJECTED";
    }
    await axios
      .put(`/research-topic/acceptOrReject/${id}`, {
        status,
      })
      .then(() => {
        if (type === "accept") {
          notification.info({
            message: `Notification`,
            description: "Accepted 😘",
            placement: "top",
          });
        } else {
          notification.error({
            message: `Notification`,
            description: "Rejected 😢",
            placement: "top",
          });
        }
      });
    await axios
      .get("/research-topic")
      .then((res) => {
        setData(res?.data.filter((el) => el?.status === "PENDING"));
        setVisible(false);
        setReject(false);
      })
      .catch((error) => alert(error));
  };

  const showModal = (id, type) => {
    if (type === "accept") {
      setVisible(true);
      setId(id);
    } else setReject(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setReject(false);
  };

  const handleToggle = async (toggle) => {
    setLoading(true);
    if (toggle)
      await axios
        .get("/research-topic")
        .then((res) => {
          setData(res?.data.filter((el) => el?.status !== "PENDING"));
          setLoading(false);
        })
        .catch((error) => alert(error));
    else
      await axios
        .get("/research-topic")
        .then((res) => {
          setData(res?.data.filter((el) => el?.status === "PENDING"));
          setLoading(false);
        })
        .catch((error) => alert(error));
  };

  return (
    <>
      <div style={{ float: "right" }}>
        <i>Show My History</i> <Switch onChange={handleToggle} />
      </div>
      <br />
      <br />
      {loading ? (
        <center>
          <Spin size="large" style={{ marginTop: "200px" }} />
        </center>
      ) : (
        <>
          {data?.length === 0 ? (
            <Empty />
          ) : (
            <center>
              {data?.map((value) => (
                <div style={{ display: "inline-block" }} key={value?._id}>
                  <Card
                    title={
                      <>
                        <Tooltip
                          title={
                            value?.topicName?.length > 38 && value?.topicName
                          }
                          color="red"
                        >
                          {value?.topicName?.length > 25
                            ? `${value?.topicName.substring(0, 25)}...`
                            : value?.topicName}{" "}
                        </Tooltip>
                        <span style={{ float: "right" }} className="status">
                          {value?.status}
                        </span>
                      </>
                    }
                    bordered
                    style={{ width: 300 }}
                    size="small"
                    actions={[
                      <>
                        {value?.status === "PENDING" && (
                          <div onClick={() => showModal(value?._id, "accept")}>
                            <SafetyCertificateFilled
                              style={{ color: "green" }}
                            />
                            <br />
                            Accept
                          </div>
                        )}
                      </>,
                      <>
                        {value?.status === "PENDING" && (
                          <div onClick={() => showModal(value?._id, "reject")}>
                            <CloseCircleFilled style={{ color: "red" }} />
                            <br />
                            Reject
                          </div>
                        )}
                      </>,
                    ]}
                  >
                    <table style={{ width: "100%" }}>
                      <tr>
                        <td>Category</td>
                        <td style={{ textAlign: "center" }}>
                          {value?.topicCat}
                        </td>
                      </tr>
                      <tr>
                        <td>Faculty</td>
                        <td style={{ textAlign: "center" }}>
                          {value?.faculty}
                        </td>
                      </tr>
                      <tr>
                        <td>Members</td>
                        <td style={{ textAlign: "center" }}>
                          {value?.members}
                        </td>
                      </tr>
                      <tr>
                        <td>Posted</td>
                        <td style={{ textAlign: "center" }}>
                          {moment(value?.date).format("DD-MMMM-YYYY")}
                        </td>
                      </tr>
                      <tr>
                        <td>By</td>
                        <td style={{ textAlign: "center", color: "orange" }}>
                          {value?.userEmail}
                        </td>
                      </tr>
                    </table>
                  </Card>
                </div>
              ))}
              <Modal
                visible={visible ? visible : reject}
                title={
                  visible
                    ? "Are you sure to accept ?"
                    : "Are you sure to reject ?"
                }
                onCancel={handleCancel}
                width={300}
                footer={false}
              >
                <center>
                  {visible ? (
                    <Button
                      type="primary"
                      htmlType="submit"
                      color="green"
                      onClick={() => markType(id, "accept")}
                    >
                      Accept
                    </Button>
                  ) : (
                    <Button
                      type="primary"
                      htmlType="submit"
                      color="red"
                      onClick={() => markType(id, "reject")}
                    >
                      Reject
                    </Button>
                  )}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button htmlType="button" onClick={handleCancel}>
                    Return
                  </Button>
                </center>
              </Modal>
            </center>
          )}
        </>
      )}
    </>
  );
}

export default ResearchTopics;
