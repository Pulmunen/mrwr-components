import Accordion
 from "./components/Accordion";

function App() {
  const items = [
    {
      id:'l342gf',
      label:"Can I use React on a project?",
      content:"You can use React on any project you want. You can use React on this project"
    },
    {
      id:'l34q234gff',
      label:"Can I use JavaScript on a project?",
      content:"You can use JavaScript on any project you want. You can use JavaScript on this project"
    },
    {
      id:'9099da',
      label:"Can I use css on a project?",
      content:"You can use css on any project you want. You can use css on this project"
    }
  ]

 return <Accordion items={items}/>
}

export default App;
