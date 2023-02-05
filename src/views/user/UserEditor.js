import React from "react";
import { Form, Button } from "react-bootstrap";
import { allSectorsData } from "../../util/data";

function UserEditor({ setInfo, formAction, type, info }) {
  return (
    <Form onSubmit={formAction}>
      <div className="row">
        <h1>Add New</h1>
        <div className="col-md-12">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Name <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              value={info.name || ""}
              required
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setInfo((p) => ({ ...p, name: e.target.value }))
              }
            />
          </Form.Group>
        </div>
        <div className="col-md-12">
          <Form.Label>
            Select Sectors <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Group className="mb-3">
            <Form.Select
              value={info.sector || ""}
              required
              aria-label="Default select example"
              onChange={(e) =>
                setInfo((p) => ({
                  ...p,
                  sector: e.target.value,
                }))
              }
            >
              <option>Select Sector</option>
              {allSectorsData &&
                allSectorsData.map((c, index) => (
                  <option key={`c-${index}`} value={c}>
                    {c}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </div>
        <div className="col-md-12">
          <Form.Check
              inline
              label="Agree to terms"
              name="terms"
              type={`checkbox`}
              checked={info?.terms || false}
              onChange={(e) =>
                  setInfo((p) => ({ ...p, terms: e.target.checked }))
                }
            />
        </div>
      </div>
      <div className="w-100 d-flex justify-content-between align-items-end">
        <Button variant="primary" type="submit" className="h-50">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default UserEditor;
