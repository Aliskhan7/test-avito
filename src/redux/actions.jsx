export const loadPhotos = () =>{
  return dispatch => {
    dispatch({ type: 'photo/load/start' })
  fetch('https://boiling-refuge-66454.herokuapp.com/images')
    .then(response => response.json())
    .then(json =>{
      dispatch({
        type: 'photo/load/success',
        payload: json
      })
    })
  }
}
export const loadModal = (id)=>{
  return dispatch=>{
    dispatch({
      type: 'modal/load/start'
    })
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then(response=>response.json())
      .then(json=>{
        dispatch({
          type: 'modal/load/success',
          payload: json
        })
      })
  }
}
export const commentsAdd = (name,text,id) =>{
  return dispatch => {
    dispatch({
     type: 'comment/load/start'
    })
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`,{
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        name:`${name}`,
        text: `${text}`
      }),
    })
      .then(() =>
        dispatch({
          type: 'comment/load/success',
          name: name,
          text: text,
        }))
  }
}