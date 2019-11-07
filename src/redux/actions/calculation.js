
export function calculate(data) {
console.log(data)
  return (dispatch) => {
    dispatch({
      type: 'calc',
      payload:data
    })
  }
}


// export const calculate = (data) => {

//   return (dispatch) => {
//     dispatch({
//       type: 'calc',
//       payload: 'data'
//     })
//   }
// }

export function reducerdatanull() {
  return (dispatch) => {
    dispatch({
    type: 'reducerclear'
    })
    return true;
  }
}