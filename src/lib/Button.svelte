<script>
    export let text;
    export let handler;

    function onHandler(){
        handler()
    }
</script>


<button on:click={onHandler}>
    {text}
</button>




<style>
button {
    background: linear-gradient(
    180deg
    , rgba(165,230,255, 1) 0%, rgba(125,200,240, 1) 15%, rgba(60,168,230, 1) 48%, rgba(44,140,200, 1) 52%, rgba(47,158,220, 1) 80%, rgba(115,198,238, 1) 100% );
    padding: .9rem 1rem;
    border-radius: .5rem ;
    color: #fff;
    width: 100%;
    font-size: 1.1rem;
    cursor: pointer;
}

button:hover {
    filter: brightness(1.1);
}

</style>