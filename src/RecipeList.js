import React from "react";
import TableHead from "./TableHead.js";

function RecipeList({ recipes, setRecipes }) {
  // console.log("recipes", recipes);

  // TODO: Display the list of recipes using the structure of table that is provided. DONE*

  // TODO: Create at least one additional component that is used by this component. DONE*

  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked DONE*
  function deleteRecipe(recipeToDelete) {
    let filteredRecipes = recipes.filter(
      (r, index) => index !== recipeToDelete
    );
    setRecipes(filteredRecipes);
  }
  // function setStarred(recipeToStar) {
  //   setRecipes(
  //     recipes.map((r, index) =>
  //       index === recipeToStar ? { ...r, starred: true } : r
  //     )
  //   );
  // }

  return (
    <div className="recipe-list">
      <table>
        <TableHead />
        <tbody>
          {recipes.map((r, index) => (
            <tr key={index}>
              <td>{r.name}</td>
              <td>{r.cuisine}</td>
              <td>
                <img src={r.photo} alt="food" />
              </td>
              <td className="content_td">
                <p>{r.ingredients}</p>
              </td>
              <td className="content_td">
                <p>{r.preparation}</p>
              </td>
              <td>
                <button name="delete" onClick={() => deleteRecipe(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

// {recipes.map((r) => <tr key={r.name}> <td>{r.name}</td>)}
