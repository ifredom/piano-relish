import React from "react";
import { NotationService } from './NotationService';
import { PianoNote } from '../core/PianoNote';
import './Notation.css';


interface IProps {
  notes: PianoNote[],
  showNames: boolean;
};

const notationService = new NotationService();

const Notation: React.FC<IProps> = (props) => {

  const svg = notationService.renderNotation(props.notes, props.showNames)

  return (
    <div id="notation" className="container" dangerouslySetInnerHTML={{ __html: svg }} />
  );

}

export default Notation;
