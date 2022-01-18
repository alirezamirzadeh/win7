<script>
import {createEventDispatcher} from 'svelte'
import Button from "./Button.svelte";
import {useFullscrren} from '../hooks/useFullscreen'

const dispatch = createEventDispatcher()

    function selected() {
        dispatch('selection',true)
    }

    function fullscreen() {
        selected()
        useFullscrren()

    }

</script>
<img src="images/win.jpeg" alt="">
<div>
  <Button text="Start Normally" handler={selected} />
  <Button text="Start Fullscreen" handler={fullscreen} />

</div>


<style>
     img{
    width: 100%;
    min-height: 100vh;
    position: fixed;
    left: 0;
    bottom: 0;
    background-position: center;
    background-size: contain;
    z-index: -99;
  }
  div {
    margin-inline: auto;
    max-width: 380px;
    gap: 20px; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }
</style>