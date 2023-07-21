import React, { useState } from "react";

function RecipeCreate() {
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
                Name
                <input
                  name="name"
                  type="text"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="Cuisine">
                Cuisine
                <input
                  name="cuisine"
                  type="text"
                  id="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                URL
                <input
                  name="photo"
                  type="url"
                  id="photo"
                  onChange={handleChange}
                  value={formData.photo}
                />
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
                  onChange={handleChange}
                  value={formData.ingredients}
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
                  onChange={handleChange}
                  value={formData.preparation}
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
