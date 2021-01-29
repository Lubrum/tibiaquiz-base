/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useRouter } from 'next/router';
// import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

// import Button from 'react-bootstrap/Button';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>

        <QuizLogo />

        <Widget>

          <Widget.Header>
            {db.title}
          </Widget.Header>

          <Widget.Content>

            <p>{db.description}</p>

            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >

              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Informe seu apelido"
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>

            </form>
            { /*
            <Form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <h1>
                Teste os seus conhecimentos sobre o vasto universo de Tibia e divirta-se
                criando o seu AluraQuiz!
              </h1>

              <br />

               <Form.Group controlId="form_group_1">
                <Form.Control
                  style={{
                    backgroundColor: db.theme.colors.mainBg,
                    color: '#eeeeee',
                  }}
                  placeholder="Informe seu apelido"
                  onChange={function (info) {
                    setName(info.target.value);
                  }}
                />
                <Form.Text className="text-tip-input">
                  Vai ser bem bacana ;)
                </Form.Text>
              </Form.Group>

              <br />
              <Button variant="outline-danger" type="submit" block disabled={name.length === 0}>
                Jogar {name}
              </Button>

            </Form>
            */ }
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <p style={{
              fontWeight: 'bold',
              fontSize: '20px',
            }}
            >
              Quizes da galera
            </p>
            <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão da Alura fez: </p>

            <Card style={{
              color: '#eeeeee',
              backgroundColor: db.theme.colors.secondaryBg,
              margin: '10px 5px',
            }}
            >
              <Card.Body>fulano/quizDaAlura</Card.Body>
            </Card>

            <Card style={{
              color: '#eeeeee',
              backgroundColor: db.theme.colors.secondaryBg,
              margin: '10px 5px',
            }}
            >
              <Card.Body>ciclano/quizDaAlura</Card.Body>
            </Card>

            <Card style={{
              color: '#eeeeee',
              backgroundColor: db.theme.colors.secondaryBg,
              margin: '10px 5px',
            }}
            >
              <Card.Body>beltrano/quizDaAlura</Card.Body>
            </Card>
          </Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>
      <GithubCorner projectUrl="http://github.com/Lubrum" />
    </QuizBackground>
  );
}
