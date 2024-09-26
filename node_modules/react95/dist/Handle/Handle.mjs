import styled from 'styled-components';
import { getSize } from '../common/utils/index.mjs';

const Handle = styled.div`
  ${({ theme, size = "100%" }) => `
  display: inline-block;
  box-sizing: border-box;
  height: ${getSize(size)};
  width: 5px;
  border-top: 2px solid ${theme.borderLightest};
  border-left: 2px solid ${theme.borderLightest};
  border-bottom: 2px solid ${theme.borderDark};
  border-right: 2px solid ${theme.borderDark};
  background: ${theme.material};
`}
`;
Handle.displayName = "Handle";

export { Handle };
