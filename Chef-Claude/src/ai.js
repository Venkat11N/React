// More robust recipe service with fallbacks
export async function getRecipeFromMistral(ingredientsArr = []) {
  const ingredientsString = ingredientsArr.join(", ") || "random ingredients";
  const token = import.meta.env.VITE_HF_ACCESS_TOKEN;
  
  if (!token) {
    return `# Configuration Error\n\nPlease add your Hugging Face token to the .env file:\n\n\`\`\`\nVITE_HF_ACCESS_TOKEN=hf_your_token_here\n\`\`\``;
  }

  // Try multiple models as fallbacks
  const models = [
    "microsoft/DialoGPT-medium",
    "google/flan-t5-base", 
    "facebook/blenderbot-400M-distill"
  ];

  for (const model of models) {
    try {
      console.log(`Trying model: ${model}`);
      
      const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `Create a recipe using these ingredients: ${ingredientsString}. Format as markdown with ingredients list and instructions.`,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            do_sample: true,
          },
          options: {
            wait_for_model: true // Wait if model is loading
          }
        })
      });

      if (response.status === 401) {
        return `# Authentication Error\n\n❌ Your Hugging Face token is invalid.\n\n**Steps to fix:**\n1. Go to https://huggingface.co/settings/tokens\n2. Create a new token with "Write" permissions\n3. Update your .env file\n4. Restart your dev server`;
      }

      if (response.status === 403) {
        console.log(`Model ${model} forbidden, trying next...`);
        continue; // Try next model
      }

      if (!response.ok) {
        console.log(`Model ${model} failed with status ${response.status}, trying next...`);
        continue;
      }

      const result = await response.json();
      
      if (result.error) {
        console.log(`Model ${model} returned error: ${result.error}, trying next...`);
        continue;
      }

      let recipe;
      if (Array.isArray(result) && result[0]?.generated_text) {
        recipe = result[0].generated_text;
      } else if (result.generated_text) {
        recipe = result.generated_text;
      } else {
        console.log(`Model ${model} returned unexpected format, trying next...`);
        continue;
      }

      // Clean up the response
      recipe = recipe.replace(/^Create a recipe.*?ingredients:/i, '').trim();
      
      if (recipe.length < 50) {
        console.log(`Model ${model} returned too short response, trying next...`);
        continue;
      }

      return `# Recipe Suggestion\n\n${recipe}`;

    } catch (error) {
      console.log(`Model ${model} failed with error: ${error.message}, trying next...`);
      continue;
    }
  }

  // If all models failed, return a manual recipe
  return createFallbackRecipe(ingredientsString);
}

function createFallbackRecipe(ingredients) {
  return `Simple Recipe with ${ingredients}

## Ingredients
- ${ingredients.split(', ').map(ing => `1 portion of ${ing}`).join('\n- ')}
- Salt and pepper to taste
- 2 tbsp cooking oil

## Instructions

1. **Prep**: Wash and chop your ingredients as needed
2. **Cook**: Heat oil in a pan over medium heat
3. **Combine**: Add your ingredients and cook for 10-15 minutes
4. **Season**: Add salt and pepper to taste
5. **Serve**: Enjoy your homemade dish!

## Tips
- Adjust cooking time based on your ingredients
- Feel free to add herbs and spices you have available
- Taste and adjust seasoning as you cook

`;
}

// Test function
export async function testConnection() {
  const token = import.meta.env.VITE_HF_ACCESS_TOKEN;
  
  if (!token) {
    return "❌ No token found";
  }
  
  try {
    const response = await fetch('https://huggingface.co/api/whoami', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    if (response.ok) {
      const data = await response.json();
      return `✅ Connected as: ${data.name}`;
    } else {
      return `❌ Token invalid (${response.status})`;
    }
  } catch (error) {
    return `❌ Connection failed: ${error.message}`;
  }
}










// import { HfInference } from '@huggingface/inference';

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
// `;

// // Initialize Hugging Face client
// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

// export async function getRecipeFromMistral(ingredientsArr = []) {
//   const ingredientsString = ingredientsArr.join(", ") || "random ingredients";

//   try {
//     const response = await hf.chatCompletion({
//       model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B", // Change model here
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//       ],
//       max_tokens: 1024,
//       temperature: 0.7,
//     });

//     return response.choices?.[0]?.message?.content || "No recipe generated.";
//   } catch (err) {
//     console.error("Error getting recipe:", err.message);
//     return `# Error Getting Recipe\n\nSorry, I couldn't generate a recipe.\n\n**Error:** ${err.message}`;
//   }
// }


// // Optional: Add a function to validate the HF token exists
// export function validateToken() {
//   if (!import.meta.env.VITE_HF_ACCESS_TOKEN) {
//     throw new Error('VITE_HF_ACCESS_TOKEN environment variable is required');
//   }
// }