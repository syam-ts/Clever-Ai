import { TextGenerateEffect } from "./TextGen";
import React from 'react';


export function TextGenerateEffectDemo(props: any) {
  const words = props.words;

  return words == undefined ? (
    <TextGenerateEffect
      duration={2}
      filter={false}
      words={"Your output will be Shown here..."}
    />
  ) : (
    <TextGenerateEffect duration={2} filter={false} words={words} />
  );
}
