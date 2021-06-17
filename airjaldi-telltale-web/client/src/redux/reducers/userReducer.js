import {  ABOUT , PRO, NET,  SERVICES, PEOPLE,  STORY,   CARRER, NEWS  , PROFILE, PUB, DRAFT, TRAIN, MEMBER} from "../actions/types";

const initialState = {
    about:null,
    news:null,
    draft:null,
    pub:null,
    carrer:null,
    profile:null,
    ser:null,
    train:null,
    story:null,
    net:null,
    people:null,
    member: null,
    profile:null,
    pro:null,
  };

  export default function(state = initialState, action) {
    switch (action.type) {
   

       
          case  ABOUT:
          return {
            ...state,
            
            about: action.payload
          };
          case  NEWS:
            return {
              ...state,
              
              news: action.payload
            };
            case DRAFT:
            return {
              ...state,
              
              draft: action.payload
            };
            case PUB:
              return {
                ...state,
                
                pub: action.payload
              };
              case CARRER:
                return {
                  ...state,
                  
                  carrer: action.payload
                };

                case PROFILE :
                  return {
                    ...state,
                    
                    profile: action.payload
                  };
                  case SERVICES :
                    return {
                      ...state,
                      
                      ser: action.payload
                    };
                    case TRAIN:
                    return {
                      ...state,
                      
                      train: action.payload
                    };
                    case STORY:
                      return {
                        ...state,
                        
                        story: action.payload
                      };
                      case NET:
                        return {
                          ...state,
                          
                          net: action.payload
                        };
                        case PEOPLE:
                          return {
                            ...state,
                            
                            people: action.payload
                          };
                          case MEMBER:
                            return {
                              ...state,
                              
                              member: action.payload
                            };
                            case PRO:
                              return {
                                ...state,
                                
                                pro: action.payload
                              };
          
        
        default:
      return state;
  
  }
}