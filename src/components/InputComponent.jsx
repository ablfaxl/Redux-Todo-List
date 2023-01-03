import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../Redux/todoSlice";

const InputComponent = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    console.log(`adding ${input}`);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
};

export default InputComponent;
