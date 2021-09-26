import { writable } from 'svelte/store'

export let projects = [
  {
    title: 'Horario',
    repo: 'https://github.com/hs2361/horario',
    stack: ['Dart', 'Flutter', 'Firebase'],
    desc: 'Horario is a Class Management and Notes Sharing App for students. Users can add classes to their weekly schedule, along with their timings and the link to join the class. Users can also add assignments to their schedule along with the deadline. Horario will remind the user of their class or assignment using a push notification. Users can upload notes with their group of fellow students. Users can also send requests for notes from their group. Horario organizes notes in a systematic manner, arranged by subject. Users can also search for notes by subject, notes name or file name.',
    pre: 'Flutter',
    maintainers: ['hs2361', 'kc611', 'DebadityaPal'],
  },
  {
    title: 'Plagio: An OCR enabled Plagiarism Checker',
    repo: 'https://github.com/DebadityaPal/PlagiarismChecker',
    stack: ['JavaScript', 'Python', 'React', 'Django'],
    desc: 'It is a ML based project with a website to host it. On the ML side we have a RCNN model with a CTC Loss function to detect handwriting from pages combined with Google Search API to rank instances of plagiarised text. The website is coded in Django and React, contrbutors can contribute both to the model as well as the website .',
    pre: 'Basic knowledge about machine learning.',
    maintainers: ['hs2361', 'kc611', 'DebadityaPal'],
  },
  {
    title: 'Image Processing Library',
    repo: 'https://github.com/hs2361/k-means-compressor',
    stack: ['C++', 'C'],
    desc: 'It is an image processing and compression library written in C/C++. It supports basic image editing tools. Image compression is done using K-Means Algorithm. Seam Carving for image resizing has also been implemented. Contributors can implement new algorithms for image processing and increase the coverage of the library as a whole.',
    pre: 'C++, STL Algorithms, Data Structures.',
    maintainers: ['hs2361', 'DebadityaPal'],
  },
  {
    title: 'DSA',
    repo: 'https://github.com/4molybdenum2/DSA',
    stack: ['Python', 'Java', 'C++', 'C'],
    desc: 'The repository hosts coding problems from platforms like GFG, Leetcode and Codechef. This was created to help assist in studying for Coding Interviews and Competitive Coding. ',
    pre: '',
    maintainers: ['4molybdenum2'],
  },
  {
    title: 'Dynamic Gnome Wallpapers',
    repo: 'https://github.com/john-doe/Kyagoro',
    stack: ['Bash', 'Documentation'],
    desc: 'A collection of awesome dynamic wallpapers for Gnome, and easy scripts to install them',
    pre: 'Linux/Gnome OS',
    maintainers: ['manishprivet'],
  },
  {
    title: 'Electify',
    repo: 'https://github.com/manishprivet/electify',
    stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Next'],
    desc: 'Create Private and Anonymous Elections Instantly and Unlimited. No need to Sign UP',
    pre: 'AWS DynamoDB',
    maintainers: ['manishprivet'],
  },
  {
    title: 'Guru-Jii',
    repo: 'https://github.com/Namanl2001/MERN-Gurujii-dev',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    desc: 'We have created this platform to help students find the best tuition teachers in their city quite easily. You just have to enter the pin code of your city and we will show you the best teachers in your locality along with their teaching styles and their qualification from which you can select the best teacher for yourself.',
    pre: '',
    maintainers: ['Namanl2001'],
  },
  {
    title: 'Generator For Android',
    repo: 'https://github.com/manikmmalhotra/generator-android-minks',
    stack: ['JavaScript', 'Java', 'Kotlin', 'Node.js'],
    desc: 'It provides a generator to create and maintain a android application based on the latests frameworks and patterns used by the community.',
    pre: 'Kotlin, Java, JavaScript, Node, yeoman',
    maintainers: ['manikmmalhotra'],
  },

  // {
  //   title: 'Suremax',
  //   repo: 'https://github.com/john-doe/Zoxy',
  //   stack: ['Ziggles', 'Bluplanet', 'Gonkle', 'Firewax', 'Techmania'],
  //   desc: 'Ullamco sint irure mollit incididunt dolore nisi officia tempor esse dolor do dolore. Dolor minim nisi aliqua in occaecat cupidatat aute consectetur consequat ad. Consectetur ipsum consequat consequat aliqua aute nostrud veniam eu minim officia. Ex sit et duis nostrud officia. Est reprehenderit pariatur enim qui nisi sunt.\r\n',
  //   pre: '',
  //   maintainers: ['Maricela-Davidson', 'Craig-Kelly'],
  // },
  // {
  //   title: 'Verton',
  //   repo: 'https://github.com/john-doe/Quilm',
  //   stack: ['Opticall', 'Squish', 'Buzzness', 'Bedder', 'Geofarm'],
  //   desc: 'Proident eiusmod culpa reprehenderit duis cupidatat labore laborum sit consectetur esse Lorem amet sunt. Culpa voluptate cupidatat elit non deserunt qui enim minim fugiat labore in fugiat non et. Ut enim aute amet aliqua labore et magna ad nostrud labore duis culpa. Est proident tempor in amet exercitation exercitation non ullamco esse.\r\n',
  //   pre: '',
  //   maintainers: ['Sanchez-Joyce', 'Garrett-Paul', 'Miranda-Noble'],
  // },
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
