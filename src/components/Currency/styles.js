import styled from "styled-components";

export const Currency = styled.div`
display: flex;
align-items: center;
gap: 10px;
>div {
    border-radius: 14px;
    position: relative;
    width: 45px;
    height: 25px;
    background-color: lightgray;
    cursor: pointer;
    div {
        padding: 0;
        margin: 0;
        position: absolute;
        top: 2.5px;
        left: ${props => props.currency ? '2.5px' : '22.5px'};
        width: 20px;
        height: 20px;
        background-color: #63738e;
        border-radius: 50%;
        transition: left .3s;
    }
}

`