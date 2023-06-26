import Section from './components/Section';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Section
        title="Who"
        items={[
          { text: 'Kamil Chmielewski', subText: 'Inżynier Oprogramowania'},
          {text: 'Anna Koprucka', subText: "Psycholog Biznesu"},
        ]}
      />
      {/* <Section title="About" text="A 21 year old student of Software Engineering and Management on Univeristy of Gothenburg." subText="subtext"/>
      <Section title="Experience" text="Remondis Polska" subText="subtext"/>
      <Section title="Eductaion" text='ZSTiO "Mechanik", The Silesian University of Technology, Univeristy of Gothenburg' subText="subtext"/>
      <Section title="Licences & Certifications" text='CCNA: Introduction to Networks, Dyplom potwierdzający kwalifikacje w zawodzie Technik Informatyk, React - The Complete Guide 2023 (incl. React Router & Redux)' subText="subtext"/>
      <Section title="Contact" text="" subText="subtext"/> */}
    </Wrapper>
  );
}

export default App;
