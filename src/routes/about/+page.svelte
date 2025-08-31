<script>
 /** @type {import('./$types').PageData} */
 export let data;

</script>

<div>
   <div class="text-xl text-black">{data.about[0].titel}</div>

   <article class="prose
  prose-h1:font-bold prose-h1:text-xl
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl">
        {@html data.about[0].text}
    </article>
</div>
