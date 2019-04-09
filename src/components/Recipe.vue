<template>
    <div class="md-card card recipe">
        <p class="ctg"><span style="color: #9c0058;"><b>{{recipe.name}}</b></span></p>
        <p class="block"><span style="color: #9c0058;"><i>{{recipe.description}}</i></span></p>
        <div class="ingredients-list" v-for="ingredient in recipe.ingredients" v-bind:key="recipe.name + ingredient.detail.name">
          <div class="amount">{{ingredient.amount}} {{ingredient.measurement}}</div>
          <div class="ingredient">{{ingredient.detail.name}}</div>
        </div>
        <p class="hang">{{recipe.prep}}</p>
        <p class="tx1"><span style="color: #9c0058;"><i>{{recipe.origin}}</i></span></p>
    </div>
</template>

<script>
export default {
  name: "Recipe",
  props: ["recipe"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe {
  display: inline-block;
  width: 450px;
}
.card {
  margin: 24px;
  padding: 16px;
  color: #757575;
}
.ingredients-list {
  display: grid;
  width: 100%;
  grid-template-columns: 25% 75%;
  grid-gap: 1em;
}
.amount {
  font-size: small;
  text-align: right;
  font-weight: bold;
}
.ingredient {
  font-size: small;
  text-align: left;
  font-weight: bold;
}
.tx1 {
  margin-top: 1em;
  margin-bottom: 0em;
  font-size: small;
  text-indent: 0em;
}
.hang {
  display: block;
  font-size: small;
  text-align: justify;
  margin-top: 0.5em;
  margin-bottom: 0.2em;
  margin-left: 1.5em;
  margin-right: 0em;
  text-indent: -1.5em;
}
.block {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: small;
  text-indent: 0em;
  margin-left: 0em;
  font-weight: normal;
}
.ctg {
  margin: 0em;
  display: block;
  font-size: 1.1em;
  text-align: left;
  margin-bottom: 0em;
  font-weight: bold;
  border-top: 1pt solid #000000;
  border-bottom: 1pt solid #000000;
}
</style>
