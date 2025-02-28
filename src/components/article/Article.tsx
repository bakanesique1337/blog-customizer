import clsx from 'clsx';

// Сообщаем вебпаку, что этот файл использует это изображение.
import plane from 'src/images/plane.png';
import { Text } from 'src/ui/text';

import styles from './Article.module.scss';
import { FontSize } from 'src/constants/articleProps';

type ArticlePropsType = {
	size?: FontSize;
};

export const Article = ({ size }: ArticlePropsType) => {
	return (
		<article className={clsx(styles.article)}>
			<Text as='h1' size={45} weight={800} uppercase dynamicLite>
				Портрет Западной Швейцарии
			</Text>
			<div className={styles.titleDescription}>
				<Text size={22} weight={800} uppercase align='center' dynamicLite>
					Примитивист Фиштр расписывает новый бюджетный авиалайнер
				</Text>
			</div>
			<img className={styles.image} src={plane} alt='Картинка самолета' />
			<Text dynamic size={size ?? 18} fontStyle='italic'>
				Фото: Hans-Peter Gauster , &quot;Bombardier CSeries CS300 HB-JCA&quot; ©
				2017 CC BY-SA 2.0
			</Text>
			<div className={styles.text}>
				<Text dynamic size={size ?? 18}>
					В&nbsp;конце 2016 года швейцарская авиакомпания Swiss получила свой
					канадский &laquo;Бомбардье CS300&raquo; для полётов малой
					и&nbsp;средней дальности. Чтобы придать новой 145-местной машине
					неповторимую индивидуальность, ливрею заказали живописцу. При условии,
					что эскиз он&nbsp;выполнит в одиночку и&nbsp;лично поправит роспись,
					когда её&nbsp;будут наносить на&nbsp;фюзеляж.
				</Text>
				<Text dynamic size={size ?? 18}>
					Выбор пал на&nbsp;примитивиста Матиаса Форбаша, работающего под
					псевдонимом Фиштр. Ему поставили задачу изобразить всё лучшее
					во&nbsp;франкоговорящей части Швейцарии&nbsp;&mdash; горы, озёра,
					вина, сыры, доброжелательность и свободу. Заказ был выполнен
					в&nbsp;рекордный срок, всего за&nbsp;5&nbsp;месяцев. Самолёт получился
					похожим на&nbsp;самого художника: такой&nbsp;же добродушный и
					с&nbsp;улыбкой до&nbsp;ушей.
				</Text>
				<Text dynamic size={size ?? 18}>
					С мая 2017 года &quot;Бомбардье&quot; носит имя &quot;Швейцарская
					Романдия&quot; и регистрационный номер HB-JCA ; совершает в среднем 4
					коммерческих полёта в сутки. Его можно видеть в
					&quot;Домодедово&quot;, а также в аэропортах Парижа, Валенсии,
					Кракова, Берлина, Вены, Загреба, на на Майорке, Крите и Сицилии.
					Самолёт останется в той же ливрее, пока его купит другая авиакомпания.
				</Text>
			</div>
		</article>
	);
};
