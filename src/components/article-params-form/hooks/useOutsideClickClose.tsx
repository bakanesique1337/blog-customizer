import { useEffect } from 'react';

type UseToggleSidebarVisibility = {
	isOpen: boolean;
	rootRef: React.RefObject<HTMLElement>;
};

export const useToggleSidebarVisibility = ({
	isOpen,
	rootRef,
}: UseToggleSidebarVisibility) => {
	useEffect(() => {
		if (rootRef.current) {
			rootRef.current.style.transform = isOpen ? 'translate(-616px)' : 'none';
		}
	}, [isOpen]);
};
