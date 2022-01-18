export function useFullscrren () {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else if (document.exitFullscreen) {

        document.exitFullscreen();
   
    }
}