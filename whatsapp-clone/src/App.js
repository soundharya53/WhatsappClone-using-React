import React,{useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import ConversionComp from "./components/ConversionComp";


const Container =styled.div`
display: flex;
flex-direction: row;
heigth: 100%;
width: 100%;
background: #f8f9fb;
`;
const Placeholder=styled.div`
flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  color: rgba(0, 0, 0, 0.45);

  span {
    font-size: 32px;
    color: #525252;
  }
`;


const ChatPlaceHolder=styled.img`
width: 240px;
height:240px;
border-radius:100%;
object-fit:contain;
`;

function App() {
  const [selectedChat,setChat]=useState();
  return (<Container>
    <ContactListComponent setChat={setChat}/>
    {selectedChat?(
      <ConversionComp selectedChat={selectedChat}/>
    ):
    (
    <Placeholder>
      <ChatPlaceHolder src="/Profile/welcome-placeholder.jpeg"/>
        <span>keep connected</span>
  
    </Placeholder>
    )}
    
     
  </Container>
  );
}

export default App;