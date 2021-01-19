import React, { useState, useContext } from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { Context } from "../../store/Context";

import "./Sorter.scss";

function Sorter(props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [sortCondition, setSortCondition] = useState("");

  const [, dispatch] = useContext(Context);

  const onSearch = (e) => {
    setSearchTxt(e.target.value);
    dispatch({
      type: "SEARCH_CAR",
      payload: e.target.value,
    });
    dispatch({ type: "GET_CARS" });
  };

  const onSort = (e) => {
    const order = e.target.value;
    setSortCondition(order);
    dispatch({
      type: `SORT_CAR_${order}`,
    });
  };

  return (
    <div className="sorter">
      <Container>
        <Row>
          <Col xs="12" sm="12" md="12" lg="4" className="search-row">
            <Input onChange={onSearch} value={searchTxt} placeholder="Search" />
          </Col>
          <Col xs="7" sm="8" md="8" lg="4">
            <Input
              onChange={onSort}
              type="select"
              placeholder="Filter by price"
              value={sortCondition}
            >
              <option value="ASC">Low to High</option>
              <option value="DESC">High to Low</option>
            </Input>
          </Col>
          <Col className="filter-btn" xs={{ size: "auto" }}>
            <Button onClick={props.onFilterClick} color="info">
              Filter
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(Sorter);
