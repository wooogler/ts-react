import * as React from 'react';
import { useState, useRef, useCallback } from 'react';

const WordRelay = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [word, setWord] = useState('제로초');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      if (input) {
        input.focus();
      }
    } else {
      setResult('땡');
      setValue('');
      if (input) {
        input.focus();
      }
    }
  }, [value, word])

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, [])

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}

export default WordRelay;