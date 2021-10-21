import { writable } from "svelte/store";

// export let initleaderboard = [
//   {
//     name: 'Latoya Boyd',
//     profile: 'https://github.com/Ethel-Booth',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Delaney Figueroa',
//     profile: 'https://github.com/Ina-Adkins',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Roslyn Woodard',
//     profile: 'https://github.com/Henson-Shields',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Imogene Aguilar',
//     profile: 'https://github.com/Bryant-Chase',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Peterson Howard',
//     profile: 'https://github.com/Janis-Callahan',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Stanton Carey',
//     profile: 'https://github.com/Ward-Hendrix',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Snyder Rush',
//     profile: 'https://github.com/Blair-Henson',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Alyce Schultz',
//     profile: 'https://github.com/Elvira-Whitney',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Leanna Gilmore',
//     profile: 'https://github.com/Newman-Baxter',
//     score: 150,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Figueroa Dunn',
//     profile: 'https://github.com/Janie-Miles',
//     score: 134,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Kelly Wiley',
//     profile: 'https://github.com/Barbra-Craft',
//     score: 192,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Lilian Blair',
//     profile: 'https://github.com/Robinson-French',
//     score: 93,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Oneill Floyd',
//     profile: 'https://github.com/Gale-Norman',
//     score: 156,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Michelle Malone',
//     profile: 'https://github.com/Rowe-Battle',
//     score: 173,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Trevino Logan',
//     profile: 'https://github.com/Madeline-Landry',
//     score: 105,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Margo Bell',
//     profile: 'https://github.com/Elsa-Ferguson',
//     score: 167,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Harvey Wiggins',
//     profile: 'https://github.com/Benton-Adams',
//     score: 99,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Wolf Stark',
//     profile: 'https://github.com/Katina-Hewitt',
//     score: 65,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Edwards Wagner',
//     profile: 'https://github.com/Price-Romero',
//     score: 104,
//     rollno: '2018XXX-YYY',
//   },
//   {
//     name: 'Addie Carney',
//     profile: 'https://github.com/Gayle-Huffman',
//     score: 41,
//     rollno: '2018XXX-YYY',
//   },
// ]

export let leaderboard = writable([]);

const titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

export const rankify = () => {
  leaderboard.subscribe((lb) => {
    lb.forEach((p, i) => {
      p.name = titleCase(p.name);
    });
    lb.sort((a, b) => (b.name > a.name ? -1 : 1));
    lb.sort((a, b) => b.easy - a.easy);
    lb.sort((a, b) => b.medium - a.medium);
    lb.sort((a, b) => b.hard - a.hard);
    lb.sort((a, b) => b.score - a.score);

    lb.forEach((p, i) => {
      p.rank = i + 1;
    });
  });
};

export const searchQueryStore = writable("");

export const pstringify = () => {
  leaderboard.subscribe((lb) => {
    lb.forEach((p) => {
      p.str = p.name + " " + p.profile + " ";
    });
  });
};
export const search = () => {
  let q = "";
  searchQueryStore.subscribe((data) => (q = data.toLowerCase()));
  let keywords = q.split(" ");
  let results = [];
  let resultSet = new Set();
  leaderboard.subscribe((lb) => {
    keywords.forEach((keyword) => {
      if (q == "" || keyword !== "") {
        results = results.concat(
          lb.filter((p) => p.str.toLowerCase().includes(keyword))
        );
      }
    });

    results.forEach((r) => {
      resultSet.add(r);
    });
  });
  return Array.from(resultSet);
};
