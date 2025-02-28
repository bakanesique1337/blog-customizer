import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import React, { FormEvent, ReactNode, useRef, useState } from 'react';
import { useOutsideClickClose } from 'components/article-params-form/hooks/useOutsideClickClose';
import { Text } from 'src/ui/text';

type ArticleParamsFormProps = {
	clear: () => void;
	apply: () => void;
	children: ReactNode;
};

export const ArticleParamsForm = ({
	clear,
	apply,
	children,
}: ArticleParamsFormProps) => {
	const sidebarRef = useRef<HTMLElement>(null);

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		setSideBarVisibility();
	};

	useOutsideClickClose({
		isOpen,
		rootRef: sidebarRef,
		toggle: toggleSidebar,
	});

	const setSideBarVisibility = () => {
		if (sidebarRef.current) {
			sidebarRef.current.style.transform = isOpen
				? 'translate(-616px)'
				: 'none';
		}
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleSidebar} />
			<aside className={styles.container} ref={sidebarRef}>
				<form
					className={styles.form}
					onSubmit={(event: FormEvent) => {
						event.preventDefault();
						apply();
					}}>
					<Text as='h2' size={31} weight={800} fontStyle='normal' uppercase>
						Задайте параметры
					</Text>
					{children}
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								clear();
							}}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={toggleSidebar}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
