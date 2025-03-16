export type ButtonTheme =
	| "primary"
	| "secondary"
	| "plain"
	| "outline"
	| "distorted";

export type ButtonProps = {
	type?: "button" | "submit" | "reset";
	isLoading?: boolean;
	disabled?: boolean;
	theme?: ButtonTheme;
	tag?: "button" | "a";
	isExternal?: boolean;
	outline?: boolean;
	icon?: string;
	href?: string;
	size?: "sm" | "md" | "lg" | "xl" | "plain";
	underline?: boolean;
	className?: string;
	children: string | React.ReactNode;
} & Omit<React.ComponentProps<"button">, "children"> &
	Omit<React.ComponentProps<"a">, "children">;
