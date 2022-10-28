import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programming',
      firstColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Data-Science',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      name: 'Design & UX',
      firstColor: '#DB6B69',
      secondColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      firstColor: '#FEBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Innovation and management',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF'
    }
  ]

  const [contributors, setContributors] = useState([]);

  const ttAddNewContributor = (contributor) => {
    setContributors([...contributors, contributor]);
  }

  return (
    <div className="App">
      <Banner/>
      <Form teamsName={teams.map(team => team.name)} ttregisteredContributor={contributor => ttAddNewContributor(contributor)}/>

      {teams.map(team => 
        <Team 
          key={team.name} 
          name={team.name} 
          firstColor={team.firstColor} 
          secondColor={team.secondColor} 
          contributors={contributors.filter(contributor => contributor.team === team.name)}
        />)};

      <Footer/>

    </div>
  );
}

export default App;
