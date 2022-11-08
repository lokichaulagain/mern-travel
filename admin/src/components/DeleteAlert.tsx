import * as React from "react";
import { Button, IconButton } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { AncientHimalayanContext } from "../../context/Context";

export default function DeleteAlert() {
  const { mails, deleteMail } = useContext(AncientHimalayanContext);
  return (
    <>
      <IconButton aria-label="delete" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <DeleteIcon fontSize="inherit" color="warning" />
      </IconButton>

      <div className="modal fade " id="exampleModal" tab-index="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
        <div className="modal-content p-2 rounded-1 " style={{ backgroundColor: "#16181d", color: "#bbc4cc", border: "1px solid #2d3741 " }}>
            <div className="modal-body">
              <h3 className="text-center">Are you sure ?</h3>
            </div>
            <div className="d-flex justify-content-end gap-3 mt-3">
              <Button className="table_button px-2" size="small" data-bs-dismiss="modal">
                Cancell
              </Button>

              <Button onClick={deleteMail} className="table_button " size="small">
                Yes Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
