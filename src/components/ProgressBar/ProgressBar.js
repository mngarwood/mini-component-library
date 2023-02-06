/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  width: 100%;
  max-width: 185px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props['aria-valuenow']}%;
    background-color: ${COLORS.primary};
  }
`

const BarWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  height: calc(100% - 8px);
  width: calc(100% - 8px);
  overflow: hidden;
  border-radius: 4px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.value}%;
    background-color: ${COLORS.primary};
`

const SmallWrapper = styled(Wrapper)`
  height: 8px;
`

const MediumWrapper = styled(Wrapper)`
  height: 12px;
`

const LargeWrapper = styled(Wrapper)`
  height: 24px;
  border-radius: 8px;

  &::before {
    content: none;
  }
`

const ProgressBar = ({ value, size }) => {
  let markup = null;

  if ( size === 'small' ) {
    markup =  <SmallWrapper role="progressbar" aria-valuenow={value} />
  } else if ( size === 'medium' ) {
    markup =  <MediumWrapper role="progressbar" aria-valuenow={value} />
  } else if ( size === 'large' ) {
    markup =  <LargeWrapper role="progressbar" aria-valuenow={value}><BarWrapper value={value} /></LargeWrapper>
  }
  
  return markup;
};

export default ProgressBar;
