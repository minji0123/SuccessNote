import { useState } from 'react';
import './App.css';
import { Table,InputGroup,Form } from 'react-bootstrap';

function App() {

  // let post = '난 오늘 이렇게 알차게 살았다.';
  let [a,b] = useState('난 오늘 이렇게 알차게 살았다.');

  return (
  <div className="App">
    <div className="black-nav">
      <h4>성공노트</h4>
      {/* <h4 style={{color : 'red'}}>성공노트</h4> */}

    </div>


    <div className="row">
      <div className='col-4'></div>
      <div className='col-7 mt-5 mr-3'>
        <h4 className='mb-3'>{a}</h4>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>시작시간</th>
              <th>종료시간</th>
              <th>한 일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><input placeHolder="HH:mm" className='input-style'></input></td>
              <td><input placeHolder="HH:mm" className='input-style'></input></td>
              <td><input className='input-style'></input></td>
            </tr>
            <tr>
              <td>2</td>
              <td><input placeHolder="HH:mm" className='input-style'></input></td>
              <td><input placeHolder="HH:mm" className='input-style'></input></td>
              <td><input className='input-style'></input></td>
            </tr>
            <tr>
              <td>3</td>
              <td><input placeHolder="HH:mm" className='input-style'></input></td>
              <td><input placeHolder="HH:mm" className='input-style'></input></td>
              <td><input className='input-style'></input></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  </div>
  );
}

export default App;
