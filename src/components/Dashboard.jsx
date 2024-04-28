import React from 'react'
import HeaderBar from './HeaderBar'
import FootBar from './FootBar'
import { PageContainer, Container } from '../Style'

export default function Dashboard () {
    const [nGames, setNGames] = React.useState(0)
    
    async function getScore () {
        return fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/info.json', {
            method: 'GET'
        })
        .then(data => data.json())
    }

    React.useEffect(() => {
        async function setScore () {
            const iniScore = await getScore()
            setNGames(iniScore.score)
            localStorage.setItem('score', JSON.stringify(iniScore.score))
        }
        
        const score = JSON.parse(localStorage.getItem('score'))   
        if (score === undefined || score === null) {
            setScore()
        }
        setNGames(score)
    }, [])

    async function resetValue () {
        const initScore = await getScore()
        localStorage.setItem('score', JSON.stringify(0))
        setNGames(0);
    }

    return (
        <PageContainer>
            <HeaderBar />
            <Container>
                <div id="infos">
                    <div id="main-title">
                        Please choose an option from the navbar.
                    </div>
                    <div id="sub-title">
                        Games won: {nGames} <button onClick={resetValue}>(reset)</button>
                    </div>
                </div>
            </Container>
            <FootBar />
        </PageContainer>
    )
}