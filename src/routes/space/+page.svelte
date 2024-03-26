<script>
    
import Addition from "./Addition.svelte";
import Nested from "./Nested.svelte";
import { store_val } from "./stores.js";
import { Avatar } from '@skeletonlabs/skeleton';
import { AppBar } from '@skeletonlabs/skeleton';
import { FileButton } from '@skeletonlabs/skeleton';
import { FileDropzone } from '@skeletonlabs/skeleton';
import { Ratings } from '@skeletonlabs/skeleton';
import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
import { LightSwitch } from '@skeletonlabs/skeleton';

let  number = 0;

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
let employees = [
    {id: 1, name: 'Ram'},
    {id: 3, name: 'Raju'},
    {id: 2, name: 'Radha'}
];
let count = 0;
$: doubled = count * 2;
$: {
    console.log(`the count is ${count}`)
}

function handleClick() {
    count += 1;
}

function handleMessage(event) {
    alert(event.detail.text);
}

function deleteEmployee() {
     employees = employees.slice(1);
}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Nested nested_var={10} />

<button on:click={handleClick}>
    Clicked {count} { count === 1 ? 'time' : 'times'}
</button>

<p> Doubled is {doubled}</p>

{#if count > 0 }
    <p>Count is greater than 0 and the value of count is {count}</p>
{:else}
    <p> Count is Zero</p>
{/if}

<ul>
{#each days as day, i}
    <li>{i+1} {day}</li>
{/each}
</ul>

<ul>
{#each employees as emp (emp.id)}
    <li>{emp.name}</li>
{/each}
</ul>

<button type="button" class="btn variant-filled" on:click={deleteEmployee}> Delete Employee</button>

<Nested on:message={handleMessage}/>

<hr>

<Addition />

<p> {$store_val}</p>

<div class="bg-primary-500 text-secondary-500">Skeleton</div>

<Avatar src="https://i.pravatar.cc/" />

<AppBar>
	<svelte:fragment slot="lead">Lead</svelte:fragment>
	<svelte:fragment slot="trail">Trail</svelte:fragment>
	<svelte:fragment slot="headline">Heading</svelte:fragment>
</AppBar>

<div class="variant-filled-primary">primary</div>

<FileButton name="files" />


<FileDropzone name="files" />

<Ratings value={3.5} max={5}>
    <svelte:fragment slot="empty">(icon)</svelte:fragment>
    <svelte:fragment slot="half">(icon)</svelte:fragment>
    <svelte:fragment slot="full">(icon)</svelte:fragment>
</Ratings>

<RadioGroup>
	<RadioItem bind:group={number} name="justify" value={0}>123123</RadioItem>
	<RadioItem bind:group={number} name="justify" value={1}>(label)</RadioItem>
	<RadioItem bind:group={number} name="justify" value={2}>(label)</RadioItem>
</RadioGroup>

<ul class="list">
	<li>
		<span>(icon)</span>
		<span class="flex-auto">Skeleton</span>
	</li>
	<!-- ... -->
</ul>