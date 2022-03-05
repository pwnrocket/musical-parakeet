import React from 'react'
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
//TODO Complete State logic for component
export const EditUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter UserName'></Input>
      </FormGroup>
      <Button type='submit'>submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Go Back</Link>
    </Form>
  )
}
