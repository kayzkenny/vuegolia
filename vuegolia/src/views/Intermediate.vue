<template>
  <ais-instant-search index-name="demo_ecommerce" :search-client="searchClient">
    <div class="left-panel">
      <ais-clear-refinements />
      <h2>Colors</h2>
      <ais-refinement-list attribute="brand" searchable />
      <ais-configure :hitsPerPage="8" />
    </div>
    <div class="right-panel">
      <ais-search-box />
      <ais-hits>
        <div slot="item" slot-scope="{ item }">
          <h2>{{ item.name }}</h2>
        </div>
      </ais-hits>
      <ais-pagination />
    </div>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

export default {
  name: "Basic",
  data() {
    return {
      searchClient: algoliasearch(
        "B1G2GM9NG0",
        "aadef574be1f9252bb48d4ea09b5cfe5"
      ),
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}

.ais-Hits-list {
  margin-top: 0;
  margin-bottom: 1em;
}

.ais-InstantSearch {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
}
</style>
