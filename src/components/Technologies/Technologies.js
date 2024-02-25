import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAws, DiSpark, DiWebplatform, DiDatabase, DiDocker, DiGit, DiPython, DiGoogleAnalytics, DiAngularSimple } from 'react-icons/di';
import {GiArtificialIntelligence} from 'react-icons/gi'
import {SiTensorflow, SiApacheairflow, SiApachekafka} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
    <SectionDivider divider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Coming from the worlds of both software Engineering and Data Science, I've worked on a range of technoligies in ML, Data Engineering and Software Engineering.
    </SectionText>
    <List>
    <ListItem>
        <picture>
          <DiPython size= "3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages and Frameworks</ListTitle>
          <ListParagraph>
            Python, R, Java, C#, SQL, PyTorch,  <br/>
            Tensorflow, .NET, Scrapy
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiArtificialIntelligence size= "3rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Artificial Intelligence</ListTitle>
          <ListParagraph>
            Supervised ML, NLP, Deep Learning, Gen AI, <br/>
            Large Language Models, LangChain, ANN, RNN, LSTM <br/>
            NLP, Generative AI, Computer Vision, LLM's
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGoogleAnalytics size= "4rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Data Analysis</ListTitle>
          <ListParagraph>
            Scipy, Numpy, Pandas, Matplotlib, <br/>
            Web Scraping, Snowflake, MongoDB.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size= "4rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Software Design</ListTitle>
          <ListParagraph>
            Distributed Systems, Multithreading, Full-Stack Development <br/>
            RDBMS, System Design, NoSQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiSpark size= "4rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Big Data Technologies</ListTitle>
          <ListParagraph>
            Spark, Pandas, MapReduce, Big Data Analysis,
            AWS SQS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiSpark size= "4rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Cloud & DevOps</ListTitle>
          <ListParagraph>
            AWS, Jenkins Core, CI/CD, Git, Docker, Kubernetes,<br/>
            Airflow, MLFlow.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAngularSimple size= "4rem"/>
        </picture>
        <ListContainer>
          <ListTitle>FrontEnd and Backend Development</ListTitle>
          <ListParagraph>
            Angular, React, .NET Core, SpringBoot.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
