import { writable } from 'svelte/store'

let leaderboard = [
  {
    name: 'Latoya Boyd',
    profile: 'https://github.com/Ethel-Booth',
    score: 186,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Delaney Figueroa',
    profile: 'https://github.com/Ina-Adkins',
    score: 64,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Roslyn Woodard',
    profile: 'https://github.com/Henson-Shields',
    score: 34,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Imogene Aguilar',
    profile: 'https://github.com/Bryant-Chase',
    score: 140,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Peterson Howard',
    profile: 'https://github.com/Janis-Callahan',
    score: 59,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Stanton Carey',
    profile: 'https://github.com/Ward-Hendrix',
    score: 60,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Snyder Rush',
    profile: 'https://github.com/Blair-Henson',
    score: 69,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Alyce Schultz',
    profile: 'https://github.com/Elvira-Whitney',
    score: 24,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Leanna Gilmore',
    profile: 'https://github.com/Newman-Baxter',
    score: 92,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Figueroa Dunn',
    profile: 'https://github.com/Janie-Miles',
    score: 134,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Kelly Wiley',
    profile: 'https://github.com/Barbra-Craft',
    score: 192,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Lilian Blair',
    profile: 'https://github.com/Robinson-French',
    score: 93,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Oneill Floyd',
    profile: 'https://github.com/Gale-Norman',
    score: 156,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Michelle Malone',
    profile: 'https://github.com/Rowe-Battle',
    score: 173,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Trevino Logan',
    profile: 'https://github.com/Madeline-Landry',
    score: 105,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Margo Bell',
    profile: 'https://github.com/Elsa-Ferguson',
    score: 167,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Harvey Wiggins',
    profile: 'https://github.com/Benton-Adams',
    score: 99,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Wolf Stark',
    profile: 'https://github.com/Katina-Hewitt',
    score: 65,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Edwards Wagner',
    profile: 'https://github.com/Price-Romero',
    score: 104,
    rollno: '2018XXX-YYY',
  },
  {
    name: 'Addie Carney',
    profile: 'https://github.com/Gayle-Huffman',
    score: 41,
    rollno: '2018XXX-YYY',
  },
]

export const rankify = () => {
  leaderboard.sort((a, b) => b.score - a.score)
  leaderboard.forEach((p, i) => {
    p.rank = i + 1
  })
}

// export const courseSearchItems = () => {
//   let items
//   availableCourses.subscribe((courses) => {
//     items = courses.map((c) => {
//       let cstr: string = ''
//       cstr += c.title + ' ' + c.description + ' '
//       c.syllabus.forEach((t) => {
//         cstr += t.title + ' '
//         t.subTopics.forEach((st) => {
//           cstr += st + ' '
//         })
//       })
//       return { cstr, course: c }
//     })
//   })
//   return items
// }

export const searchQueryStore = writable('')
// const coursesStore: Writable<Array<Course>> = writable(availableCourses)

export const search = () => {
  let q = ''
  searchQueryStore.subscribe((data) => (q = data.toLowerCase()))
  let keywords = q.split(' ')
  let results = []
  keywords.forEach((keyword) => {
    if (q == '' || keyword !== '') {
      results = results.concat(
        leaderboard.filter((p) => p.name.toLowerCase().includes(keyword))
      )
    }
  })

  let resultSet = new Set()

  results.forEach((r) => {
    resultSet.add(r)
  })
  return Array.from(resultSet)
}
