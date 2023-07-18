import PropTypes from 'prop-types';
import {SectionContainer, Title} from './Section.styled'

export const Section = ({title, children}) => {
  return (
    <>
      <SectionContainer>
        <Title><b>{title}</b></Title>
        {children}
      </SectionContainer>
    </>
  );
};

Section.prototype ={
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}
