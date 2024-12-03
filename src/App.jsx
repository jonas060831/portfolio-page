
import MastHead from "./components/ui/MastHead"
import SkillChart from "./components/ui/SkillChart"
const App = () => {

  const mySkills = [
    {
      name:'JavaScript',
      comfort: 10,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 6.8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 7.5,
      frontEnd: true,
      backend: false
    },
    {
      name:'PYTHON',
      comfort: 7.5,
      frontEnd: true,
      backend: false
    },
  ]

  const myProfile = {
    name: {
      first: 'Jonas Paulo',
      middle: 'Rufo',
      last: 'Sulit',
    },
    imageUrl: './media/defaults/images/jonasimage.png',

    skills: mySkills
  }



  return (
    <>

      <MastHead
       imageUrl={myProfile.imageUrl}
       myName={`${myProfile.name.first} ${myProfile.name.middle.charAt(0)}. ${myProfile.name.last}`}
      />

      <SkillChart skills={myProfile.skills}/>
    </>
  )
}

export default App
