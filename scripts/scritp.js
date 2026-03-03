//* fetch lessons level data
const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all') // promise of response
        .then(res => res.json()) // promise of json
        .then(json => displayLessons(json.data)) // gives object
}

//* remove active class function
const removeActive = () => {
    const lessonButtons = document.querySelectorAll('.lesson-btn');
    // alert('got remove class')
    lessonButtons.forEach(btn => btn.classList.remove('active'))
}

//* function LoadLevelWord 
const LoadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(words => {
            removeActive() // remove all active class from lesson btn
            const clickBtn = document.getElementById(`lesson-btn-${id}`)
            // console.log(clickBtn)
            clickBtn.classList.add('active') // add active class in targeted btn
            displayLevelWord(words.data);
        })

}

//* function level Words
const displayLevelWord = (words) => {
    // console.log(words)

    const wordContainer = document.getElementById('word-conainer');
    wordContainer.innerHTML = '';

    if (words.length === 0) {
        wordContainer.innerHTML = `
                <div class="font-bangla text-center col-span-full space-y-3">
                    <div class="flex justify-center"><img src="assets/alert-error.png"></div>
                    <p class=" text-gray-500 text-lg">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি!</p>
                    <h3 class="text-[#292524] text-[2.2rem] font-medium">নেক্সট Lesson এ যান।</h3>
                </div>
            `
        return;
    }

    // {
    // "id": 4,
    // "level": 5,
    // "word": "Diligent",
    // "meaning": "পরিশ্রমী",
    // "pronunciation": "ডিলিজেন্ট"
    // }

    words.forEach(word => {
        const wordCardDiv = document.createElement('div')
        wordCardDiv.innerHTML = `
        <div class="card bg-white px-5 py-10 shadow-sm text-center space-y-6">
            <h3 class="text-[2rem] font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h3>
            <p class="text-xl font-medium">Meaning / Pronounciation</p>
            <h3 class="font-bangla text-[2rem] font-semibold text-[#000000CC]">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যায়নি"}"</h3>
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
                <button id="lesson-btn-${lesson.level_no}" onclick="LoadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
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