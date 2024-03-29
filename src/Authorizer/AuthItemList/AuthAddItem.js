import React, { useState } from "react";
import "./AuthItemList.css";
import AuthSidebar from "../AuthSidebar/AuthSidebar";
import * as authadd from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function AuthAddItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const navigate = useNavigate();
  const [authnewitem, setauthnewitem] = useState({
    description: "",
    b_price: "",
    s_price: "",
  });

  const handleinput = (e) => {
    e.persist();

    setauthnewitem({ ...authnewitem, [e.target.name]: e.target.value });
  };

  const authaddnew = (e) => {
    e.preventDefault();

    const data = {
      description: authnewitem.description,
      b_price: authnewitem.b_price,
      s_price: authnewitem.s_price,
    };
    setLoading(true);
    try {
      axios
        .post(`api/authadditem`, data)
        .then((res) => {
          console.log(res);
          setLoading(false);

          if (res.status === 200) {
            setSuccessResponse("Item added successfully.");
            setTimeout(() => {
              setSuccessResponse("");
            }, 2000);

            document.getElementById("form_di").reset();
          } else {
            alert("Item not added");
          }
        })
        .catch((res) => {
          console.log(res);
          setLoading(false);
          setServerError("Failed to add item");
          setTimeout(() => {
            setServerError("");
          }, 2000);
        });
    } catch (error) {
      alert("Ooops, invalid action");
    }
  };
  return (
    <div>
      <div
        style={{
          marginLeft: "40%",
          marginTop: "0%",
          position: "fixed",
          zIndex: "2",
        }}
      >
        {successResponse && (
          <div
            style={{
              color: "white",
              fontSize: "15px",
              width: "120%",
              right: "0",
              background: "#28a745",
              borderRadius: "15px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "6%",
              border: "1px solid lightgray",
              opacity: "0.7",
              transition: "0.5",
            }}
          >
            {successResponse}
          </div>
        )}
        {serverError && (
          <div
            style={{
              color: "white",
              fontSize: "15px",
              width: "120%",
              right: "0",
              background: "#ED4337",
              borderRadius: "15px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "6%",
              border: "1px solid lightgray",
              opacity: "0.7",
              transition: "0.5",
            }}
          >
            {serverError}
          </div>
        )}
      </div>

      <div>
        {!isOpen ? (
          <div
            style={{
              marginTop: "1rem",
              fontSize: "25px",
              cursor: "pointer",
              marginLeft: "1rem",
            }}
          >
            <FaBars onClick={() => setIsOpen(!isOpen)} />
          </div>
        ) : (
          <div>
            <IoIosArrowDropleft
              onClick={() => setIsOpen(!isOpen)}
              style={{
                fontSize: "2rem",
                color: "#007CBA",
                position: "fixed",
                top: "2%",
                marginLeft: "187px",
                cursor: "pointer",
              }}
            />
           <AuthSidebar />
          </div>
        )}
      </div>


      <authadd.Container>
        <Link
          to={"../AuthItemList"}
          className="addcustomer btn btn-primary btn-sm float-end mt-3"
        >
          Back
        </Link>
        <authadd.Row>
          <authadd.Col className="mx-auto" lg={8}>
            <authadd.Card className="additem mt-5">
              <authadd.Card.Title>
                <div className="edit">Add new item</div>
              </authadd.Card.Title>
              <form onSubmit={authaddnew} id="form_di" className="mx-auto">
                <authadd.Card.Body className="mx-auto">
                  <div>
                    <label>Item description</label>
                    <input
                      name="description"
                      onChange={handleinput}
                      value={authnewitem.description}
                      className="intem form-control shadow-none "
                      type="text"
                    />

                    <label>Buying price</label>
                    <input
                      name="b_price"
                      onChange={handleinput}
                      value={authnewitem.b_price}
                      className="intem form-control shadow-none "
                      type="text"
                    />

                    <label>Selling price</label>
                    <input
                      name="s_price"
                      onChange={handleinput}
                      value={authnewitem.s_price}
                      className="intem form-control shadow-none "
                      type="text"
                    />
                  </div>
                  
                  <div className="">
                    <div>
                      {loading && (
                        <button 
                          style={{
                            fontSize: "18px",
                            background: "transparent",
                            color: "black",
                            border: "none",
                            marginLeft: "28px",
                          }}
                        >
                          <div
                            style={{
                              placeItems: "center",
                              display: "grid",
                              top: "50%",
                              transform: "translate Y(50%)",
                            }}
                          >
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <Oval
                                height="20"
                                width="20"
                                color="blue"
                                ariaLabel="loading"
                              />
                              <span style={{ fontSize: "20px" }}>
                                Adding item...
                              </span>
                            </div>
                          </div>
                        </button>
                      )}

                      {!loading && (
                        <div className="details2 d-flex mb-3">
                          <button
                            type="submit"
                            className="btn btn-success mt-3"
                          >
                            Add item
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </authadd.Card.Body>
              </form>
            </authadd.Card>
          </authadd.Col>
        </authadd.Row>
      </authadd.Container>
    </div>
  );
}

export default AuthAddItem;
