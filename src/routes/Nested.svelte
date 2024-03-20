<script>
import { createEventDispatcher } from "svelte";

export let nested_var = 0;

const dispatch = createEventDispatcher();

function sayBooyah() {
    dispatch('message',{
        text: 'Booyah'
    });
}
</script>

<p> Nested Component is {nested_var}</p>

<button on:click={sayBooyah}> Booyah </button>
