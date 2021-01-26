import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'
import QuizBackground from '../src/components/QuizBackground'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header> 
            <h1>Tibia</h1>
          </Widget.Header> 
          <Widget.Content>
            <p>Tibia Quiz Upcoming ;)</p>
          </Widget.Content>
        </Widget>

        <Widget>
            <Widget.Content>
              <p>215421 5152 1212 51! </p>
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="http://github.com/Lubrum"/>
    </QuizBackground>
  )
}
