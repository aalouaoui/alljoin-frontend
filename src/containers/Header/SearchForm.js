import React from "react";
import styled from "styled-components";
import { navigate } from "hookrouter";
import useInput from "hooks/useInput";
import Input from "components/Input";
import Button from "components/Button";

const Form = styled.form``;

const SearchForm = () => {
  const searchInput = useInput("q", "");
  const handleSubmit = ev => {
    ev.preventDefault();
    navigate("/search", false, { q: searchInput.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input forHeader {...searchInput} placeholder="Search for an Event..." required />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
