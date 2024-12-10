import { useSpring, useChain, useSpringRef, animated } from '@react-spring/web';
import scss from './styles.module.scss';

const UseChainExample = () => {
  const firstRef = useSpringRef();
  const firstStyle = useSpring({
    ref: firstRef,
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)', color: 'green' },
  });

  const secondRef = useSpringRef();
  const secondStyle = useSpring({
    ref: secondRef,
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)', color: 'red' },
  });

  useChain([firstRef, secondRef], [0, 0.5]);

  return (
    <div className={scss.chainContainer}>
      <animated.div style={firstStyle}>
        <h2>Сборка в процессе...</h2>
      </animated.div>
      <animated.div style={secondStyle}>
        <h2>Готово к деплою!</h2>
      </animated.div>
    </div>
  );
};

export default UseChainExample;
