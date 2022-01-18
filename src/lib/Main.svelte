<script>
// @ts-nocheck

import {removeSelect} from '../stores/selected';

import Desktop from "./Desktop.svelte";
import Taskbar from "./Taskbar.svelte";

const handlerRemove =() => {
    removeSelect()
}

</script>

<main>
    <Desktop />
    <Taskbar />
</main>

<img on:click={handlerRemove} src="images/backgroundwin.jpeg" alt="">




<style>
    img {
        background-repeat: no-repeat;
        background-size: contain ;        
        position: fixed;
        width: 100%;
        z-index: -100;
        height: 100%;
        
    }

</style>