<script>
import Addition from "./Addition.svelte";
import Nested from "./Nested.svelte";
import { store_val } from "./stores.js";

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

<button on:click={deleteEmployee}>
    Delete Employee
</button>

<Nested on:message={handleMessage}/>

<hr>

<Addition />

<p> {$store_val}</p>