import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    input{
        width: 300px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #C4C4C4;
        outline: none;
        padding-left: 10px;
    }

`
export const ImgLogo = styled.img`
    max-width: 300px;
`
export const Fieldset = styled.fieldset`
    display: flex;
    justify-content: center;
    border: none;
    legend{
        text-align: center;
    }
`
export const Span = styled.span`
    color: red;
    position: absolute;
    margin-top: 50px;
`
export const Button = styled.button`
    width: 300px;
    height: 40px;
    border: none;
    cursor: pointer;
    background-color: #1E90FF;
    color: #FFF;
    font-weight: bold;
    border-radius: 5px;
`