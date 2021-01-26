import React from 'react';
import styled from 'styled-components'
import { useState } from 'react'
import Flex from './Flex';
import Line from './Line';

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background: black;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${({color}) => color || "white"};
    &:focus {
        outline: none;
    }
`

const Console = ({color, ...props}) => {

    const [line, setLine] = useState(['C:/users/deputatalbert>'])
    const onKeyPress = e => {
        if (e.charCode == 13) {
            setLine([...line, 'C:/users/deputatalbert>'])
        }
    }


    return (
        <Flex>
            <Flex direction={'column'} margin={'0 10px'}>
                {
                    line.map(line => 
                        <Line color={color}>{line}</Line>)
                }
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
        </Flex>
    )
}

export default Console;