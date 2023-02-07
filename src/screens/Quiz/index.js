/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Head from 'next/head';
import db from '../../../db.json';
import AlternativesForm from '../../components/AlternativeForm';
import Widget from '../../components/Widget';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import Button from '../../components/Button';
import BackLinkArrow from '../../components/BackLinkArrow';
import Icon from '../../components/Icon';

const timeToChangePageMs = 3000;

function ResultWidget({ results }) {
  const rightAnswers = results.filter((x) => x).length;
  const totalAnswers = results.length;
  const percentual = Math.round(((rightAnswers / totalAnswers) + Number.EPSILON) * 100);
  // eslint-disable-next-line no-nested-ternary
  const playerKnowledge = percentual > 80 ? 'um mestre de tibia, o sabichão' : percentual > 50 ? 'um jogador mediano...' : percentual > 30 ? 'um mero aprendiz h3h3' : 'n00b';
  return (
    <Widget>
      <Widget.Header>
        <p style={{ fontSize: '20px' }}>Resultados</p>
      </Widget.Header>

      <img
        alt="Imagem do Loading"
        style={{
          width: '100%',
          height: '100%',
        }}
        src="https://media1.tenor.com/images/0e3de95b90077d956ce520035d435c66/tenor.gif"
      />

      <Widget.Content>
        Você acertou
        {' '}
        { rightAnswers }
        {' '} de um total de {' '}
        { totalAnswers } questões.
        <br />
        Percentual de acertos: { `${percentual}%` }.
        <br />
        <br />
        Você é { playerKnowledge }.
        <br />
        <br />
        <ul key="result__final">
          {results.map((result, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`result__${index}`}>
              #
              {index + 1}
              {' '}
              Resultado: {' '} {' '}
              { result === true ? 'Acertou' : 'Errou' }
            </li>
          ))}
        </ul>
        <a href="/">Tentar novamente...</a>
      </Widget.Content>

    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content style={{ padding: '0px' }}>
        <img
          alt="Imagem do Loading"
          style={{
            width: '100%',
            height: '100%',
          }}
          src="https://cdn.dribbble.com/users/18886/screenshots/1027635/loading.gif"
        />
      </Widget.Content>
    </Widget>
  );
}

function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(false);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const [executing, setExecuting] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const onRealClick = async () => {
    await sleep(10);
    setExecuting(true);
    try {
      // eslint-disable-next-line no-undef
      await sleep(timeToChangePageMs);
    } finally {
      setExecuting(false);
    }
  };

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '300px',
          padding: '50px',
        }}
        src={question.image}
      />

      <Widget.Content>

        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          setIsQuestionSubmited(true);
          const timer = setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, timeToChangePageMs);
          return () => { clearTimeout(timer); };
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
                style={{
                  animation: alternativeIndex === question.answer && isQuestionSubmited && !isCorrect ? 'color-change-success 0.5s infinite' : '',
                }}
              >
                <input
                  style={{ display: 'none' }}
                  disabled={isQuestionSubmited}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => {
                    setSelectedAlternative(alternativeIndex);
                  }}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button
            type="submit"
            disabled={!hasAlternativeSelected || executing}
            onClick={onRealClick}
          >
            Confirmar
          </Button>
          <br /><br />
          { isQuestionSubmited && isCorrect
          && (
            <Icon
              src="https://www.freeiconspng.com/uploads/ok-icon-success-19.png"
              width="50"
              alt="ok icon Success"
            />
          )}

          { isQuestionSubmited && !isCorrect
          && (
            <Icon
              src="https://www.freeiconspng.com/uploads/error-icon-4.png"
              width="50"
              alt="Free High quality Error Icon"
            />
          ) }
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <Head>
        <title>Tibia Quiz</title>
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <QuizLogo />

        {screenState === 'QUIZ' && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === 'LOADING' && <LoadingWidget />}
        {screenState === 'RESULT' && <ResultWidget results={results} />}

      </QuizContainer>
    </QuizBackground>
  );
}
