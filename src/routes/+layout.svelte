<script>
	import '../app.pcss';
    import { AppShell } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let currentTile = 0;

	import { HomeSolid } from 'flowbite-svelte-icons';
	import { MessagesSolid } from 'flowbite-svelte-icons';
	import { FileWordSolid } from 'flowbite-svelte-icons';
</script>


<AppShell>
	<svelte:fragment slot="header">
		<div class="m-3">
			<b>Welcome to Tutorial App</b>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft" >

		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">
					<HomeSolid />
				</svelte:fragment>
				<span>Home</span>
			</AppRailAnchor>
			<AppRailAnchor href="/blog" selected={$page.url.pathname === '/blog'}>
				<svelte:fragment slot="lead">
					<MessagesSolid />
				</svelte:fragment>
				<span>Blog</span>
			</AppRailAnchor>
			<AppRailAnchor href="/space" selected={$page.url.pathname === '/space'}>
				<svelte:fragment slot="lead">
					<FileWordSolid />
				</svelte:fragment>
				<span>Space</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<div class="m-3">
		<slot/>
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
