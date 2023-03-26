import React, { useState } from "react";
import "./AuthItemList.css";
import AuthSidebar from "../AuthSidebar/AuthSidebar";
import * as authadd from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function AuthAddItem() {
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

    try {
      axios
        .post(`api/authadditem`, data)
        .then((res) => {
          console.log(res);
        })
        .catch((res) => {
          console.log(res);
        });
    } catch (error) {}
  };
  return (
    <div>
      <AuthSidebar />

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
              <form onSubmit={authaddnew} className="mx-auto">
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

                <div className="details2 d-flex mb-3">
                  <button type="submit" className="btn btn-success mt-3">
                    Add item
                  </button>
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
