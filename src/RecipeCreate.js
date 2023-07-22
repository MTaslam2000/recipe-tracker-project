import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = (event) => {
    const { target } = event;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    console.log(target.value);
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // TODO: Add the required input and textarea form elements.
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  name="name"
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="Cuisine">
                <input
                  name="cuisine"
                  type="text"
                  id="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  name="photo"
                  type="url"
                  id="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="Url"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  name="ingredients"
                  id="ingredients"
                  rows="2"
                  cols="20"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Ingredients"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  name="preparation"
                  id="preparation"
                  rows="2"
                  cols="20"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Preparation"
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
