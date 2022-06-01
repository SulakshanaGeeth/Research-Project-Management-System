import React from "react";
import { Table, Tag, Space } from "antd";
const columns = [
  {
    title: "Col 1",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Col 2",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Col 3",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Col 4",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";

          if (tag === "loser") {
            color = "volcano";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Col 5",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const EvaluationHistory = () => {
  return (
    <div>
      <Table columns={columns} dataSource={[]} />
    </div>
  );
};

export default EvaluationHistory;
