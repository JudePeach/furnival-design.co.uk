function toggleMenu(){
    const menu = document.querySelector('.mobile-menu-links');
    const icon = document.querySelector('.mobile-nav-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function showStory(){
    const title = document.createElement('h1');
    const titleText = document.createTextNode("Story");
    title.appendChild(titleText);



    const story = document.createElement('p');
    story.classList.add('hidden'); // Start hidden
    const text = document.createTextNode('Then, in 2016, a familiar face stepped up to carry the torch. David Peach, a faithful employee since 1994, acquired the Furnival Press from Johnny Gumb. Not content with resting on past achievements, David also purchased TKO Print, another respected family-run printing company established in 1985. With this union, Furnival Press gained fresh momentum.');
    
    story.appendChild(text);

    const storyContainer = document.getElementById("story-container");
    storyContainer.appendChild(title);
    storyContainer.appendChild(story);

    var button = document.getElementById("storyButton");
    button.disabled = true;

    // Trigger the animation
    setTimeout(() => {
        story.classList.add('fade-in');
    }, 10);
}

function showHistory(){
    const title = document.createElement('h1');
    const titleText = document.createTextNode("History");
    title.appendChild(titleText);
    const history = document.createElement('p');
    history.classList.add('hidden'); // Start hidden
    const historyText = document.createTextNode('Once upon a time, in the bustling streets of London, a printing legacy was born. It all began in 1861 when George Barber, a visionary Victorian entrepreneur hailing from the Kent coast, set foot in the city to seek his fortune. With a fervent passion for the art of printing, he established the Furnival Press, a local printing company that would soon make its mark in history.');
    history.appendChild(historyText);

    const historyContainer = document.getElementById("history-container");
    historyContainer.appendChild(title);
    historyContainer.appendChild(history);

    // Trigger the animation
    setTimeout(() => {
        history.classList.add('fade-in');
    }, 10);

    var button = document.getElementById("historyButton");
    button.disabled = true;

}