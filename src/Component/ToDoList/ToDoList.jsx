import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";
import { GiCheckMark } from "react-icons/gi";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  const complete = () => {};

  return (
    <Container>
      <div
        style={{
          backgroundColor: "#63a2dd",
          color: "white",
          marginTop: "30px",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Row
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            fontSize: "50px",
            fontWeight: "bold",
            marginBottom: "15px",
            paddingRight: "90px",
          }}
        >
          To-Do App!
        </Row>

        <Row
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            fontSize: "15px",
            marginBottom: "15px",
            paddingRight: "90px",
          }}
        >
          Add New To-Do
        </Row>

        <Row>
          <InputGroup
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              fontSize: "15px",
              marginBottom: "15px",
              paddingRight: "90px",
            }}
          >
            <FormControl
              placeholder="Enter new task"
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
            />
            <InputGroup
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                fontSize: "15px",
                marginTop: "15px",
                paddingRight: "20px",
              }}
            >
              <Button
                onClick={() => addItem()}
                style={{
                  backgroundColor: "#63a2dd",
                  border: "1px solid white",
                  padding: "5px 25px",
                }}
              >
                ADD
              </Button>
            </InputGroup>
          </InputGroup>
        </Row>
      </div>

      <div>
        <Row>
          <Col>
            <ListGroup>
              {list.map((item, index) => (
                <div key={index}>
                  <ListGroup.Item
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      marginTop: "20px",
                      backgroundColor: "#eee",
                      borderRadius: "10px",
                    }}
                  >
                    <span>
                      <Button
                        style={{
                          marginRight: "10px",
                          backgroundColor: "rgb(214, 33, 33)",
                          border: "1px solid rgb(214, 33, 33)",
                          marginRight: "20px",
                        }}
                        onClick={() => deleteItem(item.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => complete(item.id)}
                        style={{
                          backgroundColor: "rgb(11, 110, 11)",
                          border: "1px solid rgb(11, 110, 11)",
                        }}
                      >
                        Complete
                      </Button>
                    </span>
                    <div
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      {item.value}
                      <GiCheckMark
                        style={{
                          marginLeft: "70px",
                          marginTop: "-5px",
                        }}
                      />
                    </div>
                  </ListGroup.Item>
                </div>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
