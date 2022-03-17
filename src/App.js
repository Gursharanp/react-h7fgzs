import React,{useContext} from "react";
import "./style.css";
import Container from "./Container"
import ContextWrapper from './ContextWrapper';
export default function App() {
  

  return (
    <ContextWrapper>
            <Container/>
    </ContextWrapper>
  );
}
