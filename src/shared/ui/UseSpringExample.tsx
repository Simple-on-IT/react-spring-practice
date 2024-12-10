import { useSpring, animated } from '@react-spring/web';
import ChristmasHeader from '../images/header.svg';
import scss from './styles.module.scss';

const UseSpringExample = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateY(-150px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return <animated.div style={styles} >
    <img
      className={scss.image}
      src={ChristmasHeader}
      alt='новогодняя картинка'
    />
  </animated.div>;
};

export default UseSpringExample;