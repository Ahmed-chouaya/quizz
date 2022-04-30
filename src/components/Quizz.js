import React, {useState, useEffect} from 'react'
import "./Quizz.css"
import Confetti from 'react-confetti'

function Quizz() {
    const [quiz, setQuiz] = useState(
        {"response_code":0,"results":[{"category":"Entertainment: Film","type":"multiple","difficulty":"hard","question":"In the 1976 film &#039;Taxi Driver&#039;, how many guns did Travis buy from the salesman?","correct_answer":"4","incorrect_answers":["2","6","1"]},{"category":"Entertainment: Television","type":"multiple","difficulty":"hard","question":"In Star Trek, what is the name of Spock&#039;s father?","correct_answer":"Sarek","incorrect_answers":["Tuvok","T&#039;Pal","Surak"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"In the Lego Island trilogy, who taught Pepper Roni how to read?","correct_answer":"Officer Laura Brick","incorrect_answers":["Papa Brickolini","Officer Nick Brick","Mama Brickolini"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"In the indie farming game &quot;Stardew Valley&quot;, which NPC hates the &quot;prismatic shard&quot; item when received as a gift?","correct_answer":"Haley","incorrect_answers":["Abigail ","Elliott","Lewis"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"GoldenEye 007 on the Nintendo 64 was planned to allow you to play as all previous Bond actors, with the exception of who?","correct_answer":"George Lazenby","incorrect_answers":["Roger Moore","Sean Connery","Timothy Dalton"]}]}
    )

    const [checkValue, setCheckValue] = useState([])
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => setQuiz(data))
    }, [])


    // randomise answers
    // Q1
    const [allAnswers1, setAllAnswers1] = useState([])
    
    useEffect(() => {
        const ans1 = quiz.results[0].incorrect_answers;
        ans1.splice(Math.floor(Math.random() * 3), 0, quiz.results[0].correct_answer);
        setAllAnswers1(ans1)
    }, [quiz])
    // Q2
    const [allAnswers2, setAllAnswers2] = useState([])
    
    useEffect(() => {
        const ans2 = quiz.results[1].incorrect_answers;
        ans2.splice(Math.floor(Math.random() * 3), 0, quiz.results[1].correct_answer);
        setAllAnswers2(ans2)
    }, [quiz])
    // Q3
    const [allAnswers3, setAllAnswers3] = useState([])
    
    useEffect(() => {
        const ans3 = quiz.results[2].incorrect_answers;
        ans3.splice(Math.floor(Math.random() * 3), 0, quiz.results[2].correct_answer);
        setAllAnswers3(ans3)
    }, [quiz])
    // Q4
    const [allAnswers4, setAllAnswers4] = useState([])
    
    useEffect(() => {
        const ans4 = quiz.results[3].incorrect_answers;
        ans4.splice(Math.floor(Math.random() * 3), 0, quiz.results[3].correct_answer);
        setAllAnswers4(ans4)
    }, [quiz])
    // Q5
    const [allAnswers5, setAllAnswers5] = useState([])
    
    useEffect(() => {
        const ans5 = quiz.results[4].incorrect_answers;
        ans5.splice(Math.floor(Math.random() * 3), 0, quiz.results[4].correct_answer);
        setAllAnswers5(ans5)
    }, [quiz])

    function playAgain() {
        setDisplay(false)
            fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuiz(data))
        let ele = document.getElementsByTagName('input');
        for(let i = 0; i < ele.length; i++) {
            ele[i].checked = false
        }
    }


    function ansValue() {
    let ele = document.getElementsByTagName('input');
    let val = []
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked) {
                val.push(ele[i].value)
                setCheckValue(val)
            }
        }
        setDisplay(true)
    }

    const correctAnswers = [quiz.results[0].correct_answer, quiz.results[1].correct_answer, quiz.results[2].correct_answer,quiz.results[3].correct_answer, quiz.results[4].correct_answer]

    function arrInter(a1,a2){
        return  a1.filter(function(n) { return a2.indexOf(n) !== -1});
    }

    // colors for Q1 
    let value1 = allAnswers1[0]
    let value2 = allAnswers1[1]
    let value3 = allAnswers1[2]
    let value4 = allAnswers1[3]
    // colors for Q2
    let value5 = allAnswers2[0]
    let value6 = allAnswers2[1]
    let value7 = allAnswers2[2]
    let value8 = allAnswers2[3]
    // colors for Q3
    let value9 = allAnswers3[0]
    let value10 = allAnswers3[1]
    let value11 = allAnswers3[2]
    let value12 = allAnswers3[3]
    // colors for Q4
    let value13 = allAnswers4[0]
    let value14 = allAnswers4[1]
    let value15 = allAnswers4[2]
    let value16 = allAnswers4[3]
    // colors for Q5
    let value17 = allAnswers5[0]
    let value18 = allAnswers5[1]
    let value19 = allAnswers5[2]
    let value20 = allAnswers5[3]



    return (
    <div className='quizz'>
        <h1 className='quizz-title' dangerouslySetInnerHTML={{__html:quiz.results[0].question}}/>
            <div className={display ? 'answers wrongAnswers' : 'answers'} id='groupA'>
                <input type="radio" id="answer1" name='groupA' value={allAnswers1[0]} />
                    <label style={{backgroundColor: display && value1 === quiz.results[0].correct_answer && '#B2E04F'}} htmlFor="answer1" dangerouslySetInnerHTML={{__html:allAnswers1[0]}}/>
                <input type="radio" id="answer2" name='groupA' value={allAnswers1[1]} />
                    <label style={{backgroundColor: display && value2 === quiz.results[0].correct_answer && '#B2E04F'}} htmlFor="answer2" dangerouslySetInnerHTML={{__html:allAnswers1[1]}}/>
                <input type="radio" id="answer3" name='groupA' value={allAnswers1[2]} />
                    <label style={{backgroundColor: display && value3 === quiz.results[0].correct_answer && '#B2E04F'}} htmlFor="answer3" dangerouslySetInnerHTML={{__html:allAnswers1[2]}}/>
                <input type="radio" id="answer4" name='groupA' value={allAnswers1[3]} />
                    <label style={{backgroundColor: display && value4 === quiz.results[0].correct_answer && '#B2E04F'}} htmlFor="answer4" dangerouslySetInnerHTML={{__html:allAnswers1[3]}}/>
            </div>
    <hr/>
        <h1 className='quizz-title' dangerouslySetInnerHTML={{__html:quiz.results[1].question}}/>
            <div className={display ? 'answers wrongAnswers' : 'answers'} id='groupB'>
                <input type="radio" id="answer5" name='groupB' value={allAnswers2[0]} />
                    <label style={{backgroundColor: display && value5 === quiz.results[1].correct_answer && '#B2E04F'}} htmlFor="answer5" dangerouslySetInnerHTML={{__html:allAnswers2[0]}}/>
                <input type="radio" id="answer6" name='groupB' value={allAnswers2[1]} />
                    <label style={{backgroundColor: display && value6 === quiz.results[1].correct_answer && '#B2E04F'}} htmlFor="answer6" dangerouslySetInnerHTML={{__html:allAnswers2[1]}}/>
                <input type="radio" id="answer7" name='groupB' value={allAnswers2[2]} />
                    <label style={{backgroundColor: display && value7 === quiz.results[1].correct_answer && '#B2E04F'}} htmlFor="answer7" dangerouslySetInnerHTML={{__html:allAnswers2[2]}}/>
                <input type="radio" id="answer8" name='groupB' value={allAnswers2[3]} />
                    <label style={{backgroundColor: display && value8 === quiz.results[1].correct_answer && '#B2E04F'}} htmlFor="answer8" dangerouslySetInnerHTML={{__html:allAnswers2[3]}}/>
            </div>
    <hr/>
        <h1 className='quizz-title' dangerouslySetInnerHTML={{__html:quiz.results[2].question}}/>
        <div className={display ? 'answers wrongAnswers' : 'answers'} id='groupC'>
                <input type="radio" id="answer9" name='groupC' value={allAnswers3[0]} />
                    <label style={{backgroundColor: display && value9 === quiz.results[2].correct_answer && '#B2E04F'}} htmlFor="answer9" dangerouslySetInnerHTML={{__html:allAnswers3[0]}}/>
                <input type="radio" id="answer10" name='groupC' value={allAnswers3[1]} />
                    <label style={{backgroundColor: display && value10 === quiz.results[2].correct_answer && '#B2E04F'}} htmlFor="answer10" dangerouslySetInnerHTML={{__html:allAnswers3[1]}}/>
                <input type="radio" id="answer11" name='groupC' value={allAnswers3[2]} />
                    <label style={{backgroundColor: display && value11 === quiz.results[2].correct_answer && '#B2E04F'}} htmlFor="answer11" dangerouslySetInnerHTML={{__html:allAnswers3[2]}}/>
                <input type="radio" id="answer12" name='groupC' value={allAnswers3[3]} />
                    <label style={{backgroundColor: display && value12 === quiz.results[2].correct_answer && '#B2E04F'}} htmlFor="answer12" dangerouslySetInnerHTML={{__html:allAnswers3[3]}}/>
            </div>
    <hr/>
        <h1 className='quizz-title' dangerouslySetInnerHTML={{__html:quiz.results[3].question}}/>
        <div className={display ? 'answers wrongAnswers' : 'answers'} id='groupD'>
                <input type="radio" id="answer13" name='groupD' value={allAnswers4[0]} />
                    <label style={{backgroundColor: display && value13 === quiz.results[3].correct_answer && '#B2E04F'}} htmlFor="answer13" dangerouslySetInnerHTML={{__html:allAnswers4[0]}}/>
                <input type="radio" id="answer14" name='groupD' value={allAnswers4[1]} />
                    <label style={{backgroundColor: display && value14 === quiz.results[3].correct_answer && '#B2E04F'}}  htmlFor="answer14" dangerouslySetInnerHTML={{__html:allAnswers4[1]}}/>
                <input type="radio" id="answer15" name='groupD' value={allAnswers4[2]} />
                    <label style={{backgroundColor: display && value15 === quiz.results[3].correct_answer && '#B2E04F'}}  htmlFor="answer15" dangerouslySetInnerHTML={{__html:allAnswers4[2]}}/>
                <input type="radio" id="answer16" name='groupD' value={allAnswers4[3]} />
                    <label style={{backgroundColor: display && value16 === quiz.results[3].correct_answer && '#B2E04F'}}  htmlFor="answer16" dangerouslySetInnerHTML={{__html:allAnswers4[3]}}/>
            </div>
    <hr/>
        <h1 className='quizz-title' dangerouslySetInnerHTML={{__html:quiz.results[4].question}}/>
        <div className={display ? 'answers wrongAnswers' : 'answers'} id='groupE'>
                <input type="radio" id="answer17" name='groupE' value={allAnswers5[0]} />
                    <label style={{backgroundColor: display && value17 === quiz.results[4].correct_answer && '#B2E04F'}}  htmlFor="answer17" dangerouslySetInnerHTML={{__html:allAnswers5[0]}}/>
                <input type="radio" id="answer18" name='groupE' value={allAnswers5[1]} />
                    <label style={{backgroundColor: display && value18 === quiz.results[4].correct_answer && '#B2E04F'}} htmlFor="answer18" dangerouslySetInnerHTML={{__html:allAnswers5[1]}}/>
                <input type="radio" id="answer19" name='groupE' value={allAnswers5[2]} />
                    <label style={{backgroundColor: display && value19 === quiz.results[4].correct_answer && '#B2E04F'}} htmlFor="answer19" dangerouslySetInnerHTML={{__html:allAnswers5[2]}}/>
                <input type="radio" id="answer20" name='groupE' value={allAnswers5[3]} />
                    <label style={{backgroundColor: display && value20 === quiz.results[4].correct_answer && '#B2E04F'}} htmlFor="answer20" dangerouslySetInnerHTML={{__html:allAnswers5[3]}}/>
            </div>
    <hr/>
        <div className='forButton'>
            {display && <p className='score'>{arrInter(correctAnswers, checkValue).length}/5 correct answers</p>}
            {display ? <button onClick={playAgain} className='check'>Play again</button> :<button onClick={ansValue} className='check'>Check answers</button>}
        </div>
        {arrInter(correctAnswers, checkValue).length === 5 && <Confetti />}
    </div>
  )
}

export default Quizz