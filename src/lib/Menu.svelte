<script>
    import {itemsIcon} from '../stores/selected';
    import Items from '../utils/ItemsMenu'
</script>


<menu>
    <div class="left__nav">
        <div class="box__nav">
           {#each $itemsIcon as item (item.id) }
               <div class="item__nav">
                <img  src="images/{item.name.toLowerCase()}.png" height="50px" alt="">
                   <span class="name__nav">{item.name}</span>
               </div>
           {/each}
            </div>
        <input placeholder="Search programs and files">
    </div>
    <div class="right__nav">
        {#each Items as item,i (i) }
        <div class="box__item">
            <span class="item">{item}</span>
        </div>
         {/each}
    </div>
</menu>



<style>
    menu{
        bottom: 30px;
        z-index: 9999;
        left: 0;
        position: absolute;
        display: flex;
        background-color: red;
        background: linear-gradient(
         180deg
        , rgba(250,250,250, 0.1) 0%, rgba(250,250,250, 0.1) 40%, rgba(140,140,140, 0.1) 43%, rgba(170,170,170, 0.1) 100% );
        backdrop-filter: blur(8px) brightness(0.5);
        box-shadow: 0 0 0 1px rgb(180 180 180 / 50%), 0 0 8px 3px rgb(10 10 10 / 30%);
        border-radius: 8px;
        padding: 10px;
        height: 600px;
    }

    .left__nav {
        background-color: #fff;
        width: 300px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;

    }
    .box__nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
         width: 100%;

    }
    .item__nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width:  270px;
        padding: 12px 15px;
    }

    input {
        margin: 5px 10px;
        width: 270px;
        height: 30px;
        font-size: 16px;
    }

    .name__nav {
        font-size: 18px;
        margin-left: 20px;
        margin-top: 5px;
    }

    .item__nav:hover {
        background-color: rgba(255,150,255, 0.2);
    }

    .right__nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 200px;
        padding-top: 10px;
    }
    .item {
        font-size: 18px;
        margin-left: 20px;
        color: #fff;
        margin-top: 5px;
        text-shadow:0 0 3px rgb(0 0 0 / 80%), 0 0 3px rgb(0 0 0 / 80%) }

    .box__item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width:  180px;
        padding: 12px 15px;
    }

    .box__item:hover {
        background: linear-gradient(
    180deg
    , rgba(250,250,250, 0.15) 0%, rgba(200,200,200, 0.15) 100% ); 
    
    }
</style>