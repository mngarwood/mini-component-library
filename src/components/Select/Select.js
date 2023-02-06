import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const SelectWrapper = styled.div`
  position: relative;
`

const FauxSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  height: 43px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0 16px;
  pointer-events: none;
`

const RealSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  &:focus + ${FauxSelect} {
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover + ${FauxSelect} {
    color: ${COLORS.black};
  }
`

const MyIcon = styled(Icon)`
  margin-left: 20px;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <RealSelect value={value} onChange={onChange}>
        {children}
      </RealSelect>
      <FauxSelect>{displayedValue} <MyIcon id="chevron-down" size={24} strokeWidth={2} /></FauxSelect>
    </SelectWrapper>
  );
};

export default Select;
