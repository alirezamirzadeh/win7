<script>
    	import { onMount } from 'svelte';
import Menu from './Menu.svelte';

    let time =  new Date()

    $: timeNow = time.toLocaleTimeString();

    $: dateToday = time.toLocaleDateString();

    onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

    let menu = false

    const toggleMenu =() => {
        menu = !menu
    }
</script>
<nav>
    <img class="logoTaskbar" on:click={toggleMenu} src="images/logoTaskbar.png" alt="" height="100%" >
    <div>
        <a href="https://github.com/alirezamirzadeh" target="_blank" class="box__github"><img src="images/github.png" alt="" height="20px"></a>
        <span class="box__time">
            <span class="number">{timeNow}</span>
            <span class="number">{dateToday}</span>
        </span>
        <span class="show__desktop"></span>
    </div>
</nav>

{#if menu}
 <Menu />
{/if}

<style>
    nav{
        height: 50px;
        width: 100%;
        background-color: rgba(0, 100, 255, .7);
        position: fixed;
        border-top: 1px solid #555;
        backdrop-filter: blur(2px);
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99999;
        
    }
    .logoTaskbar {
        padding-left:.5rem;
       
    }

    .logoTaskbar:hover {
        filter: brightness(1.2);
    }

    div {
        display: flex;
        justify-content: flex-end;
        min-width: 220px;

         gap: 1.2rem;
         background: linear-gradient(
        270deg
        , rgba(10,10,10, 0.3) 0%, rgba(10,10,10, 0.3) 70%, transparent 100% );
    }
    .box__github {
        background-color: #fff;
        height: 22px;
        border-radius: .5rem;
        padding: .2rem;
        display: flex;
        flex-direction: row;
        align-self: center;
        cursor: pointer;
        
    }

    .show__desktop {
        min-width: .9rem;
        height: 50px;
        background: linear-gradient(
        150deg
        , rgba(250,250,250, 0.2) 0%, rgba(200,200,200, 0.2) 15%, rgba(10,10,10, 0.3) 30%, rgba(10,10,10, 0.3) 80%, rgba(200,200,200, 0.3) 100% );
        border-left: solid 1px rgba(200,200,200, 0.3);
    }

    .box__time {
        display: flex;
        flex-direction: column;
        gap: 5px;
        height: 50px;
        justify-content: center;
        align-items: center;
    }

    .number {
        color: #fff;
        font-size: 1.1rem;
        font-weight: 500;
        text-shadow: 0 0 2px rgb(0 0 0 / 80%);
    }
    
</style>