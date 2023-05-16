import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";


/*Here we r getting the props from the expanselist*/
const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span
          className="badge badge-primary badge-pill mr-3"
          style={{ backgroundColor: "skyblue", padding: "3px 7px" }}
        >
          ${props.cost}
        </span>
        <TiDelete
          onClick={handleDelete}
          size="1.5em"
          style={{ cursor: "pointer" }}
        />
      </div>
    </li>
  );
};

export default ExpenseItem;
