import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./Home.module.css";
import TableItem from "./TableItem";

const Home = (props) => {
  const { isLoading, error, sendRequest: getTableRequest } = useHttp();
  const [tableData, setTableData] = useState([]);

  const processTableData = (responseData) => {
    console.log(responseData);
    setTableData(responseData.data.slice(0, 10));
  };

  const tableDataClickHandler = async () => {
    getTableRequest(
      {
        endPoint: "source/",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.authToken}`,
        },
      },
      processTableData
    );
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <div className={classes.home}>
      <button type="button" onClick={logoutHandler}>
        Logout
      </button>
      <button type="button" onClick={tableDataClickHandler}>
        {isLoading ? "Fetching..." : "Fetch Table Data"}
      </button>
      {error && <p>{error}</p>}
      <ul>
        {tableData.map((item) => (
          <TableItem key={item.source_id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
