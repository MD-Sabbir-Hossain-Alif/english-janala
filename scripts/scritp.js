//* fetch lessons level data
const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all') // promise of response
        .then(res => res.json()) // promise of json
        .then(json => displayLessons(json.data)) // gives object
}

//* function LoadLevelWord 
const LoadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    
    fetch(url)
        .then(res=> res.json())
        .then(words => displayLevelWord(words.data))
    
}

// {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// }

//* function level Words
const displayLevelWord = (words) => {
    // console.log(words)

    const wordContainer = document.getElementById('word-conainer');
    wordContainer.innerHTML = '';

    words.forEach(word => {
        const wordCardDiv = document.createElement('div')
        wordCardDiv.innerHTML = `
        <div class="card bg-white px-5 py-10 shadow-sm text-center space-y-6">
            <h3 class="text-[2rem] font-bold">${word.word}</h3>
            <p class="text-xl font-medium">Meaning / Pronounciation</p>
            <h3 class="font-bangla text-[2rem] font-semibold text-[#000000CC]">"${word.meaning} / ${word.pronunciation}"</h3>
            <div class="flex justify-between mt-6">
                <button class="btn btn-info btn-outline"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn btn-info btn-outline"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.appendChild(wordCardDiv)
    })
}

//* fucntion displayLessons  
const displayLessons = (lessons) => {
    // console.log(lessons)
    //? 4 Steps of rendaring element

    // step:1 get continer and make empty 
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML = '';

    // step:2 get into every lessons 
    lessons.forEach(lesson => {
        // step:3 create element
        const lessonBtnDiv = document.createElement('div');
        lessonBtnDiv.innerHTML = `
                <button onclick="LoadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
                    <i class="fa-solid fa-book-open"></i>
                        Lesson - ${lesson.level_no}
                </button>
        `
        // step:4 append into container
        levelContainer.appendChild(lessonBtnDiv);
        // console.log(lesson)
    });
}

loadLessons()