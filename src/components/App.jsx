import React from "react";
import { Feedback } from './Feedback/feedback';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/section";
import { Container } from "components/App.styled";

export class App extends React.Component {

  static propTypes = {}
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

onBtnClick = (actionType) => {
  this.setState(prevState => ({
    [actionType]: prevState[actionType] + 1,
  }))
}

countTotalFeedback = () => {
  return Object.values(this.state).reduce((prev, nmbr) => prev + nmbr);  
}
countPositiveFeedbackPercentage = () => {  
  return Math.floor((this.state.good * 100) / this.countTotalFeedback());
}

render() {
  const total = this.countTotalFeedback();

  return (
    <Container>
      <Section
        title="Please leave feedback">
          <Feedback
            onBtnClick={this.onBtnClick}
            arrayOfOptions={Object.keys(this.state)}                        
          />
      </Section>
        {total ? (
                    <Section
                        title="Statistics"
                    >
                        <Statistics
                            rates={this.state}
                            total={this.countTotalFeedback()}
                            positive={this.countPositiveFeedbackPercentage()}
                        />
                    </Section>

                ) : (
                    <Notification message="There is no feedback" />
                )}
    </Container>    
  );
  };
};

export default App;