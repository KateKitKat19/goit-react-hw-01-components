import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: hsla(0, 0%, 0%, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead`
  font-size: 18px;
  font-weight: 700;
`;

export const HeadCell = styled.th`
  margin: 0 auto;
  width: calc(500px / 3);
  flex-grow: 1;
`;

export const TableRow = styled.tr`
  height: 25px;
`;

export const TableData = styled.td`
  text-align: center;
  width: calc(500px / 3);
  flex-grow: 1;
`;
