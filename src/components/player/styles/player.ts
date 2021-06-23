import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`;

export const Button = styled.button`
    background-color: #e50914;
    border-color: #ff0a10;
    border-radius: 10%;
    width: 114px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a1;
    }
`;
