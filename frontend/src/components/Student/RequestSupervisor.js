import React, { useState, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const RequestSupervisor = () => {
  const [topicName, settopicName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [topicCat, settopicCat] = useState("");
  const [faculty, setfaculty] = useState("");
  const [members, setmembers] = useState("");
  const [date, setdate] = useState("");
  const [supervisorName, setsupervisorName] = useState("");
  const [attachment, setattachment] = useState("");

  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  setdate(Date().toLocaleString());
  console.log("set date: " + date);

  const email = localStorage.getItem("email");

  const sendData = (e) => {
    e.preventDefault();

    const newRequestSupervisor = {
      topicName,
      userEmail,
      topicCat,
      faculty,
      date,
      supervisorName,
      attachment,
    };
    axios
      .post(`${BACKEND_BASE_URL}/research-topic/register`, newRequestSupervisor)
      .then(() => {
        alert("Request has been Send");
        // props.history.push('/dashbord/');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const demoButton = () => {
    console.log("Button Clicked");
    settopicName("Group6");
    setuserEmail("Geeth@gmail.com");
    settopicCat("networking");
    setfaculty("IT");
    setmembers(4);
    setsupervisorName("Mahinda Kahandagama");
    setattachment(
      "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwio8cXvitruAhVObn0KHSeuCgIQPAgI"
    );
  };

  return (
    <Fragment>
      <Form
        style={{ margin: "auto", width: "50%", marginTop: "50px" }}
        onSubmit={sendData}
      >
        <Form.Group className="mb-3" controlId="groupName">
          <Form.Label>Group Name</Form.Label>
          <Form.Control
            type="text"
            value={group_name}
            placeholder="Enter Group Name"
            onChange={(e) => {
              setgroup_name(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="studentEmail_1">
          <Form.Label>Email address of Student 01</Form.Label>
          <Form.Control
            type="email"
            value={member1_Email}
            placeholder="Enter email address of the student 1"
            onChange={(e) => {
              setmember1_Email(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="studentName_1">
          <Form.Label>Name of Student 01 </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name of the student 1"
            value={member1_Name}
            onChange={(e) => {
              setmember1_Name(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="studentEmail_2">
          <Form.Label>Email address of Student 02</Form.Label>
          <Form.Control
            type="email"
            value={member2_Email}
            placeholder="Enter email address of the student 2"
            onChange={(e) => {
              setmember2_Email(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="studentName_2">
          <Form.Label>Name of Student 02 </Form.Label>
          <Form.Control
            type="text"
            value={member2_Name}
            placeholder="Enter name of the student 2"
            onChange={(e) => {
              setmember2_Name(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="studentEmail_3">
          <Form.Label>Email address of Student 03</Form.Label>
          <Form.Control
            type="email"
            value={member3_Email}
            placeholder="Enter email address of the student 3"
            onChange={(e) => {
              setmember3_Email(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="studentName_3">
          <Form.Label>Name of Student 03</Form.Label>
          <Form.Control
            type="text"
            value={member3_Name}
            placeholder="Enter name of the student 3"
            onChange={(e) => {
              setmember3_Name(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="studentEmail_4">
          <Form.Label>Email address of Student 04</Form.Label>
          <Form.Control
            type="email"
            value={member4_Email}
            placeholder="Enter email address of the student 4"
            onChange={(e) => {
              setmember4_Email(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="studentName_4">
          <Form.Label>Name of Student 04 </Form.Label>
          <Form.Control
            type="text"
            value={member4_Name}
            placeholder="Enter name of the student 4"
            onChange={(e) => {
              setmember4_Name(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button variant="primary" type="button" onClick={demoButton}>
        Demo Button
      </Button>
    </Fragment>
  );
};

export default RequestSupervisor;
