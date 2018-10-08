export default (state = [], action) => {
  let selectedQuote, idx

  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      selectedQuote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(selectedQuote)
      return [...state.slice(0, idx), ...state.slice(idx + 1, state.length)]
    case 'UPVOTE_QUOTE':
      selectedQuote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(selectedQuote)
      let upvoted = {...selectedQuote, votes: selectedQuote.votes + 1}
      return [...state.slice(0, idx), upvoted, ...state.slice(idx + 1, state.length)]
    case 'DOWNVOTE_QUOTE':
      selectedQuote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(selectedQuote)
      let downvoted
      selectedQuote.votes - 1 < 0 ? downvoted = {...selectedQuote, votes: 0 } : downvoted = {...selectedQuote, votes: selectedQuote.votes - 1}
      return [...state.slice(0, idx), downvoted, ...state.slice(idx + 1, state.length)]
    default:
      return state;
  }
}
