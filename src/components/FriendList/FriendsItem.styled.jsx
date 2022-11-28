import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-grow: 1;
  width: 250px;
  height: 100px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const OnlineMarker = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
