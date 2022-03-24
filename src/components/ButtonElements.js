import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
   background: #FFFFFF;
   box-shadow: 0px 12px 20px -8px rgba(0, 0, 0, 0.04);
   border-radius: 4px;

   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;

   text-align: center;
   letter-spacing: -0.01em;

   color: #023AFF;

  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#023AFF')};
    color: ${({ primary }) => (primary ? '#023AFF' : 'white')};
  }
`;
