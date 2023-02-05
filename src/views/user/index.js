import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import SectorEditor from "./UserEditor";
import formValidator from "./validator";

function AddUser() {
  const [info, setInfo] = useState({});

  const saveOffer = async (e) => {
    e.preventDefault();
    try {
      const validate = await formValidator.isValid(info);
      
      if (validate) {

          const saveData = await axios.post(
            `${process.env.REACT_APP_CLIENT_API_ROOT}/api/user/add`,
            info
          );

          if (saveData.data.code === 200) {
            toast.success("Saved successfully");
            setInfo({});
          } else {
            toast.success(saveData.data.message);
          }
        
      } else {
        toast.error("All felid are required");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row mt-5">
      <div className="col-md-10">
        <SectorEditor
          formAction={saveOffer}
          setInfo={setInfo}
          info={info}
        />
      </div>
    </div>
  );
}

export default AddUser;
