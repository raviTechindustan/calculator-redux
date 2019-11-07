

const initialState = {
  total: ""
}

export default function (state = { ...initialState }, action) {
  switch (action.type) {

    case 'calc': {
      let length = action.payload.length;
     
      if (parseInt(action.payload[length - 1])) {
        let result = eval(action.payload);
        return { ...state, total: result };
      }
      else {
        return { ...state, total: "Incorrect Format " }
      }
    }

    case 'reducerclear': {
      return { ...state, total: '' }
    }
    default:
      return { ...state }
  }
}

