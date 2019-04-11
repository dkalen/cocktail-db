<template>
  <div>
    <input v-model="keywords" placeholder="search">
    <div class="recipes-list">
      <masonry :cols="{default: 6,2880: 5,2400: 4,1920: 3, 1440: 2, 960: 1 }" :gutter="30">
        <recipe v-for="recipe in results" :recipe="recipe" :key="recipe.name"></recipe>
      </masonry>
    </div>
  </div>
</template>

<script>
import recipes from "../recipes";
import Recipe from "./Recipe";

export default {
  name: "HelloWorld",
  data: function() {
    return {
      keywords: "",
      cocktails: recipes
    };
  },
  computed: {
    results: function() {
      if (!this.keywords) {
        return this.cocktails;
      }
      const keywordList = this.keywords
        .split(",")
        .map(k => k.trim().toLowerCase());
      return this.cocktails.filter(c => {
        const matchesIngredient = keywordList.every(k =>
          c.ingredients.some(
            i =>
              (i.detail.name || "").toLowerCase().includes(k) ||
              (i.detail.description || "").toLowerCase().includes(k)
          )
        );
        const matchesName = keywordList.every(k =>
          c.name.toLowerCase().includes(k)
        );
        const matchesPrep = keywordList.every(k =>
          (c.prep || "").toLowerCase().includes(k)
        );
        return matchesIngredient || matchesName || matchesPrep;
      });
    }
  },
  components: {
    Recipe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
