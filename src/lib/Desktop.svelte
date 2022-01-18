<script>

import {itemsIcon} from '../stores/selected';
import DesktopIcon from './DesktopIcon.svelte';

</script>

<section >
    {#each $itemsIcon as item,i (i) }
        <DesktopIcon {item} />
    {/each}

</section>


<style>

    section 
    {
        bottom: 50px;
        display:flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        left: 1rem;
        top: 1rem;
        justify-content: flex-start;
        width: fit-content; 

    }
   
</style>