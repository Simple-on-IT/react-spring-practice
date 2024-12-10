import { useTrail, animated } from '@react-spring/web';
import scss from './styles.module.scss';

const UseTrailExample = () => {
  const items = ['💾 Commit', '📤 Push', '🚀 Deploy'];
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <div>
      {trail.map((style, index) => (
        <animated.div
          key={index}
          style={style}
          className={scss.text}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default UseTrailExample;