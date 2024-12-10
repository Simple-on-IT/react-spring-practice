import styles from './MainPage.module.scss';
import MainImage from '../../../shared/images/image.png';
import { Image } from '../../../shared/ui/Image/Image';
import { Title } from '../../../shared/ui/Title/Title';
import { Button } from '../../../shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { Authorization } from '../../../features/Authorization';

export const MainPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsModalOpened(true);
  }, [])
  const onCloseModal = useCallback(() => {
    setIsModalOpened(false);
  }, [])

  return (
    <div className={styles.pageContainer}>
      <Image className={styles.image} width={'340px'} src={MainImage} alt='Изображение страницы' />
      <Title text={'Максимум практики'} />
      <p className={styles.text}>
        Марафон трансформации твоего портфолио
      </p>
      <ul className={styles.buttonsContainer}>
        <li className={styles.button}><Button text='За работу!' onClick={onOpenModal} /></li>
        <li className={styles.button}><Button text='Нет, спасибо' transparent /></li>
      </ul>

      <Modal isOpen={isModalOpened} onClose={onCloseModal}>
        <Authorization />
      </Modal>
    </div>
  )
}