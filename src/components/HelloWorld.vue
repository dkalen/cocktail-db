<template>
  <div>
    <input v-model="keywords" placeholder="search">
    <div class="recipes-list">
      <masonry
        :cols="{default: 6,3000: 5,2500: 4,2000: 3, 1500: 2, 1000: 1 }"
        :gutter="30"
      >
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
  data: function(){
    return {
      keywords: "",
      cocktails: recipes
    }
  },
  computed: {
    results: function(){
      if(!this.keywords){
        return this.cocktails;
      }
      const keywordList = this.keywords.split(',').map(k=>k.trim().toLowerCase());
      return this.cocktails.filter(c => {
        const matchesIngredient = keywordList.every(k => ~c.ingredients.findIndex(i => ~i.detail.name.toLowerCase().indexOf(k) || (i.detail.description && ~i.detail.description.toLowerCase().indexOf(k))));
        return matchesIngredient || keywordList.every(k => c.name.toLowerCase().includes(k));
      })
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
