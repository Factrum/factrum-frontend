import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import MedicationCard from './MedicationCard';
import { colors } from '../assets/ui/styles';

const MedicationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const slideInAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ListHeader = styled.h4`
  margin: 0;
  font-size: 14px;
  text-align: start;
  color: ${colors.gray900};
  border-top: 1px solid ${colors.gray500};
  border-bottom: 1px solid ${colors.gray500};
  padding: 4px 1px;
`

const MedicationList = ({ order, nodes, onCardClick, selectedNode }) => {
  const sortedNodes = selectedNode
    ? [...nodes.filter(node => node.id === selectedNode), ...nodes.filter(node => node.id !== selectedNode)]
    : nodes;

  return (
    <MedicationContainer>
      <ListHeader>처방({order})</ListHeader>
      {sortedNodes.map((node) => (
        <CSSTransition
          key={node.id}
          timeout={300}
          classNames="fade"
        >
          <MedicationCard 
            key={node.id} 
            id={node.id}
            labelKo={node.labelKo}
            labelEn={node.labelEn}
            drugId={node.drugId}
            drugType={node.drugType}
            efficacy={node.efficacy}
            onClick={() => onCardClick(node.id)}
            className={selectedNode === node.id ? 'highlight' : ''}
          />
        </CSSTransition>
      ))}
    </MedicationContainer>
  );
};

export default MedicationList;
