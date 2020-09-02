import React from 'react';
import styled from  'styled-components';

const ChoiceWrap = styled.div`
  margin: 0 auto;
  column-count: 2;
  column-gap: 100px;
`;
const ChoiceLabel = styled.label`
  cursor:pointer;
  display: block;
`;
const ChoiceRadio = styled.input`
  cursor:pointer;
  margin-right: 5px;
`;


export function ChoicesFunc({openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Выбирйте:</h3>
            <ChoiceWrap>
                {openItem.choices.map((item, i) => (
                    <ChoiceLabel key={i}>
                        <ChoiceRadio
                            type="radio"
                            checked={choice == item}
                            value={item}
                            onChange={changeChoices}
                        />
                        {item}
                    </ChoiceLabel>
                ))}
            </ChoiceWrap>
        </>
    )
}