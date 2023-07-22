import React, { useState } from "react";

function RecipeList({ recipes }) {
  // console.log("recipes", recipes);

  // TODO: Display the list of recipes using the structure of table that is provided. DONE*

  // TODO: Create at least one additional component that is used by this component.

  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((r, index) => (
            <tr key={index}>
              <td>{r.name}</td>
              <td>{r.cuisine}</td>
              <td>{r.photo}</td>
              <td>{r.ingredients}</td>
              <td>{r.preparation}</td>
              <td>
                <button>Delete</button>
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
