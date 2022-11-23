import React from 'react';
import { Card } from './Card';
import { styles } from './styles';

export const Comparison: React.FC = () => {
  return (
    <div style={styles.cardContainer}>
      <Card onClick={() => console.log('chose 1')} item='one' />
      <Card onClick={() => console.log('chose 2')} item='two' />
    </div>
  );
};
