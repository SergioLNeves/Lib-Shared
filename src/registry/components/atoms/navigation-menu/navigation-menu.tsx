import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type * as React from "react";

import { cn } from "@/lib/utils";

import styles from "./navigation-menu.module.css";

interface NavigationMenuProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {
	viewport?: boolean;
}

function NavigationMenu({
	className,
	children,
	viewport = true,
	...props
}: NavigationMenuProps) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu"
			data-viewport={viewport}
			className={cn(styles.navigationMenu, className)}
			{...props}
		>
			{children}
			{viewport && <NavigationMenuPrimitive.Viewport />}
		</NavigationMenuPrimitive.Root>
	);
}

interface NavigationMenuListProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {}

function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn(styles.navigationMenuList, className)}
			{...props}
		/>
	);
}

interface NavigationMenuItemProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {}

function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn(styles.navigationMenuItem, className)}
			{...props}
		/>
	);
}

interface NavigationMenuTriggerProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {}

function NavigationMenuTrigger({
	className,
	children,
	...props
}: NavigationMenuTriggerProps) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cn(styles.navigationMenuTrigger, className)}
			{...props}
		>
			{children}
		</NavigationMenuPrimitive.Trigger>
	);
}

interface NavigationMenuContentProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.Content> {}

function NavigationMenuContent({
	className,
	...props
}: NavigationMenuContentProps) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cn(styles.navigationMenuContent, className)}
			{...props}
		/>
	);
}

interface NavigationMenuViewportProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.Viewport> {}

function NavigationMenuViewport({
	className,
	...props
}: NavigationMenuViewportProps) {
	return (
		<div className={cn(styles.navigationMenuViewportWrapper, className)}>
			<NavigationMenuPrimitive.Viewport
				data-slot="navigation-menu-viewport"
				className={cn(styles.navigationMenuViewport, className)}
				{...props}
			/>
		</div>
	);
}

interface NavigationMenuLinkProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {}

function NavigationMenuLink({ className, ...props }: NavigationMenuLinkProps) {
	return (
		<NavigationMenuPrimitive.Link
			data-slot="navigation-menu-link"
			className={cn(styles.navigationMenuLink, className)}
			{...props}
		/>
	);
}

interface NavigationMenuIndicatorProps
	extends React.ComponentProps<typeof NavigationMenuPrimitive.Indicator> {}

function NavigationMenuIndicator({
	className,
	...props
}: NavigationMenuIndicatorProps) {
	return (
		<NavigationMenuPrimitive.Indicator
			data-slot="navigation-menu-indicator"
			className={cn(styles.navigationMenuIndicator, className)}
			{...props}
		>
			<div className={styles.navigationMenuIndicatorArrow} />
		</NavigationMenuPrimitive.Indicator>
	);
}

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
};
