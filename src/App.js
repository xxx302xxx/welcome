/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from 'react-bootstrap';


function App() {

 
 /*   let [titleFlags, changeTitleFlags] = useState([
     true, true, true
   ]);
  
   let titles = [
     { default: 'Project1', new: '로또번호생성기1' },
     { default: 'Project2', new: '로또번호생성기2' },
     { default: 'Project3', new: '로또번호생성기3' },
   ];

   function changeTitle() {
     var newTitleFlags = [...titleFlags];
     newTitleFlags[0] = !newTitleFlags[0];
     changeTitleFlags(newTitleFlags); */
   
  

/*   let [글제목, 글제목변경] = useState(['Project1', 'Project2', 'Project3']);
  let [모달제목, 모달제목변경] =useState(['로또번호생성기', '', '']);
  let [하트, 하트변경] = useState([0, 0, 0]);
  let [모달, 모달변경] = useState(false); */




  return (
    <div className="App"> 
      <div className="black-nav">
        <div>갓 배운 줌마코딩 🐣</div>
      </div>

      <div>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="Title">Project #1</Accordion.Header>
            <Accordion.Body>
              <h3>로또 번호 추첨기</h3>
              <p>검지손가락 끝에 행운의 기를 모아 클릭 한방으로 숫자 여섯개를 뽑는다. </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="Title">Project #2</Accordion.Header>
            <Accordion.Body>
              <h3>제목</h3>
              <p>내용</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">  
            <Accordion.Header className="Title">Project #3</Accordion.Header>
            <Accordion.Body>
              <h3>제목</h3>
              <p>내용</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">  
            <Accordion.Header className="Title">Project #4</Accordion.Header>
            <Accordion.Body>
              <h3>제목</h3>
              <p>내용</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">  
            <Accordion.Header className="Title">Project #5</Accordion.Header>
            <Accordion.Body>
              <h3>제목</h3>
              <p>내용</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

 
{/*      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h3 title="Click!" onClick={()=>{모달변경(!모달); setTitle(i);}}> { 글제목[i] }
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let 하트복사 = [...하트];
                  하트복사[i] = 하트복사[i] + 1;
                  하트변경(하트복사)
                }}>❤</span> {하트[i]}
              </h3>
              <p>2023. 1. 28 발행</p>
              <hr/>
            </div>
          )
        })
      }  */}

      {/* { 모달 === true ? <모달창/> : null } */}
      
    
  </div>
 );
}



export default App;
