import PropTypes from 'prop-types';
import {SectionContainer, Title} from './Section.styled'

export const Section = ({title, totalHits, children}) => {
  return (
    <>
      <SectionContainer>
        <Title><b>{title}</b>:{totalHits}movies</Title>
        {children}
      </SectionContainer>
    </>
  );
};

Section.prototype ={
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}
