import { async } from 'regenerator-runtime';
import 'dotenv/config';
import { API_URL, API_HEADERS } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    const url = `${API_URL}/recipes/get-more-info?id=${id}`;
    const options = {
      method: 'GET',
      headers: API_HEADERS,
    };

    const recipe = await getJSON(url, options);

    state.recipe = {
      id: recipe?.id,
      title: recipe?.name,
      description: recipe?.description,
      publisher: recipe?.credits?.[0]?.name,
      image: recipe?.thumbnail_url,
      servings: recipe?.num_servings,
      prepTime: recipe?.prep_time_minutes,
      cookTime: recipe?.cook_time_minutes,
      instructions: recipe?.instructions,
    };
  } catch (err) {
    throw err;
  }
};
