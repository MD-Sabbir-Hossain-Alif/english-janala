const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all') // promise of response
        .then(res => res.json()) // promise of json
        .then(json => displayLessons(json.data)) // gives object
}

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
                <button class="btn btn-outline btn-primary">
                    <i class="fa-solid fa-book-open"></i>
                        Lesson - ${lesson.level_no}
                </button>
        `
        // step:4 append into container
        levelContainer.appendChild(lessonBtnDiv);
        console.log(lesson)
    });
}

loadLessons()