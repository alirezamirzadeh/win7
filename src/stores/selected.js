// @ts-nocheck
import {writable} from 'svelte/store';
import Initial from '../utils/ItemsDesktop'



export let itemsIcon =writable(Initial)


export const newSelected= (id) => {
    const items =Initial.map(item => {
        if (item.id === id)  { item.selected =true}
        else { item.selected = false}

        return item
    })

    itemsIcon.set(items)

}

export const removeSelect =() => {
    const items =Initial.map(item => {
        item.selected = false

        return item
    })    
    itemsIcon.set(items)

    console.log('ccc');

}