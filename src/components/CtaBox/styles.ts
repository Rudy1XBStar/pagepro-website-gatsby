import styled from 'styled-components';

const variables = {
  width: '35rem',
};

const CtaBoxStyled = styled.div`
  max-width: ${variables.width};
  width: 100%;
`;

const CtaBoxHeaderStyled = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.small};
  margin-bottom: 3.5rem;
`;

const CtaBoxMarkStyled = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.red};
`;

const CtaBoxTextStyled = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  line-height: ${({ theme }) => theme.lineHeights.big};
  margin-bottom: 3.5rem;
`;

const CtaBoxActionsStyled = styled.div`
  display: flex;
  .button:not(:last-child) {
    margin-right: 2rem;
  }
`;

export { CtaBoxStyled, CtaBoxHeaderStyled, CtaBoxMarkStyled, CtaBoxTextStyled, CtaBoxActionsStyled };