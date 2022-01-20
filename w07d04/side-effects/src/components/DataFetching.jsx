import axios from 'axios';
import {useEffect, useState} from 'react';

const DataFetching = () => {
  const [ingredients, setIngredients] = useState([]);

  const [recipes, setRecipes] = useState([
    {
      id: 4,
      title: 'lasagna',
      ingredients: []
    },
    {
      id: 5,
      title: 'mac and cheese',
      ingredients: []
    }
  ]);

  // useEffect(() => {
  //   const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';
    
  //   axios.get(url)
  //     .then((response) => {
  //       // console.log(response.data);
  //       // setRecipes(response.data);
  //       // setRecipes([...recipes, ...response.data]) // [{}, {}, []]
  //       setRecipes((prevRecipes) => {
  //         return [...prevRecipes, ...response.data];
  //       });
  //     });
  // }, []);

  useEffect(() => {
    const baseUrl = 'http://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipesPromise = axios.get(`${baseUrl}/recipes`);
    const ingredientPromise = axios.get(`${baseUrl}/ingredients`);

    const promises = [recipesPromise, ingredientPromise];

    Promise.all(promises)
      .then((responseArr) => {
        // const newRecipes = responseArr[0].data;

        setRecipes((prevRecipes) => {
          return [...prevRecipes, ...responseArr[0].data]
          // return [...responseArr[0].data, ...prevRecipes];
        });
        // setIngredients(responseArr[1].data);
        setIngredients((prevIngredients) => {
          return [...prevIngredients, ...responseArr[1].data];
        });
      });
  }, []);

  return (
    <div>
      <h2>Data Fetching!!!</h2>

      { recipes.map((recipe) => {
        return <p key={recipe.id}>Recipe: {recipe.title} ({recipe.id})</p>
      }) }

      { ingredients.map((ingredient) => {
        return <h4 key={ingredient.id}>Ingredient: {ingredient.name}</h4>
      }) }
    </div>
  );
};

export default DataFetching;
