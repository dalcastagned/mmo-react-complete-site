import styled from 'styled-components'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa'

export const Title = styled.h2`
   color: ${(props) => props.theme.text};
   padding: 20px;
`

export const ContainerForm = styled.form`
   display: flex;
   flex-direction: column;
   padding: 0 20px;
`

export const InputName = styled.input`
   border: 1px solid #CCC;
   border-radius: 10px;
   background: #FFF;
   padding: 10px;
   width: 50%;

   &:hover {
      transition: border-color 0.3s ease-in-out;
      border: 1px solid #AAA;
   }

   &:focus {
      outline: 0;
      border: 1px solid #999;
   }

   @media screen and (max-width: 600px){
        width: 100%;
    }
`

export const InputComment = styled.textarea`
   border: 1px solid #CCC;
   border-radius: 10px;
   background: #FFF;
   padding: 10px;
   width: 100%;
   resize: none;

   &:hover {
      transition: border-color 0.3s ease-in-out;
      border: 1px solid #AAA;
   }

   &:focus {
      outline: 0;
      border: 1px solid #999;
   }
`

export const ErrorTextContainer = styled.div`
   height: 40px;
   display: flex;
   align-items: center;
`

export const ErrorText = styled.span`
   color: #f00;
   padding: 10px 0 ;
`

export const ButtonSubmit = styled.button`
   width: 200px;
   padding: 15px;
   margin: 10px auto 20px auto;
   border: none;
   border-radius: 10px;
   color: ${(props) => props.theme.buttonThemeTextColor};
   background: ${(props) => props.theme.buttonThemeBackground};
   cursor: pointer;
`

export const CommentContainer = styled.div`
   margin: 20px;
   padding: 10px 0 10px 10px;
   border: 2px solid ${(props) => props.theme.border};
   min-height: 100px; 
   display: flex;
   flex-direction: row;
   justify-content: center;
`
export const CommentInfoContainer = styled.div`
   margin: 20px;
   width: 70%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const CommentName = styled.h2`
   color: ${(props) => props.theme.text}; 
   font-size: 20px; 
`

export const Comment = styled.p`
   padding-top: 10px;
   color: ${(props) => props.theme.text}; 
   font-size: 15px; 
`

export const CommentLikeContainer = styled.div`
   margin: 20px;
   width: 30%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`

export const UpIcon = styled(FaCaretUp)`
    color: ${(props) => props.theme.text}; 
    font-size: 35px;
    cursor: pointer;
`

export const DownIcon = styled(FaCaretDown)`
    color: ${(props) => props.theme.text}; 
    font-size: 35px;
    cursor: pointer;
`

export const LikeCount = styled.p`
    color: ${(props) => props.color}; 
    padding: 0 10px;
`

