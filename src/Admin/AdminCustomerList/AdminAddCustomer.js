import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import * as adminadd from "react-bootstrap";
import "./AdminCustomerList.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function AdminAddCustomer() {
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState("");
  const navigate = useNavigate();
  const [customer, setcustomer] = useState({
    plate_name: "",
    plate_code: "",
    driver: "",
    id_no: "",
    phone: "",
    company: "",
  });

  const handleinput = (e) => {
    e.persist();

    setcustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const addcustomer = (e) => {
    e.preventDefault();

    const data = {
      plate_name: customer.plate_name,
      plate_code: customer.plate_code,
      driver: customer.driver,
      id_no: customer.id_no,
      phone: customer.phone,
      company: customer.company,
    };
    setLoading(true);
    try {
      axios
        .post(`api/addcustomer`, data)
        .then((res) => {
          console.log(res);
          setLoading(false);
          if (res.status === 200) {
            setSuccessResponse("Customer added successfully.");
            setTimeout(() => {
              setSuccessResponse("");
            }, 2000);
          } else {
            alert("Customer not added");
          }
        })
        .catch((res) => {
          console.log(res);
          setLoading(false);
          setServerError("Failed to add Customer");
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
      <AdminSidebar />

      <adminadd.Container className="addcustcontainer">
        <Link
          to={"../AdminCustomerList"}
          className="btn btn-primary btn-sm float-end mt-3"
        >
          Back
        </Link>

        <adminadd.Row>
          <adminadd.Col lg={8} className="mx-auto">
            <adminadd.Card className="addcard">
              <adminadd.Card.Header>Logo</adminadd.Card.Header>
              <adminadd.Card.Body>
                <div className="details1 d-flex mb-3">
                  <div>
                    <label>Plate name</label>
                    <input
                      name="plate_name"
                      onChange={handleinput}
                      value={customer.plate_name}
                      type="text"
                      className="form-control shadow-none"
                    />
                  </div>
                  <div>
                    <label>Plate Code </label>
                    <input
                      name="plate_code"
                      type="text"
                      onChange={handleinput}
                      value={customer.plate_code}
                      className="form-control shadow-none"
                    />
                  </div>
                </div>
                <div className="details2 d-flex mb-3">
                  <div>
                    <label>Driver</label>
                    <input
                      name="driver"
                      type="text"
                      onChange={handleinput}
                      value={customer.driver}
                      className="form-control shadow-none"
                    />
                  </div>
                  <div>
                    <label>ID No.</label>
                    <input
                      name="id_no"
                      type="text"
                      onChange={handleinput}
                      value={customer.id_no}
                      className="form-control shadow-none"
                    />
                  </div>
                </div>
                <div className="details2 d-flex mb-3">
                  <div>
                    <label>Phone number</label>
                    <input
                      name="phone"
                      type="text"
                      onChange={handleinput}
                      value={customer.phone}
                      className="form-control shadow-none"
                    />
                  </div>
                  <div>
                    <label>Company</label>
                    <input
                      name="company"
                      type="text"
                      onChange={handleinput}
                      value={customer.company}
                      className="form-control shadow-none"
                    />
                  </div>
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
                              Adding customer...
                            </span>
                          </div>
                        </div>
                      </button>
                    )}

                    {!loading && (
                      <div className="details2 d-flex mb-3">
                        <button
                          onClick={addcustomer}
                          className="btn btn-success"
                        >
                          Add customer
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </adminadd.Card.Body>
            </adminadd.Card>
          </adminadd.Col>
        </adminadd.Row>
      </adminadd.Container>
    </div>
  );
}

export default AdminAddCustomer;
