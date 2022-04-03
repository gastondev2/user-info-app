import styled from 'styled-components';
import { CardBase } from '../components/Card/styles';
import { LoadingSpinnerBase } from '../components/LoadingSpinner/styles';
import { media } from '../styles/media';
import colors from '../styles/colors';

export const UsersBase = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 20px;
  background-color: ${colors.black};

  ${media.tablet} {
    justify-content: center;
  }

  ${media.desktop} {
    justify-content: flex-start;
    margin: auto;
    max-width: 1300px;
  }

  ${CardBase} {
    margin: 15px;
  }

  ${LoadingSpinnerBase} {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px);
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  width: 100%;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-weight: 900;

  ${media.tablet} {
    font-size: 80px;
  }
`;
