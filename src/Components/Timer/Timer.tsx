import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default function Timer({ onCountZero }: { onCountZero: () => void }) {
  const [counter, setCounter] = React.useState<number>(50);

  React.useEffect(() => {
    const timer: any = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      onCountZero();
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div
      style={{
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        padding: '8px',
        background: '#fff',
        border: '2px solid #666',
        color: '#666',
        textAlign: 'center',
        font: '32px Arial, sans-serif',
        marginTop: 10,
        marginLeft: 10,
      }}>
      <Bounce right>{counter}</Bounce>
    </div>
  );
}
