import {SearchRecipesRequest} from '../../Main/Requests/SearchRecipesRequest.js' // Changer l'emplacement ?!!
import {Recettes} from '../Render/Recettes.js'

export class SelectRecettes {

    static by (character, listRecette) {
        let recettes = new SearchRecipesRequest (character, listRecette);
        let result = recettes.getResultRecipe ();
        console.log(result);
        Recettes.Display(result);
    }
}

