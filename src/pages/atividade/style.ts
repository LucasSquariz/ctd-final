import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  height: 100%;
  display: grid;
  min-height: 1215px;
  grid-template-columns: 2.5fr 10fr;

  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
  `};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
`;

export const ContentContainer = styled.div`
  margin: 104px 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};

  @media (max-width: 600px) {
    margin: 104px 20px 0 20px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 32px;
`;

export const SearchBarLabel = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`;

export const FilterContainer = styled.div`
  width: 192px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.green};
    border-radius: ${theme.border.radius};
  `}
`;

export const FilterButton = styled.button`
  border: none;
  cursor: pointer;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.green};
    border-radius: ${theme.border.radius};
  `}
`;

export const SearchBarInput = styled.input`
  padding: 20px;
  border: none;
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.colors.gray[400]};
    border-radius: ${theme.border.radius};
  `}
`;

export const ActivityContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  height: 100%;
  margin-top: 32px;
  padding: 32px;
  flex-wrap: nowrap;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`;

export const ActivityTitle = styled.h1`
  border-bottom: 0.0625rem solid black;
  margin: 16px;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;

export const MoreActivities = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const MoreActivitiesTitle = styled.h1`
  display: flex;
  justify-content: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export default {};
