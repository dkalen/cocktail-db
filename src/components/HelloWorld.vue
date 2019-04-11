<template>
  <div>
    <input v-model="keywords" placeholder="search">
    <m-slider class="ingredient-limit" discrete v-model="maxIngredients" :min="1" :max="12" />
    <div class="recipes-list">
      <masonry :cols="{default: 6,2880: 5,2400: 4,1920: 3, 1440: 2, 960: 1 }" :gutter="30">
        <recipe v-for="recipe in results" :recipe="recipe" :key="recipe.name"></recipe>
      </masonry>
    </div>
  </div>
</template>

<script>
import recipes from '../recipes';
import Recipe from './Recipe';

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      keywords: '',
      cocktails: recipes,
      maxIngredients: 12,
    };
  },
  computed: {
    results: function() {
      let result = this.cocktails;
      if (this.keywords) {
        const keywordList = this.keywords
          .split(' ')
          .map(k => k.trim().toLowerCase());
        result = result.filter(c => {
          return keywordList.every(k => {
            const matchesIngredient = c.ingredients.some(
              i =>
                (i.detail.name || '').toLowerCase().includes(k) ||
                (i.detail.description || '').toLowerCase().includes(k)
            );
            const matchesName = c.name.toLowerCase().includes(k);
            const matchesPrep = (c.prep || '').toLowerCase().includes(k);
            return matchesIngredient || matchesName || matchesPrep;
          });
        });
      }
      if(this.maxIngredients > 0 && this.maxIngredients < 12){
        result = result.filter(c => c.ingredients.length <= this.maxIngredients);
      }
      return result.sort((a,b) => a.name.trim().localeCompare(b.name.trim()));
    }
  },
  components: {
    Recipe
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import 'material-components-vue/dist/slider/slider.min.css';
  .ingredient-limit {
    width:200px;
  }
</style>
