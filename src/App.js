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
              <h3><a href="http://xxx302xxx.github.io/lotto" target="_blank" title="열기">로또 번호 추첨기</a></h3>
              <p>좋은 꿈 꾸셨나요? 검지손가락 끝에 행운의 기운을 모아 여섯개의 숫자를 뽑아보세요. </p>
              <img src="https://github.com/xxx302xxx/xxx302xxx.github.io/blob/main/public/lotto-capture.png?raw=true" width="50%" /> 
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
