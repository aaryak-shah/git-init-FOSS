import { writable } from 'svelte/store'

export let projects = [
  {
    title: 'Diginetic',
    repo: 'https://github.com/john-doe/Geekmosis',
    stack: ['Centregy', 'Zedalis', 'Ovium'],
    desc: 'Reprehenderit minim esse est velit proident. Fugiat nisi anim mollit eu Lorem deserunt. Proident Lorem sunt ad in sunt ex officia excepteur do. Aliqua veniam voluptate nostrud tempor dolor. Amet Lorem nisi deserunt consequat. Nisi dolor ullamco aliquip proident mollit et. Elit irure et eiusmod eu aute pariatur velit est quis nostrud.\r\n',
    maintainers: ['Ada-Barrera', 'Byers-Nixon', 'Fanny-Velasquez'],
  },
  {
    title: 'Mixers',
    repo: 'https://github.com/john-doe/Magnemo',
    stack: ['Digitalus', 'Uni', 'Micronaut'],
    desc: 'Ex ut eiusmod officia voluptate ex ea velit. Cillum sunt non enim sunt duis consequat mollit laborum et minim do. Occaecat labore velit labore veniam commodo voluptate ea nisi incididunt ea cupidatat fugiat Lorem dolore. Consectetur sint commodo eu ea ullamco ea magna adipisicing. Et consequat commodo officia occaecat aute consequat commodo laborum velit.\r\n',
    maintainers: ['Leanna-Manning'],
  },
  {
    title: 'Papricut',
    repo: 'https://github.com/john-doe/Applideck',
    stack: ['Lingoage', 'Gaptec', 'Combogene', 'Strozen', 'Canopoly'],
    desc: 'In irure proident voluptate proident consectetur quis ut dolore. Dolor reprehenderit aliqua dolore sunt nisi occaecat do pariatur consequat eiusmod laborum exercitation. Nostrud nulla qui eu magna et amet labore occaecat duis fugiat aute elit esse cillum.\r\n',
    maintainers: ['Erica-West', 'Robin-Glass', 'Diaz-Giles'],
  },
  {
    title: 'Hometown',
    repo: 'https://github.com/john-doe/Gluid',
    stack: ['Marketoid', 'Tingles', 'Primordia', 'Dadabase'],
    desc: 'Occaecat dolor Lorem consectetur laborum sit ut. Voluptate ullamco fugiat non consequat officia labore commodo voluptate sunt. Aute et sit do sint magna veniam deserunt ex nisi ad adipisicing enim. Consectetur in ad sint non exercitation. Irure culpa dolore irure dolor ex sunt anim minim. Esse excepteur incididunt dolore enim velit nostrud ad ad ullamco nulla. Esse labore laboris minim nostrud.\r\n',
    maintainers: ['Love-Bond', 'Cardenas-Stevens'],
  },
  {
    title: 'Flotonic',
    repo: 'https://github.com/john-doe/Kyagoro',
    stack: ['Gleamink', 'Cytrex', 'Kindaloo', 'Techade', 'Grupoli'],
    desc: 'Quis est do anim Lorem. Non consectetur velit cupidatat id enim excepteur veniam sint adipisicing est non amet dolore. Fugiat excepteur ex nulla incididunt dolore ipsum nisi minim aute. Ea consequat est esse deserunt anim pariatur qui sint reprehenderit ea. Quis Lorem anim mollit pariatur in enim anim.\r\n',
    maintainers: ['Rebekah-Schmidt'],
  },
  {
    title: 'Quarx',
    repo: 'https://github.com/john-doe/Gracker',
    stack: ['Centuria', 'Intrawear', 'Stockpost'],
    desc: 'Cillum aliquip ex consectetur cillum magna veniam veniam eiusmod et nostrud fugiat et esse. Laboris cillum laborum sit sunt sint. Ullamco irure qui qui non amet amet do reprehenderit cillum culpa Lorem. Irure adipisicing et nisi ea. Proident in excepteur mollit tempor occaecat minim reprehenderit dolor minim magna et.\r\n',
    maintainers: ['Stephenson-Wong', 'Potts-Adams', 'Tanya-Valentine'],
  },
  {
    title: 'Digiprint',
    repo: 'https://github.com/john-doe/Goko',
    stack: ['Talkalot', 'Kidstock', 'Zepitope', 'Accel', 'Housedown'],
    desc: 'Exercitation eu ut Lorem anim ad nostrud quis elit dolore non minim ad ut. Culpa ipsum est tempor commodo amet sint minim aute magna. Esse laboris dolore in magna excepteur magna qui dolor voluptate. Quis mollit reprehenderit laboris nulla est. Commodo velit ex exercitation dolore nisi in aliqua culpa eu sunt elit in. Magna dolor cillum ut aliquip consequat anim.\r\n',
    maintainers: ['Sheppard-Levine', 'Eugenia-Solis', 'Alvarez-Perkins'],
  },
  {
    title: 'Zolar',
    repo: 'https://github.com/john-doe/Anocha',
    stack: ['Exoplode', 'Avenetro', 'Brainclip'],
    desc: 'Tempor nisi deserunt est minim sit est labore anim adipisicing nostrud laboris minim. Velit exercitation aliqua est nulla adipisicing reprehenderit nulla duis aliquip incididunt. Est pariatur eu dolor culpa commodo id. Nisi aute veniam sunt veniam culpa dolore fugiat reprehenderit quis Lorem amet quis excepteur ex. Qui quis sunt minim aliqua nulla minim duis. Voluptate officia duis ut aliqua elit ad qui esse. Ullamco culpa incididunt eu esse incididunt quis excepteur do voluptate.\r\n',
    maintainers: ['Meagan-Patel'],
  },
  {
    title: 'Suremax',
    repo: 'https://github.com/john-doe/Zoxy',
    stack: ['Ziggles', 'Bluplanet', 'Gonkle', 'Firewax', 'Techmania'],
    desc: 'Ullamco sint irure mollit incididunt dolore nisi officia tempor esse dolor do dolore. Dolor minim nisi aliqua in occaecat cupidatat aute consectetur consequat ad. Consectetur ipsum consequat consequat aliqua aute nostrud veniam eu minim officia. Ex sit et duis nostrud officia. Est reprehenderit pariatur enim qui nisi sunt.\r\n',
    maintainers: ['Maricela-Davidson', 'Craig-Kelly'],
  },
  {
    title: 'Verton',
    repo: 'https://github.com/john-doe/Quilm',
    stack: ['Opticall', 'Squish', 'Buzzness', 'Bedder', 'Geofarm'],
    desc: 'Proident eiusmod culpa reprehenderit duis cupidatat labore laborum sit consectetur esse Lorem amet sunt. Culpa voluptate cupidatat elit non deserunt qui enim minim fugiat labore in fugiat non et. Ut enim aute amet aliqua labore et magna ad nostrud labore duis culpa. Est proident tempor in amet exercitation exercitation non ullamco esse.\r\n',
    maintainers: ['Sanchez-Joyce', 'Garrett-Paul', 'Miranda-Noble'],
  },
]

export const pstringify = () => {
  projects.forEach((p) => {
    p.pstr = p.title + ' ' + p.desc + ' '
    p.stack.forEach((s) => (p.pstr += s + ' '))
    p.maintainers.forEach((m) => (p.pstr += m + ' '))
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
        projects.filter((p) => p.pstr.toLowerCase().includes(keyword))
      )
    }
  })

  let resultSet = new Set()

  results.forEach((r) => {
    resultSet.add(r)
  })
  return Array.from(resultSet)
}
