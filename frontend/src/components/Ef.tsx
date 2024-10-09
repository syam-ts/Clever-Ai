 
import { TextGenerateEffect } from "./TextGen";



export function TextGenerateEffectDemo(props: any) {
    console.log('The ada ', props.words.toString())
    const words = props.words;
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
