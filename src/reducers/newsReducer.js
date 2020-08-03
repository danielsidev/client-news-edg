const newsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NEWS':
          return state.concat([action.data]);
        case 'DELETE_NEWS':
          return state.filter((news)=>news._id !== action._id);
        case 'EDIT_NEWS':
          return state.map((news)=>news._id === action._id ? {...news,editing:!news.editing}:news)
          case 'UPDATE':
            return state.map((news)=>{
              if(news._id === action._id) {
                return {
                   ...news,
                   _id:action.data._id,
                   titulo:action.data.titulo,
                   conteudo:action.data.conteudo,
                   editing: !news.editing
                }
              } else return news;
            })
        default:
          return state;
      }
}
export default newsReducer;