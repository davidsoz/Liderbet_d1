import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 5px;
    box-sizing: border-box;

    input {
        cursor: pointer;
    }

    input::before {
        content: "";
        display: flex;
        width: 12px;
        height: 12px;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        border: 2px solid #005473;
        
    }
    
    input::before {
        content: "✓";
        color: white;
        background-color: ${props => props.color};
    }

    label {
        font-weight: 500;
    }
`