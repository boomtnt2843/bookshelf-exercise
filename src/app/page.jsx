"use client";
import AddBookForm from "@/components/AddBookForm";
import BookList from "@/components/BookList";
import react from "react";

const HomePage = () => {
  // const books = [{ title: "Clean Code" }];
  const [books, setBooks] = react.useState([{ title: "Clean Code" }]);
  return (
    <div>
      <AddBookForm setBooks={setBooks} />
      <hr />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
