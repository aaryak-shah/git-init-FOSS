import { projects } from './stores/projects'

export const getAvatars = () => {
  let avatars = {}
  projects.forEach((p) => {
    p.maintainers.forEach((m) => {
      fetch(`https://api.github.com/users/${m}`).then((res) => {
        res.json().then((data) => {
          avatars[m] = data.avatar_url
        })
      })
    })
  })

  console.log(JSON.stringify(avatars))
}
