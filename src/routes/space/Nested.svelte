<script>
import { createEventDispatcher } from "svelte";
import { store_val } from "./stores.js";

export let nested_var = 0;

const dispatch = createEventDispatcher();

function sayBooyah() {
    dispatch('message',{
        text: 'Booyah'
    });
}

function addStoreVal() {
    store_val.update((x) => x + 1);
}

</script>

<p> Nested Component is {nested_var}</p>

<button on:click={sayBooyah}> Booyah </button>
<button on:click={addStoreVal}> Add Store Value</button>
