import { createRoot } from 'react-dom/client';
import React, { StrictMode, CSSProperties, useState, useRef } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	fontSizeRecordMap,
	OptionType,
	StateFieldType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const [newArticleState, setNewArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	const mainStyle = {
		'--font-family': articleState.fontFamilyOption.value,
		'--font-size': articleState.fontSizeOption.value,
		'--font-color': articleState.fontColor.value,
		'--container-width': articleState.contentWidth.value,
		'--bg-color': articleState.backgroundColor.value,
	} as CSSProperties & { [key: string]: string };

	const mainRef = useRef<HTMLElement>(null);

	const handleClearForm = () => {
		setArticleState(defaultArticleState);
		setNewArticleState(defaultArticleState);
	};

	const handleApplyForm = () => {
		setArticleState(newArticleState);
		console.log(newArticleState);
	};

	const handleChangeStyle = (
		stateField: StateFieldType,
		option: OptionType
	) => {
		setNewArticleState({
			...newArticleState,
			[stateField]: option,
		});
	};

	return (
		<main className={clsx(styles.main)} style={mainStyle} ref={mainRef}>
			<ArticleParamsForm clear={handleClearForm} apply={handleApplyForm}>
				<Select
					title='Шрифт'
					selected={newArticleState.fontFamilyOption}
					options={fontFamilyOptions}
					onChange={(option) =>
						handleChangeStyle('fontFamilyOption', option)
					}></Select>
				<RadioGroup
					title='Размер шрифта'
					name='font-size'
					selected={newArticleState.fontSizeOption}
					options={fontSizeOptions}
					onChange={(option) =>
						handleChangeStyle('fontSizeOption', option)
					}></RadioGroup>
				<Select
					title='Цвет шрифта'
					selected={newArticleState.fontColor}
					options={fontColors}
					onChange={(option) =>
						handleChangeStyle('fontColor', option)
					}></Select>
				<Separator></Separator>
				<Select
					title='Цвет фона'
					selected={newArticleState.backgroundColor}
					options={backgroundColors}
					onChange={(option) =>
						handleChangeStyle('backgroundColor', option)
					}></Select>
				<Select
					title='Ширина контента'
					selected={newArticleState.contentWidth}
					options={contentWidthArr}
					onChange={(option) =>
						handleChangeStyle('contentWidth', option)
					}></Select>
			</ArticleParamsForm>
			<Article size={fontSizeRecordMap[articleState.fontSizeOption.value]} />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
