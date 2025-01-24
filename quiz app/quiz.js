let questions = [
    {
        'title' : "What is the power house of the cell?",
        'options': ['Mitochondria','Nucleus','Centrioles','Ribosomes'],
        'answer' : 'Mitochondria'
    },

    {
        'title' : "Which is the strongest chamber of heart?",
        'options': ['Left Ventricle','Right Atrium','Right Ventricle','Left Atrium'],
        'answer' : 'Left Ventricle'
    },

    {
        'title' : "What is CPU? ",
        'options': ['Central Processing Unit','Mouse','Hard Drive','Keyboard'],
        'answer' : 'Central Processing Unit'
    },
    {
        'title' : "What is the Top Speed of  koenigsegg? ",
        'options': [256,100,250,320],
        'answer' : 256
    },
    {
        'title' : "What is the forth letter of greek?  ",
        'options': ['Delta ','Alpha ','Barvo ','Charlie'],
        'answer' : 'Delta '
    },

    {
        'title' : "How many dots appear on a pair of dice?  ",
        'options': ['42 dots ','44 dots ','46 dots ','48 dots'],
        'answer' : 42 
    },
    {
        'title' : "Who is known as the poet of the east? ",
        'options': ['Sir Muhammad Iqbal ','Sir Syed Ahmad Khan ','Muhammad Ali Jinnah','Johar '],
        'answer' : 'Sir Muhammad Iqbal '
    },
    {
        'title' : "How many hours in a week?  ",
        'options':  [40,168,250,320],
        'answer' : 168
    },
    {
        'title' : "Who is founder of Muslim league Party? ",
        'options':  ['Nawaz Sharif ','Imran Khan  ','Shahbaz Sherif','Capt Safdar'],
        'answer' : 'Nawaz Sharif'
    },
    {
        'title' : "What is the brain of cell? ",
        'options':  ['Nucleus', 'Ribosomes', 'Mitochondria', 'Golgi Apparatus'],
        'answer' : 107
    },

]
let questions_index = 0
let result = 0

function start() {
    questions_index = 0
    result = 0
    let start_btn = document.getElementById('start')
    start_btn.addEventListener('click',function() {
        add_question()
    })
}
start()

function add_question() {
    let current_question = questions[questions_index]
    console.log(current_question)

    let container = document.getElementById('container')
    container.innerHTML = '<h1>' + current_question.title +'</h1>'

    for(option of current_question.options ) {
        let option_btn_new = document.createElement('button')
        option_btn_new.innerText = option
        container.append(option_btn_new)
    }
    
    check_answer()
}

function check_answer() {
    let current_question = questions[questions_index]
    let option_btns = document.querySelectorAll('button')

    for(option_btns of option_btns){
        option_btns.addEventListener('click',function() {
            let user_selection = this.innerText

            if(user_selection == current_question.answer){
                result++
            }
            if(questions_index < questions.length  - 1)
            {
                questions_index++
                add_question()
            }
            else{
                end_game()
            }

        });
    }
}

function end_game(){
    let container = document.getElementById('container')
    container.innerHTML = '<h1> Game Over ! </h1> <h1> Score: ' + result + '/' + questions.length + '</h1>'

    let restart_btn = document.createElement('button')
    restart_btn.id = 'start'
    restart_btn.innerText = 'Restart'

    container.append(restart_btn)
    start()
}