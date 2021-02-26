import React from 'react';
import QueAnsUI from '../QueAnsUI/QueAnsUI';
import Result from '../Result/Result';
import Timer from '../Timer/Timer';

export default function Questions() {
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const [ans, setAns] = React.useState<string[]>([]);
  function onCountZero() {
    setShowResult(true);
  }
  return (
    <>
      {!showResult && (
        <>
          <Timer {...{ onCountZero }} />
          <QueAnsUI {...{ setAns, setShowResult }} />
        </>
      )}
      {showResult && <Result {...{ ans }} />}
    </>
  );
}
