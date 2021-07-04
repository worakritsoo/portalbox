import { writable } from "svelte/store";
import { Articles } from "$lib/database/Articles.json";
import Fuse from "fuse.js";

export const resultsStore= writable([])


export const fuse = new Fuse(Articles,{
    keys:['title','description','url']
})

