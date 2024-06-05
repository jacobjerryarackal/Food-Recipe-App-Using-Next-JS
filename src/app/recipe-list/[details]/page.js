import RecipeDetailsItem from "@/components/recipe-details";


async function fetchReciepeDetails(currentRecipeId){
    try{
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
        const data = await apiResponse.json();

        return data;
        
    }
    catch(e){
        throw new Error(e);
    }
}


export default async function ReciepeDetails({params}){

    const getRecipeDetails = await fetchReciepeDetails(params?.details);

    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
}