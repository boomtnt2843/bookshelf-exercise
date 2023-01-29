"use client";
import react from "react";
const AddBookForm = ({ setBooks }) => {
  const [title, setTitle] = react.useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleOnSubmit = (e) => {
    setBooks((preState) => [...preState, { title: e.target.title.value }]);
    setTitle("")
    e.target.reset();
    e.preventDefault();
  };
  return (
    <div>
      <h1>ADD TO COLLECTION</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Title </label>
          <input name="title" onChange={handleOnChange} />
          <input type="submit" />
          <br />
          <p>{title ? title : "please input some text!"}</p>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
