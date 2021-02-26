import React from 'react';
import Typography from '@material-ui/core/Typography';
import RubberBand from 'react-reveal/RubberBand';
import Wobble from 'react-reveal/Wobble';
import Button from '@material-ui/core/Button';
import LightSpeed from 'react-reveal/LightSpeed';
import Questions from '../Questions/Questions';

export default function StartQuiz() {
  const [showQuiz, setShowQuiz] = React.useState<boolean>(false);
  return (
    <>
      {!showQuiz && (
        <div style={{ marginTop: 100 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <RubberBand>
              <Typography
                variant="h2"
                component="h2"
                style={{ display: 'flex', textAlign: 'center', margin: 20 }}>
                Lets see <br /> if you can <br /> pass this quiz.
              </Typography>
            </RubberBand>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LightSpeed left>
              <Typography
                variant="h6"
                component="h3"
                style={{ display: 'flex', textAlign: 'center', margin: 20 }}>
                You will have to answer 10 question in 50 secs. <br /> Each question contains 4
                options.
              </Typography>
            </LightSpeed>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
            <Wobble>
              <Button variant="contained" color="primary" onClick={() => setShowQuiz(true)}>
                Start Quiz
              </Button>
            </Wobble>
          </div>
        </div>
      )}
      {showQuiz && <Questions />}
    </>
  );
}
