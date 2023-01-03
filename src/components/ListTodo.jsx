import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../Redux/todoSlice";
import Checkbox from "@material-ui/core/Checkbox";
function ListTodo({ name, id, done }) {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItem">
      {name ? (
        <Checkbox
          checked={done}
          color="primary"
          onChange={handleChange}
          inputProps={{ "aria-label": "secondary checkbox" }}
          />
          ) : null}
          <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
}

export default ListTodo;
