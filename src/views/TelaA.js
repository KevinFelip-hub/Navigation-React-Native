import React from 'react';
import TextoCentral from '../components/TextoCentral';
import PassoStack from '../components/PassoStack';

export default props => {
  return (
    <PassoStack avancar="TelaB">
      <TextoCentral corFundo="#e53935">Tela</TextoCentral>
    </PassoStack>
  );
};
