// Styles for Header Components
import styled from 'styled-components'

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => props.theme.colors.grey1};
  font-size: 0.75rem;
  font-family: ${props => props.theme.fonts.main};
  width: 100%;
  max-width: 16rem;

  label {
    margin-bottom: 0.25rem;
  }

  input,
  textarea {
    font-size:  0.75rem;
    font-weight: 300;
    border: 1px solid ${props => props.theme.colors.purple2};
    font-family: ${props => props.theme.fonts.main};
    margin-bottom: 0.75rem;
    padding: 0.15rem;
    width: 100%;

    &:focus,
    &:hover,
    &:active:focus {
      border: 1px solid ${props => props.theme.colors.purple1};
    }
  }

  textarea { 
    height: 150px;   
    resize: vertical;
  }
`

export const ContactFormButton = styled.button`
  position: relative;
  overflow:hidden;
  z-index: 1;
  transition: 1000ms ease-in-out;
  cursor: pointer;
  color: white;
  border: none;
  font-size:  0.75rem;
  font-weight: 300;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1rem;
  width: 100%;   
  height: 2rem;
  background:  ${props => props.theme.colors.purple2};
  box-shadow: ${props => props.theme.shadows.shadow1}; 

  &:after{
  content:"Submit";
  position:absolute;
  width:100%;
  height:100%;
  left:0;
  text-align:center;
  transition: all 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
  }

  &:before {
    content:"Send Message";
    height:100%;
    width:100%;
    position:absolute;
    color:#383736;
    left:-100%;
    opacity: 0;
    transition: all 1000ms cubic-bezier(0.680, -0.550, 0.265, 1.550); 
  }


  &:hover{
    background: ${props => props.theme.colors.purple1};
    box-shadow: ${props => props.theme.shadows.shadowpurple}; 
  }

  &:hover:before{
    left:0;
    opacity:1;
    color:#fff;
  }
  &:hover:after{
    left:100%;
    opacity:0;
  }
`