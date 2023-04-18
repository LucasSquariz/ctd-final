import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  height: 100%;
  display: grid;
  min-height: 1215px;
  grid-template-columns: 2.5fr 10fr;
  justify-content: space-between;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
  `};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  margin: 104px 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};

  @media (max-width: 600px) {
    margin: 104px 20px 0 20px;
  }
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  width: 100%;
  background: #ffffff;
  padding: 22px 32px 32px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: black;
  margin-bottom: 18px;

  @media (max-width: 476px) {
    font-size: 14px;
  }

  @media (max-width: 374px) {
    font-size: 12px;
  }
`;

export const DivRow = styled.div`
  display: flex;
  gap: 61px;
  margin-top: 9px;
  @media (max-width: 658px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const UserData = styled.p`
  width: 155px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #201f22;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Data = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #cecece;
  margin-top: 7px;
`;

export const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivAdmPayment = styled.div`
  width: 100%;
  display: flex;
  padding: 0 32px;
  align-items: center;
  justify-content: space-between;
  min-height: 116px;
  background: #c1fd35;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 658px) {
    min-height: 67px;
    padding: 0 20px;
  }
`;

export const DivCVU = styled.div`
  display: flex;
  width: 100%;
  min-height: 264px;
  flex-direction: column;
  background: #201f22;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 40px 35px 30px 35px;

  @media (max-width: 658px) {
    font-size: 14px;
    padding: 18px 25px 30px 25px;
  }
`;

export const TitleDivCVU = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 39px;

  @media (max-width: 658px) {
    font-size: 12px;
  }
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CVUTitle = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #c1fd35;

  @media (max-width: 658px) {
    font-size: 16px;
  }
`;

export const CVUData = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 117.68%;
  color: #eeeaea;

  @media (max-width: 658px) {
    font-size: 14px;
  }
`;
