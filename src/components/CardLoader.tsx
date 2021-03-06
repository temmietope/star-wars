import React from 'react';
import { ResourceCard as Card } from '../theme/styles';
import { ReactComponent as LoaderIcon } from '../assets/icons/starwars-head.svg';

export const CardLoader = () => {
  return (
    <div className="loader__wrapper">
      <Card component="loader">
        <div className="card__avatar">
          <LoaderIcon />
        </div>
      </Card>
    </div>
  );
};
