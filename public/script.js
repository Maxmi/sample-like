console.log('hello from the browser JavaScript')

// const updateProfile = (userID, name, email) => {
//   return fetch(`/users/${userID}/edit`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({name, email}),
//   },
//   )
 // })

const addLike = (albumID) => {
  return fetch(`/albums/like/${albumID}`, {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({albumID}),
  })
}

const removeLike = (albumID) => {
  return fetch(`/albums/like/${albumID}`, {
    method: 'delete',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({albumID}),
  })
}

// const getLikes = (albumID) => fetch(`/albums/${albumID}`)

const likeBtn = document.getElementById('likeBtn')
const count = document.getElementById('count')

let countVal = parseInt(count.textContent, 10)
const album = document.getElementById('album')
const albumID = album.getAttribute('data')

likeBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (!e.target.classList.contains('liked')) {
    return addLike(albumID)
      .then(() => {
        countVal++
        count.textContent = countVal
        likeBtn.classList.add('liked')
      })
  } else {
    return removeLike(albumID)
      .then(() => {
        countVal--
        count.textContent = countVal
        likeBtn.classList.remove('liked')
      })
  }

})
