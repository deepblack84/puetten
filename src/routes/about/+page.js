/** @type {import('./$types').PageLoad} */
import getDirectusInstance from "$lib/directus";
import { error } from "@sveltejs/kit";
import { readItems } from "@directus/sdk";

export async function load({ fetch }) {
 const directus = getDirectusInstance(fetch);
 try {
   return {
     about: await directus.request(readItems("content", {id: 1})),
   };
 } catch (err) {
  error(err);
 }
}