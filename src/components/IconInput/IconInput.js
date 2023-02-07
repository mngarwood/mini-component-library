import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  width: var(--width);
  font-weight: 700;
  color: ${COLORS.gray700};
  padding-bottom: 0;

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const SmallInput = styled(Input)`
  padding-left: 24px;
  height: 24px;

  &:focus {
    outline-offset: 2px;
  }
`

const LargeInput = styled(Input)`
  border-bottom-width: 2px;
  padding-left: 36px;
  height: 36px;
  font-size: 18px;

  &:focus {
    outline-offset: 4px;
  }
`

const MyIcon = styled(Icon)`
  color: ${COLORS.gray700};
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 1px);
  width: ${p => p.size}px;
  pointer-events: none;
  display: flex;
  align-items: center;

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const Input = size === 'small' ? SmallInput : LargeInput;
  
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} style={{
        '--width': width + 'px'
      }} {...delegated} />
      <MyIcon
        id={icon}
        size={size === 'small' ? 16 : 24}
        strokeWidth={size === 'small' ? 1 : 2}
      />
    </Wrapper>
  );
};

export default IconInput;
