import React from "react";
import "reset-css";
import Header from "../molecules/Header/Header";
import Footer from "../molecules/Footer/Footer";
import Table from "../molecules/Table/Table";

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
