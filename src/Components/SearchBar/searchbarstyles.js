import styled from "styled-components";
const SearchBar=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px 16px 0px;
    gap: 8px;
    width: 320px;
    height: 56px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    position:relative;
`

const Input=styled.input`
    padding:5px;
    text-indent:20px;
    font-size:0.8rem;
    width:304px;
    height:30px;
    margin:10px 0px;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
    box-shadow: 0px 12px 48px rgba(3, 0, 55, 0.15);
    width:90%;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

`

export {SearchBar,Input};