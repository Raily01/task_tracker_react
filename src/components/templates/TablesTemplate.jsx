import React from "react";
import "reset-css";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Table from "../molecules/Table";

const DefaultTable = () => {
  return (
    <>
      <Header />
      <Table />
      <Footer />
    </>
  );
};

export default DefaultTable;
