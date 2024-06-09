import styled from 'styled-components';
import background_page from './background-page.jpg';

export const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${background_page});
`;

export const Content = styled.div`
    width:50%;
    background-color: rgba(255,255,255,0.5);
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;