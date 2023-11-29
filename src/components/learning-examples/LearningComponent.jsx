import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent'
import {FifthComponent} from './FirstComponent'
import LearningJavascript from './LearningJavaScript'

export default function LearningComponent() {
    return (
      <div className="App">
          My Todo Application Updated
          <FirstComponent></FirstComponent>
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
          <FourthComponent></FourthComponent>
          <FifthComponent></FifthComponent>
          <LearningJavascript></LearningJavascript>
      </div>
    );
  }