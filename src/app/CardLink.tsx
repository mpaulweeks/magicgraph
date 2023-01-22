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
}) => (
  <CardLinkContainer>
    <a href={'#' + props.card.id}>{'>>'}</a>
    {' '}
    <AutoCard card={props.card} />
  </CardLinkContainer>
);
