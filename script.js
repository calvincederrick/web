window.onload = function() {
    const quotes = [
        '"Technology is best when it brings people together." - Matt Mullenweg',
        '"The science of today is the technology of tomorrow." - Edward Teller',
        '"Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke',
        '"It has become appallingly obvious that our technology has exceeded our humanity." - Albert Einstein',
        '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
        '"The technology you use impresses no one. The experience you create with it is everything." - Sean Gerety',
        '"Technology is a useful servant but a dangerous master." - Christian Lous Lange',
        '"The real problem is not whether machines think but whether men do." - B.F. Skinner',
        '"The great myth of our times is that technology is communication." - Libby Larsen',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"The human spirit must prevail over technology." - Albert Einstein',
        '"Technology is the campfire around which we tell our stories." - Laurie Anderson',
        '"We are stuck with technology when what we really want is just stuff that works." - Douglas Adams',
        '"The most technologically efficient machine that man has ever invented is the book." - Northrop Frye',
        '"Any sufficiently advanced bug is indistinguishable from a feature." - Rich Kulawiec',
        '"As a technologist, we are responsible for solving problems, not creating new ones." - Tim Berners-Lee',
        '"The advance of technology is based on making it fit in so that you don’t really even notice it." - Bill Gates',
        '"The real danger is not that computers will begin to think like men, but that men will begin to think like computers." - Sydney J. Harris',
        '"Computers are useless. They can only give you answers." - Pablo Picasso',
        '"Code never lies, comments sometimes do." - Ron Jeffries',
        '"In a tech-driven world, humanity must prevail." - Unknown' // Ensure to close the last quote correctly
    ];

    // Select a random quote
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];

    // Display main content after 4 seconds
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = 'none';
        document.getElementById("main-content").style.display = 'block';
    }, 4000); // Adjust the duration here (in milliseconds)

    // Mouse interaction for floor effect
    const floor = document.createElement('div');
    floor.style.position = 'fixed';
    floor.style.bottom = '0';
    floor.style.left = '0';
    floor.style.width = '100%';
    floor.style.height = '20px';
    floor.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Semi-transparent
    document.body.appendChild(floor);

    window.addEventListener('mousemove', (event) => {
        const { clientY } = event;
        const maxY = window.innerHeight;
        const intensity = (clientY / maxY); // Calculate intensity based on mouse position
        floor.style.backgroundColor = `rgba(255, 255, 255, ${intensity})`; // Change opacity based on mouse Y position
    });
};
