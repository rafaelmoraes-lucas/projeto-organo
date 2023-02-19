import { useState } from 'react';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Team } from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF'
    }
  ]

  const [contributors, setContributors] = useState([])

  const onNewContributorAdded = (contributor) => {
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onContributorRegistered={contributor => onNewContributorAdded(contributor)}/>

      {teams.map(team => <Team
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secundaryColor={team.secundaryColor} 
        contributors={contributors.filter(contributor => contributor.team === team.name)}
      />)}   

    <Footer />
    </div>
  );
}

export default App;
