import styled from 'styled-components';
import { color } from 'theme';

const BaseHeading = styled.span`
  margin: 0 0 1.25rem;
  line-height: 1.25;
  font-weight: 300;
  letter-spacing: -1px;
  color: ${color.text};
`;

const H1Styled = styled(BaseHeading)`
  font-size: ${props => props.size || '5rem'};
`;

const H2Styled = styled(BaseHeading)`
  font-size: ${props => props.size || '4rem'};
  margin-bottom: 1rem;
`;

const H3Styled = styled(BaseHeading)`
  font-size: ${props => props.size || '2.8rem'};
  font-weight: 100;
  margin-bottom: 1rem;
  color: ${color.primary.l50};
  letter-spacing: -0.5px;
`;

const H4Styled = styled(BaseHeading)`
  font-size: ${props => props.size || '2.4rem'};
  font-weight: 100;
  margin-bottom: 1rem;
  color: ${color.primary.l50};
  letter-spacing: -0.3px;
`;

const H5Styled = styled(BaseHeading)`
  font-size: ${props => props.size || '1.8rem'};
  font-weight: 100;
  margin-bottom: 1.25rem;
  color: ${color.primary.l50};
  letter-spacing: -0.3px;
`;

const H6Styled = styled(BaseHeading)`
  font-size: ${props => props.size || '1.5rem'};
  font-weight: 100;
  margin-bottom: 1.25rem;
  color: ${color.primary.l50};
  letter-spacing: -0.3px;
`;

export { H1Styled, H2Styled, H3Styled, H4Styled, H5Styled, H6Styled };
