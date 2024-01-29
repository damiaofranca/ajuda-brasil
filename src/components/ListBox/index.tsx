import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Listbox, ListboxItem } from "@nextui-org/react";

interface IListboxWrapper {
	children: ReactNode;
}

interface ListBoxProps {
	ariaLabelBox?: string;
	list: {
		key: string;
		url: string;
		name: string;
		startIcon: JSX.Element;
	}[];
}
export const ListboxWrapper: React.FC<IListboxWrapper> = ({ children }) => (
	<div className="w-full p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80  rounded-medium">
		{children}
	</div>
);

export const ListBox: React.FC<ListBoxProps> = ({ list, ariaLabelBox }) => {
	const navigate = useNavigate();

	const iconClasses =
		"text-xl text-default-500 pointer-events-none flex-shrink-0";

	const onNavigate = (url: string) => {
		navigate(url);
	};

	return (
		<ListboxWrapper>
			<Listbox
				variant="faded"
				aria-label={ariaLabelBox}
				itemClasses={{
					base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80 text-gray-50 bg-[#393939]",
				}}
			>
				{list.map((listItem) => (
					<ListboxItem
						key={listItem.key}
						onClick={() => onNavigate(listItem.url)}
						startContent={React.cloneElement(listItem.startIcon, {
							className: iconClasses,
						})}
					>
						{listItem.name}
					</ListboxItem>
				))}
			</Listbox>
		</ListboxWrapper>
	);
};
