<script>
import Intro from "./lib/Intro.svelte";
import Main from "./lib/Main.svelte";

let selected = false

function selection(e) {
  selected = e.detail
}
</script>



  {#if !selected}
    <Intro on:selection={selection}/>
  {:else}
    <Main />
  {/if}



<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: transparent;

  }
 
</style>