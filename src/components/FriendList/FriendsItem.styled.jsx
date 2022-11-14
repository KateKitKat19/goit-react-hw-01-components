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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
