var recipes = [];
var recipe = {};
Array.from(document.querySelector('body').children).concat(Array.from(document.querySelectorAll("a")).flatMap(node => Array.from(node.children))).forEach(c => {
    console.log(c)
    let clazz = c.getAttribute("class");
      if(clazz == "ctg"){
                recipes.push(recipe);
              recipe = {title: c.textContent};
            } else if (clazz === "block"){
                    recipe.description = c.textContent;
                  } else if (c.nodeName.toLowerCase() === "table"){
                          recipe.ingredients = [].slice.call(c.querySelectorAll("tr")).map(i => ({amount: i.querySelector(".tzv0").textContent, name: i.querySelector(".tzv").textContent}));
                        } else if (clazz === "hang"){
                                recipe.prep = recipe.prep || "";
                                recipe.prep += "\n"+c.textContent;
                              } else if (clazz === "tx1"){
                                      recipe.creator = c.textContent;
                                    }
})
recipes.push(recipe)
recipes.filter(r => r.title).map(r => r.title).sort()
