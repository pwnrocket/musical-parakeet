import React, {useContext, useState}  from 'react'
import { Link, useHistory } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { AppContext } from '../context/AppState';

//TODO Connect to BE
export const AddUser = () => {
  const [userName, setName] = useState('')
  const {addUser} = useContext(AppContext)
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName
    }
    addUser(newUser);
    history.push("/")
  }

  const onChange = (e) => {
    setName(e.target.value);
  }
  return (
    <Form onSubmit= {onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter UserName' value={userName} onChange={onChange} userName="userName">Enter UserName</Input>
      </FormGroup>
      <Button type='submit'>submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Go Back</Link>
    </Form>
  )
}
