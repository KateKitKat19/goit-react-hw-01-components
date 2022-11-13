import styled from 'styled-components';
import { randomColor } from './GetColor';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  max-width: 560px;
  margin: 10px auto;
  background-color: white;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  margin: 20px 0 10px;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  margin: 10px 0 0;
  padding-left: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${randomColor};
`;

