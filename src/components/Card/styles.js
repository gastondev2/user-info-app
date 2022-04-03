import styled from 'styled-components';
import { media } from '../../styles/media';
import colors from '../../styles/colors';

export const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${colors.grey1};
  color: ${colors.white};
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  width: 100%;

  ${media.tablet} {
    flex-direction: row;
    width: 600px;
    height: 220px;
  }
`;

export const Image = styled.img`
  ${media.tablet} {
    flex: 0 1 auto;
    width: 40%;
  }
`;

export const Info = styled.div`
  display: flex;
  border: none;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px;

  flex: 1 1 auto;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 8px;
`;

export const LastName = styled.div`
  font-size: 14px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  color: ${colors.grey2};
  font-size: 16px;
  margin-bottom: 4px;
`;

export const Value = styled.div`
  color: ${colors.white};
  font-size: 18px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
