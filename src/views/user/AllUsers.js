import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { FcCancel } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import FilterComponent from "./FilterComponent";
import DeleteWarning from "../../util/deleteWarning";
import Switch from "react-switch";
import SectorEditor from "./UserEditor";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "100%",
  },
};

function AllUsers() {
  const [allData, setAllData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});
  const childRef = useRef();

  const getAllData = () => {
    axios
      .get(`${process.env.REACT_APP_CLIENT_API_ROOT}/api/user`)
      .then((res) => setAllData(res.data.response))
      .catch((res) => console.log(res));
  };

  useEffect(() => {
    getAllData();
  }, []);

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = allData.filter(
    (item) =>
      (item.name &&
        item.name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.terms &&
        item.terms.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.sector &&
        item.sector.toLowerCase().includes(filterText.toLowerCase()))
  );
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {

      const updateUser = await axios.put(
        `${process.env.REACT_APP_CLIENT_API_ROOT}/api/user/${info._id}`,
        info
      );

      if (updateUser.data.code === 200) {
        toast.success("update successfully");
        setInfo({});
        setIsOpen(false);
        getAllData();
      } else {
        toast.error("Something want contact with shanto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e) => {
    setInfo(e);
    setIsOpen(true);
  };

  const handleDelete = async (id) => {
    const deleteData = await axios.delete(
      `${process.env.REACT_APP_CLIENT_API_ROOT}/api/user/${id}`
    );
    if (deleteData.data.code === 200) {
      setAllData(
        allData.filter((d) => d._id !== deleteData.data.response._id)
      );
      toast.success("delete successfully");
    } else {
      toast.success(deleteData.data.message);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      width: "200px",
    },
    {
      name: "Sector",
      selector: (row) => row.sector,
      width: "200px",
    },
    {
      name: "Terms",
      selector: (row) => (
        <>
          <Switch
            disabled
            checked={row.terms}
          />
        </>
      ),
      width: "120px",
      center: true,
    },
    {
      name: "Action",
      width: "150px",
      center: true,
      selector: (row) => (
        <>
          <button onClick={() => handleEdit(row)} className="btn m-2 border">
            <FiEdit />
          </button>
          <button
            onClick={() => childRef.current.makeAlert(row._id)}
            className="btn m-2 border"
          >
            <FcCancel />
          </button>
        </>
      ),
    },
  ];
  return (
    <div >
      <h1 className="mt-5">All Data</h1>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        dense
      />

      <DeleteWarning action={handleDelete} ref={childRef} />

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SectorEditor
          formAction={updateUser}
          setInfo={setInfo}
          info={info}
          type="edit"
        />
        <Button
          className="bg-danger"
          style={{ margin: "10px  0" }}
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </Modal>
    </div>
  );
}

export default AllUsers;
