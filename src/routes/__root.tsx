import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import "../styles.css";
import "../lib/globals.css";

export const Route = createRootRoute({
	component: () => (
		<>
			<Outlet />
			<TanStackDevtools
				config={{
					position: "bottom-left",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</>
	),
});
