import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  background-color: rgb(245, 243, 245);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Image = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const UserInfo = styled.p`
  font-size: 14px;
  font-style: italic;
  margin: 0;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 5px 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemName = styled.span`
  font-size: 14px;
`;

export const ItemValue = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
