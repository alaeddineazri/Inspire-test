import {
    GET_ALL_CANDIDATES_LOADING ,
    GET_ALL_CANDIDATES_SUCCESS
} from "../action/CandidatsTypes"




const initialState = { 
    
        Candidatures: {value:"120",label:"Candidatures"},
        NouveauxProfils: {value:"64",label:"Nouveaux Profils"},
        DossiersIntéressants: {value:"64",label:" Dossiers Intéressants"},
        DossiersFavoris: {value:"535",label:" Dossiers Favoris"},



}

const CandidatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_CANDIDATES_LOADING:
            return {
                ...state,
                isLoading: true
            }
            case GET_ALL_CANDIDATES_SUCCESS:
            return {
                ...state,
                date: payload,
                isLoading: false,
                errors: null
            }
        default:
            return state
    }
}






export default CandidatsReducer
