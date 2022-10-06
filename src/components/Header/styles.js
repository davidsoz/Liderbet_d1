import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 14px;
    border-radius: 3px;
    align-items: center;
    justify-content: space-between;
    background-color: #E3E8F1;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    .checkboxes {
        display: flex;
        gap: 16px;
    }
    .search-input {
        display: flex;
        gap: 10px;
        align-items: center;
        img {
            height: 20px;
            cursor: pointer;
        }
    }
`
