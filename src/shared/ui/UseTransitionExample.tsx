import { useTransition, animated } from '@react-spring/web';
import { useState } from 'react';

const NewYearTransition = () => {
  const [show, setShow] = useState(false);

  const transition = useTransition(show, {
    from: { opacity: 0, transform: 'scale(0.5)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.5)' },
    config: { tension: 200, friction: 15 },
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => setShow(!show)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#ff5757',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        🎄 Toggle Magic 🎁
      </button>
      <div style={{ marginTop: '20px' }}>
        {transition((style, item) =>
          item ? (
            <animated.div
              style={{
                ...style,
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#4CAF50',
                background: 'linear-gradient(90deg, #FFDF00, #FF8C00)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              🎅 Ho-ho-ho! 🎁
            </animated.div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default NewYearTransition;
