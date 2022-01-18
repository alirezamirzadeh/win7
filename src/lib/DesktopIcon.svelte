<script>
// @ts-nocheck

    import {newSelected} from '../stores/selected'
    export let item;

    const handlClick =(id) => {
        newSelected(id)
    }
</script>


<div draggable=true class:selected={item.selected}  on:click={handlClick(item.id)}>
    <img  draggable=false src="images/{item.name.toLowerCase()}.png" alt="" height="100%" width="60px">
    <img  draggable=false class="arrow" src="images/arrow.png" alt="">
    <p>{item.name}</p>
</div>




<style>
     div {
        width: 130px;
        color: #fff;
        font-size: 1.1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        align-items: center;
        border:  1px solid transparent;
        position: relative;
        justify-content: center;
        padding: 10px 0 10px 0;
        z-index: 10;
    }
    div:hover {

        border: solid 1px rgba(255,255,255, 0.2);
    background: linear-gradient(
    180deg
    , rgba(250,250,250, 0.15) 0%, rgba(200,200,200, 0.15) 100% ); 
    }
    .arrow {
        position: absolute;
        top: 35px ;
        left: 40px;    user-select: none;
        

    }
    p {
        margin: 0;
        padding-top: 5px;
        user-select: none;
        text-shadow: 0 0 2px rgb(0 0 0 / 80%);
        

    }
    .selected {
        background: rgba(26,86,148, 0.4);
        border: solid 1px rgba(26,86,148, 0.6);
        pointer-events: none; 
            }
</style>