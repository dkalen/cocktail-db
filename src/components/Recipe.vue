<template>
    <div class="card recipe">
        <p class="ctg"><span style="color: #9c0058;"><b>{{recipe.name}}</b></span></p>
        <p class="block"><span style="color: #9c0058;"><i>{{recipe.description}}</i></span></p>
        <table width="100%">
            <colgroup>
                <col width="25%" />
                <col width="75%" />
            </colgroup>
            <tr valign="top" v-for="ingredient in recipe.ingredients" v-bind:key="recipe.name + ingredient.detail.name">
                <td class="tzv0">{{ingredient.amount}} {{ingredient.measurement}}</td>
                <td class="tzv">{{ingredient.detail.name}}</td>
            </tr>
        </table>
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
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
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
.tzv0 {
  font-size: small;
  text-align: right;
  font-weight: bold;
}
.tzv {
  font-size: small;
  text-align: left;
  text-indent: 0em;
  margin-left: 1em;
  font-weight: bold;
  padding-left: 1em;
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
