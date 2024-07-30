import React from "react";
import { Form } from "react-bootstrap";

const categoryOptions = [
  { value: "", label: "Select a category" },
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
];

const Step4 = ({ selectedCategory, onCategoryChange }) => {
  return (
    <Form.Group controlId="formCategory">
      <Form.Label>Select Category</Form.Label>
      <Form.Control
        as="select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Step4;
