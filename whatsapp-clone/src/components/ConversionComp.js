import styled from "styled-components";
import React, {useState } from "react";
import { SearchConatainer} from "./ContactListComponent";
import { messagesList } from "../Mockdata";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const Container =styled.div`
display: flex;
flex-direction: column;
heigth:100 px;
width:100 px;
flex:3;

background: #f6f7f8;
`;
const SearchInput=styled.input`
width : 1000px;
height: 20px;
outline:none;
border:none;
font-size:15px;

`;
const ProfileHead=styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 10px;
align-item:center;
gap: 10px;
`;
const ProfileImage=styled.img`
width :40px;
height:40px;
border-radius:50%;
`;
const ChatBox=styled.div`
display: flex;
flex-direction: row;
background: #f0f0f0;
padding: 10px;
align-item:center;
bottom: 0;
`;
const EmojiImage = styled.img`
width: 28px;
heigth: 28px;
cursor:pointer;
display: flex;
flex-direction: column-reverse;
top:0px;
flex:2px;
`;
const MessageContainer =styled.div`
display: flex;
overflow-y:auto;
flex-direction: column;
height:600px;
background:#e5ddd6;
`;
const MessageDiv=styled.div`
display:flex;
mergin: 8px 15px;
justify-content:${(props)=>(props.isYours ?"flex-end":"flex-start")};

`;
const Message=styled.div`
max-width:100%;
background:${(props)=>(props.isYours ?"#daf8cb":"white")};
color:#303030;
padding: 2px 5px;
font-size:20px;
margin-top:5px;
margin-right:${(props)=>(props.isYours?"10px":"20px")};
margin-left:${(props)=>(props.isYours?"20px":"10px")};
border-radius:5px;
`;


const ConversionComp = (props) => {
   const {selectedChat}=props;
   const [text,setText]=useState("");
   const [messageList,setMessageList]=useState(messagesList);
   const onEnterPress=(event)=>{
    if(event.key==="Enter")
    {
        const messages=[...messageList]
        messages.push(
            {
                id:0,
                messageType: "TEXT",
                text,
                senderID:1,
                addedOn: "12:02 PM",
              }
        );
        setMessageList(messages);
      setText("");
    }
   };
   const [pickerVisible,togglePicker]=useState(false);

      return (<Container>
        <ProfileHead>
        <ProfileImage src={selectedChat.profilePic}></ProfileImage>
        {selectedChat.name}</ProfileHead>
        <MessageContainer>
            {messageList?.map((messageData)=>(
                    <MessageDiv isYours={messageData.senderID===0}>
                    <Message isYours={messageData.senderID===0}>{messageData.text}</Message>
                    </MessageDiv>
            ))}
            
            </MessageContainer>
        <ChatBox>        
            <SearchConatainer>
            {
            pickerVisible && (
                <div className="ap" position="relative" top="60px"> 
                    <Picker data={data} onEmojiSelect={(emoji) => {
                        setText(text+emoji.native);
                        //console.log(text+emoji.native);
                        togglePicker(false);
                      }}/>
                    </div>
            )}
                
                <EmojiImage src={"/Profile/data.svg"} 
                onClick={()=>togglePicker(!pickerVisible)}/>
                <SearchInput 
                placeholder="Type a message" value={text} 
                onKeyDown={onEnterPress}
                onChange={(e)=>setText(e.target.value)}>
                
                </SearchInput>
            </SearchConatainer>
        </ChatBox>
    </Container>
)}
export default ConversionComp;