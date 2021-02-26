import React from 'react';
import { QueAnsArray } from '../../QA/QA';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

export default function QueAnsUI({
  setAns,
  setShowResult,
}: {
  setAns: React.Dispatch<React.SetStateAction<string[]>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [i, setI] = React.useState<number>(0);

  function onAnswer(opt: string) {
    i < 9 && setI(i + 1);
    i == 9 && setShowResult(true);
    setAns((old) => [...old, opt]);
  }

  return (
    <Fade bottom>
      <div style={{ marginTop: 100 }}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>
          Q. {QueAnsArray[i].id}: {QueAnsArray[i].que}
        </h2>
        {QueAnsArray[i].options.map((opt: string, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', margin: 40 }}>
            <Button onClick={() => onAnswer(opt)} variant="contained" color="primary">
              {opt}
            </Button>
          </div>
        ))}
      </div>
    </Fade>
  );
}
