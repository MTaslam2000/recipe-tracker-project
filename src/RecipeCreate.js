import React, { useState } from "react";

function RecipeCreate() {
  // TODO: Add the required submit and change handlers

  const handleChange = () => {};
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const submitHandler = (event) => {
    event.preventDefault();
  };

  // TODO: Add the required input and textarea form elements.
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                Name
                <input name="name" type="text" id="name" />
              </label>
            </td>
            <td>
              <label htmlFor="Cuisine">
                Cuisine
                <input name="cuisine" type="text" id="Cuisine" />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                URL
                <input name="photo" type="url" id="photo" />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                Ingredients
                <textarea
                  name="ingredients"
                  id="ingredients"
                  rows="2"
                  cols="20"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                preparation
                <textarea
                  name="preparation"
                  id="preparation"
                  rows="2"
                  cols="20"
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
