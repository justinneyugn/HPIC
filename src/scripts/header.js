export function header() {
    // tag for title
    const title = document.createElement("div");
    title.setAttribute("class", "title")
    const node = document.createTextNode("H.P.I.C.");
    title.appendChild(node);
    const element = document.querySelector("body")
    const child = document.getElementById("map")
    element.insertBefore(title, child)

    // tag for Title Subheading
    const titleSub = document.createElement("div");
    titleSub.setAttribute("class", "title-subheading")
    const node3 = document.createTextNode("(Head Peach In Charge)");
    titleSub.appendChild(node3);
    element.insertBefore(titleSub, child)

    // tag for About Me section
    const aboutme = document.createElement("div");
    aboutme.setAttribute("id", "about-me")
    element.insertBefore(aboutme, child);

    // tag for name
    const name = document.createElement("h1");
    name.setAttribute("id", "by-name")
    const node2 = document.createTextNode("By: Justin Nguyen");
    name.appendChild(node2);
    const aboutMeTag = document.getElementById("about-me");
    aboutMeTag.appendChild(name);

    // tag for About Me Links
    const aboutMeLinks = document.createElement("div");
    aboutMeLinks.setAttribute("id", "about-me-links");
    aboutMeTag.appendChild(aboutMeLinks);

    // tag for Project Repo
    const firstLink = document.createElement("a");
    const githubImage = document.createElement("img");
    firstLink.setAttribute("class", "header-link");
    firstLink.setAttribute("href", "https://github.com/justinneyugn/Javascript_Project");
    firstLink.setAttribute("target", "_blank");
    githubImage.setAttribute("src", "images/github_icon.png")
    const aboutLinks = document.getElementById("about-me-links");
    aboutLinks.append(firstLink)
    firstLink.append(githubImage);

    // tag for LinkedIn
    const secondLink = document.createElement("a");
    const linkedinImage = document.createElement("img");
    secondLink.setAttribute("class", "header-link");
    secondLink.setAttribute("href", "https://www.linkedin.com/in/justin-nguyen-b851461b2/");
    secondLink.setAttribute("target", "_blank");
    linkedinImage.setAttribute("src", "images/linkedin_icon.png")
    aboutLinks.append(secondLink)
    secondLink.append(linkedinImage);
}