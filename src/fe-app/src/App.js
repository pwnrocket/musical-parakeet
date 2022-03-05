import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Row, Container, Col} from 'reactstrap';

import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import { AppProvider } from './context/AppState';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <AppProvider>
    <Container>
      <Row>
      <Col className="bg-light border" md={{ offset: 3, size: 6 }} sm="12">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddUser' element={<AddUser/>}/>
          <Route path='/EditUser/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
      </Col>
      </Row>
    </Container>
    </AppProvider>
  );
}

export default App;
