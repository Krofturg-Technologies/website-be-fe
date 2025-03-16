"use client";

import Link from "next/link";
import { BeatLoader } from "react-spinners";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ButtonProps } from "../../../../types/global/ButtonProps";

const Button: React.FC<ButtonProps> = ({
	isLoading = false,
	disabled,
	theme = "primary",
	icon = null,
	href,
	size = "md",
	underline = true,
	outline = false,
	isExternal = false,
	children,
	tag,
	className,
	type = "button",
	...rest
}) => {
	const router = useRouter();

	const pathname = usePathname();

	const buttonTheme = (theme: string) => {
		switch (theme) {
			case "primary":
				return "bg-primary disabled:opacity-70 text-secondary rounded-lg";
			case "plain":
				return "";
			case "outline":
				return "bg-transparent text-secondary border border-secondary rounded-lg";
			case "secondary":
				return "bg-secondary text-secondary rounded-lg";
			default:
				return "bg-primary text-secondary border-2 border-transparent rounded-lg";
		}
	};

	const LinkTheme = (theme: string) => {
		switch (theme) {
			case "primary":
				return "text-primary";
			case "secondary":
				return "text-secondary";
			case "plain":
				return "";
			default:
				return "text-primary";
		}
	};

	const buttonSize = (size: string) => {
		switch (size) {
			case "sm":
				return "px-4 py-2 h-9";
			case "md":
				return "px-6 py-3 h-11";
			case "lg":
				return "py-4 h-[59.98px]";
			case "xl":
				return "px-10 py-5";
			default:
				return "px-6 py-3";
		}
	};

	const iconColor = (theme: string) => {
		switch (theme) {
			case "primary":
				return "#fff";
			case "outline":
				return "#5645F5";
			default:
				return "#fff";
		}
	};

	if (tag === "a") {
		return (
			<Link
				href={
					isExternal
						? !(href?.includes("https") || href?.includes("http"))
							? `https://${href}`
							: href
						: href || pathname
				}
				target={isExternal ? "_blank" : "_self"}
				className={cn(LinkTheme(theme), { underline: underline }, className)}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			disabled={disabled || isLoading}
			className={cn(
				"flex items-center text-sm hover:scale-[1.015] justify-center transition-all ease-in text-center font-medium disabled:cursor-not-allowed",
				buttonTheme(theme),
				buttonSize(size),
				className
			)}
			{...rest}>
			{isLoading ? (
				<BeatLoader color={iconColor(theme)} loading={isLoading} size={12} />
			) : (
				children
			)}
		</button>
	);
};

export default Button;
