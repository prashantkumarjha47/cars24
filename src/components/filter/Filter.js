import React, { useContext, useState } from "react";
import { Input, Form, FormGroup, Label, Container, Button } from "reactstrap";
import InputRange from "react-input-range";
import { Context } from "../../store/Context";
import "react-input-range/lib/css/index.css";
import "./Filter.scss";
import closeIcon from "../../assets/images/close-icon.svg";

function Filter(props) {
  const [state, dispatch] = useContext(Context);
  const [priceRange, setPriceRange] = useState(state.minVal);
  const [category, setCategories] = useState("");
  const [vehicleCondition, setVehicleCondition] = useState("");
  const [make, setmake] = useState("");

  const onApplyFilter = () => {
    const filters = {
      priceRange,
      category,
      vehicleCondition,
      make,
    };

    updateFilterInStore(filters);
  };

  const onResetFilter = () => {
    setPriceRange(0);
    setmake("");
    setVehicleCondition("");
    setCategories("");

    const filters = {
      priceRange: 0,
      category: "",
      vehicleCondition: "",
      make: "",
    };

    updateFilterInStore(filters);
  };

  const updateFilterInStore = (filters) => {
    dispatch({ type: "APPLY_FILTER", payload: filters });
    dispatch({ type: "GET_CARS" });
  };
  console.log(state);
  return (
    <div className="filters">
      <Button color="link" className="close-btn" onClick={props.onCloseClick}>
        <img src={closeIcon} alt="Close" />
      </Button>
      <Container>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Category</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              value={category}
              onChange={(e) => setCategories(e.target.value)}
            >
              {state.categories.map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Price range</Label>
            <InputRange
              maxValue={state.maxValu}
              minValue={state.minVal}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Vehicle Condition</Label>
            <Input
              onChange={(e) => setVehicleCondition(e.target.value)}
              value={vehicleCondition}
              type="select"
              name="select"
              id="exampleSelect"
            >
              {state.condition.map((cond) => (
                <option key={cond.id} value={cond.type}>
                  {cond.type}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Car make</Label>
            <Input
              onChange={(e) => setmake(e.target.value)}
              type="select"
              name="select"
              value={make}
              id="exampleSelect"
            >
              {state.makes.map((make) => (
                <option key={make.id} value={make.name}>
                  {make.name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup className="submit-row">
            <Button onClick={onApplyFilter}>Apply</Button>{" "}
            <Button onClick={onResetFilter}>Reset</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
}

export default React.memo(Filter);
