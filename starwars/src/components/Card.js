import React from "react"
import Characters from "./Character"
import styled from "styled-components"

const Page = styled.div`
    display: flex;
    max-width: 100%;
`;
const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
`;
const Card = (props) => {
    return (
        <Page>
            <CardDiv>
                <img alt = "" src ={props.image}/>
                <InfoDiv>
                    <h1>{props.name}</h1>
                    <h3>{props.species}</h3>
                </InfoDiv>
            </CardDiv>
        </Page>
    )
}
export default Card;