import { CSSProperties } from "react";
import { Cardlike } from "../types"
import { AutoCard } from "./AutoCard";
import styled from 'styled-components';

const CardLinkContainer = styled.span`
& a {
  text-decoration: none;
}
`;

export const CardLink = (props: {
  card: Cardlike;
  style?: CSSProperties;
}) => (
  <CardLinkContainer>
    <a href={'#' + props.card.id}>{'[go]'}</a>
    {' '}
    <span style={props.style ?? {}}>
      <AutoCard card={props.card} />
    </span>
  </CardLinkContainer>
);
