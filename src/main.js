import App from './App.svelte'

console.log(
  '%cKunal Jain %chttps://github.com/kunaljain0212\n%cHarsh Sharma %chttps://github.com/hs2361\n%cAaryak Shah %chttps://github.com/aaryak-shah',
  'font-size: 8pt; color: white; background-color: black;',
  'font-size: 8pt; color: #00ff00; background-color: black;',
  'font-size: 8pt; color: white; background-color: black;',
  'font-size: 8pt; color: #00ff00; background-color: black;',
  'font-size: 8pt; color: white; background-color: black;',
  'font-size: 8pt; color: #00ff00; background-color: black;'
)

const app = new App({
  target: document.body,
})

export default app
