class Slide
{
    constructor(title, image, description, author, year)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

var slide1 = new Slide("Stonewall Riots", "images/Stonewall1969.jpg", "Protests for gay rights at in New York. Known as the Stonewall riots. These events are why we celebrate pride month in June.", "Fred W McDarrah", "1970");

var slide2 = new Slide("New York United Nations", "images/NewYork2019.jpg", "World Pride Celebration for all LGBTQIA+ individuals. This parade was held on the 50th aniversary of the Stonewall Riots.", "Unknown", "2019");

var slide3 = new Slide("Seoul Queer Culture Festival", "images/SouthKorea2022.jpg", "In the photo we see a bunch of people standing outside of the city hall in Seoul. This is for the Seoul Queer Arts Festival. Visibility from the community is very important here, especially since discrimination is still very prevelant.", "Lee Young-ho", "2022");

var slide4 = new Slide("Uganda fails to protect LGBTQIA+ community members", "images/uganda2023.jpg", "In 2023 Uganda passed a bill that banned same-sex relationships. Punishments can be recieved for simply loving who you want and being yourself.", "Alet Pretorius", "2023");

var slide5 = new Slide("London Protest", "images/London2025.jpg", "This photo depicts a protest done in London with the Peter Tatchell Foundation. This foundation speaks out for everyones human rights around the world.", "Unknown", "2025");

var slides = [slide1, slide2, slide3, slide4, slide5];

function displaySlide(slide){
    document.getElementById("slideTitle").textContent = slide.title;
    document.getElementById("slideImage").src = slide.image;
    document.getElementById("slideDescription").textContent = slide.description;
    document.getElementById("slideAuthor").textContent = "Author: " + slide.author;
    document.getElementById("slideYear").textContent = "Year: " + slide.year;
}

function nextSlide()
{
    let randomIndex = Math.floor(Math.random() * slides.length);
    let chosenSlide = slides[randomIndex];
    console.log(chosenSlide);
    displaySlide(chosenSlide);
}
