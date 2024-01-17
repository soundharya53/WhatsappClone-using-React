import styled from "styled-components";
import { contactList } from "../Mockdata";

const Container = styled.div`
display: flex;
flex-direction: column;
heigth: 100 px;
width:100 px;
flex: 1;
border-right:1px solid #dadada;
`;
const ProfileInfo=styled.div`
display: flex;
flex-direction: row;
background: #ededed;
padding: 10px;
`;
const ProfileImage=styled.img`
width :40px;
cursor:pointer;
height:40px;
border-radius:50%;
`;
const SearchBox=styled.div`
bakcground: #f6f6f6;
padding: 10px;
flex-direction:row;
display: flex;
margin-left:10px;
`;
export const SearchConatainer=styled.div`
display: flex;
flex-direction: row;
background: white;
border-radius:16px;
padding: 5px 10px;
gap: 10px;
margin-right:10px;
`;
const SearchIcon=styled.img`
width :28px;
height:28px;
`;
export const SearchInput=styled.input`
width : 100%;
outline:none;
border:none;
font-size:15px;
margin:left:10px;
`;
const ConatctItem=styled.div`
display: flex;
flex-direction: row;
width:100%;
align-items: center;
background: white;
border-bottom: 1px solid #f2f2f2;
cursor: pointer;
padding: 15px 12px;
`;
const ProfileIcon=styled(ProfileImage)`
width:38px;
height:38px;
cursor:pointer;
`;
const ContactInfo=styled.div`
display: flex;
flex-direction: column;
width:100px;
margin:0 12px;
`;
const ContactName=styled.span`
width:100 %;
font-size:16px;
color: black;
`;
const MessageText=styled.span`
width:100 %;
font-size:14px;
margin-top:3px;
color:  rgba{0,0,0,0.8};
`;
const MessageTime=styled.span`
font-size:12px;
margin-right: 25px;
color:  rgba{0,0,0,0.45};
`;
const ContactComponent= (props) => {
    const {userData,setChat}=props;
    return (
    <ConatctItem onClick={()=>setChat(userData)}>
        <ProfileIcon src={userData.profilePic}/>
        <ContactInfo>
        
            <ContactName>{userData.name}</ContactName>
            <MessageText>{userData?.lastText}</MessageText>
            
        </ContactInfo>
        <MessageTime>{userData?.lastTextTime}</MessageTime>
    </ConatctItem>
    );   
}
const ContactListComponent = (props) => {
    return (<Container>
            <ProfileInfo>
        <ProfileImage src="/Profile/3.jpg"></ProfileImage>
        <ProfileImage src="/Profile/three.jpg"></ProfileImage>
        <ProfileImage src="/Profile/ms.jpg"></ProfileImage>
        <ProfileImage src="/Profile/st.jpg"></ProfileImage>
        <ProfileImage src="/Profile/cc.jpg"></ProfileImage>
    </ProfileInfo>
    <SearchBox>
    <SearchConatainer>
        <SearchIcon src={"/Profile/search.png"}/>
        <SearchInput placeholder="Search or start new chat"/>
    </SearchConatainer>
    </SearchBox>
    {contactList.map((userData)=>(
        <ContactComponent userData={userData} setChat={props.setChat}/>
    ))}
        
       </Container>
       );
}
export default ContactListComponent;