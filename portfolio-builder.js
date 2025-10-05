// ==================== //
// Portfolio Page Builder
// ==================== //

let portfolioData = null;

// Load portfolio data
async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio-data.json');
        portfolioData = await response.json();
        buildPortfolio();
    } catch (error) {
        console.error('Error loading portfolio data:', error);
    }
}

// Build the entire portfolio
function buildPortfolio() {
    const storybook = document.getElementById('storybook');
    storybook.innerHTML = '';
    
    let pageNumber = 1;
    
    // Page 1: Cover Page
    storybook.appendChild(createCoverPage(pageNumber++));
    
    // Page 2: Introduction
    storybook.appendChild(createIntroductionPage(pageNumber++));
    
    // Page 3: About Me
    storybook.appendChild(createAboutPage(pageNumber++));
    
    // Page 4: Education
    storybook.appendChild(createEducationPage(pageNumber++));
    
    // Page 5: Work Experience
    storybook.appendChild(createWorkExperiencePage(pageNumber++));
    
    // Page 6: Skills
    storybook.appendChild(createSkillsPage(pageNumber++));
    
    // Page 7-9: Projects (one per page)
    portfolioData.projects.forEach((project, index) => {
        storybook.appendChild(createProjectPage(project, index, pageNumber++));
    });
    
    // Page 10: Interests & Hobbies
    storybook.appendChild(createInterestsHobbiesPage(pageNumber++));
    
    // Page 11: Contact
    storybook.appendChild(createContactPage(pageNumber++));
    
    // Last Page: Back Cover
    storybook.appendChild(createBackCoverPage(pageNumber++));
    
    // Update total pages in navigation
    document.getElementById('totalPages').textContent = pageNumber - 1;
}

// Create Cover Page
function createCoverPage(pageNum) {
    const page = createPageElement(pageNum, pageNum === 1);
    page.innerHTML = `
        <div class="page-inner cover-page">
            <div class="cover-content">
                <h1 class="cover-title">${portfolioData.personal.fullName}</h1>
                <div class="cover-ornament">✦</div>
                <p class="cover-subtitle">My Digital Story</p>
                <div class="cover-bottom">
                    <p>${portfolioData.personal.tagline}</p>
                    <p class="cover-date">Born: ${portfolioData.personal.dateOfBirth}</p>
                    <p class="cover-year">${new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Introduction Page
function createIntroductionPage(pageNum) {
    const page = createPageElement(pageNum);
    const quote = portfolioData.quotes[0];
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">Chapter 1</div>
            <h2 class="page-heading">Hello, World!</h2>
            <div class="page-body">
                <p class="first-letter">
                    ${portfolioData.introduction.text.replace(portfolioData.personal.firstName, `<strong>${portfolioData.personal.fullName}</strong>`)}
                </p>
                <p>${portfolioData.introduction.description}</p>
                <p>${portfolioData.introduction.callToAction}</p>
                <div class="page-quote">
                    <p>"${quote.text}"</p>
                    <span>— ${quote.author}</span>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create About Page
function createAboutPage(pageNum) {
    const page = createPageElement(pageNum);
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">Chapter 2</div>
            <h2 class="page-heading">My Journey</h2>
            <div class="page-body">
                <div class="profile-section">
                    <div class="profile-image">
                        <div class="image-placeholder">
                            <span>📸</span>
                        </div>
                    </div>
                    <div class="profile-text">
                        <h3>Early Life</h3>
                        <p>${portfolioData.about.earlyLife}</p>
                        <h3>Personal Details</h3>
                        <ul class="info-list">
                            <li><strong>Full Name:</strong> ${portfolioData.personal.fullName}</li>
                            <li><strong>Date of Birth:</strong> ${portfolioData.personal.dateOfBirth}</li>
                            <li><strong>Birthplace:</strong> ${portfolioData.personal.birthplace}</li>
                            <li><strong>Email:</strong> ${portfolioData.personal.email}</li>
                        </ul>
                    </div>
                </div>
                <div class="journey-text">
                    <p>${portfolioData.about.journey}</p>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Education Page
function createEducationPage(pageNum) {
    const page = createPageElement(pageNum);
    const quote = portfolioData.quotes[1];
    
    const schoolsHTML = portfolioData.education.schools.map(school => `
        <div class="edu-item">
            <div class="edu-icon">${school.icon}</div>
            <div class="edu-content">
                <h4>${school.name}</h4>
                <p>${school.location}</p>
            </div>
        </div>
    `).join('');
    
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">Chapter 3</div>
            <h2 class="page-heading">Educational Journey</h2>
            <div class="page-body">
                <p class="intro-text">
                    My educational path took me through various institutions, each contributing 
                    to my growth and shaping who I am today.
                </p>
                <div class="education-timeline">
                    <div class="edu-section">
                        <h3>🏫 School Education</h3>
                        ${schoolsHTML}
                    </div>
                    <div class="edu-section">
                        <h3>🎓 Intermediate Education (11th & 12th)</h3>
                        <div class="edu-item">
                            <div class="edu-icon">${portfolioData.education.intermediate.icon}</div>
                            <div class="edu-content">
                                <h4>${portfolioData.education.intermediate.name}</h4>
                                <p>${portfolioData.education.intermediate.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="edu-section">
                        <h3>🎯 Higher Education</h3>
                        <div class="edu-item highlight">
                            <div class="edu-icon">${portfolioData.education.college.icon}</div>
                            <div class="edu-content">
                                <h4>${portfolioData.education.college.name}</h4>
                                <p>${portfolioData.education.college.degree}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-quote">
                    <p>"${quote.text}"</p>
                    <span>— ${quote.author}</span>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Work Experience Page
function createWorkExperiencePage(pageNum) {
    const page = createPageElement(pageNum);
    const quote = portfolioData.quotes[2];
    
    const totalYears = portfolioData.workExperience.reduce((sum, job) => {
        return sum + parseFloat(job.duration);
    }, 0);
    
    const workItemsHTML = portfolioData.workExperience.map((job, index) => `
        <div class="work-item${job.isCurrent ? ' current' : ''}">
            <div class="work-number">0${index + 1}</div>
            <div class="work-content">
                <div class="work-header">
                    <h3>${job.company}</h3>
                    <span class="work-duration">${job.duration}${job.isCurrent ? ' (Current)' : ''}</span>
                </div>
                <p class="work-location">📍 ${job.location}</p>
                <p class="work-description">${job.description}</p>
                ${job.isCurrent ? '<div class="current-badge">✨ Current Role</div>' : ''}
            </div>
        </div>
    `).join('');
    
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">Chapter 4</div>
            <h2 class="page-heading">Professional Journey</h2>
            <div class="page-body">
                <p class="intro-text">
                    My professional career has taken me through some of the most innovative 
                    technology companies in the world, spanning over a decade of experience.
                </p>
                <div class="work-timeline">
                    ${workItemsHTML}
                </div>
                <div class="experience-summary">
                    <div class="summary-item">
                        <div class="summary-number">${totalYears}+</div>
                        <div class="summary-label">Years of Experience</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-number">${portfolioData.workExperience.length}</div>
                        <div class="summary-label">Leading Companies</div>
                    </div>
                </div>
                <div class="page-quote">
                    <p>"${quote.text}"</p>
                    <span>— ${quote.author}</span>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Skills Page
function createSkillsPage(pageNum) {
    const page = createPageElement(pageNum);
    
    const skillBarsHTML = portfolioData.skills.frontend.map(skill => `
        <div class="skill-item">
            <div class="skill-label">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-fill" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
    
    const toolBadgesHTML = portfolioData.skills.tools.map(tool => 
        `<span class="tool-badge">${tool}</span>`
    ).join('');
    
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">Chapter 5</div>
            <h2 class="page-heading">Skills & Expertise</h2>
            <div class="page-body">
                <p class="intro-text">
                    Through years of practice and learning, I've developed expertise in 
                    various technologies and tools.
                </p>
                <div class="skills-category">
                    <h3>Frontend Development</h3>
                    <div class="skill-bars">
                        ${skillBarsHTML}
                    </div>
                </div>
                <div class="tools-section">
                    <h3>Tools & Technologies</h3>
                    <div class="tools-list">
                        ${toolBadgesHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Project Page
function createProjectPage(project, projectIndex, pageNum) {
    const page = createPageElement(pageNum);
    const chapterText = projectIndex === 0 ? 'Chapter 6' : 'Chapter 6 (continued)';
    
    const techBadgesHTML = project.technologies.map(tech => 
        `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">${chapterText}</div>
            <h2 class="page-heading">Featured Projects</h2>
            <div class="page-body">
                <div class="project-showcase">
                    <div class="project-number">0${projectIndex + 1}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-image">
                        <div class="project-placeholder">
                            <span>${project.icon}</span>
                        </div>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-meta">
                        <div class="tech-stack">
                            <strong>Tech Stack:</strong>
                            ${techBadgesHTML}
                        </div>
                        <div class="project-links">
                            <a href="${project.demoLink}" class="link-button">View Demo →</a>
                            <a href="${project.sourceLink}" class="link-button">Source Code →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Interests & Hobbies Page
function createInterestsHobbiesPage(pageNum) {
    const page = createPageElement(pageNum);
    
    const interestsHTML = portfolioData.interests.map(interest => `
        <div class="interest-card">
            <div class="interest-icon">${interest.icon}</div>
            <h4>${interest.title}</h4>
            <p>${interest.description}</p>
        </div>
    `).join('');
    
    const hobbiesHTML = portfolioData.hobbies.map(hobby => `
        <div class="hobby-item">
            <span class="hobby-icon">${hobby.icon}</span>
            <div class="hobby-content">
                <h4>${hobby.name}</h4>
                <p>${hobby.description}</p>
            </div>
        </div>
    `).join('');
    
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">Chapter 7</div>
            <h2 class="page-heading">Interests & Hobbies</h2>
            <div class="page-body">
                <p class="intro-text">
                    Beyond work, I'm passionate about various interests and hobbies that keep 
                    me inspired and balanced.
                </p>
                
                <div class="section-divider">
                    <h3>💡 Interests</h3>
                </div>
                <div class="interests-grid">
                    ${interestsHTML}
                </div>
                
                <div class="section-divider">
                    <h3>🎯 Hobbies</h3>
                </div>
                <div class="hobbies-list">
                    ${hobbiesHTML}
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Contact Page
function createContactPage(pageNum) {
    const page = createPageElement(pageNum);
    const quote = portfolioData.quotes[3];
    const contact = portfolioData.contact;
    
    const contactBoxesHTML = Object.values(contact).map(item => `
        <a href="${item.link}" class="contact-box">
            <div class="contact-icon">${item.icon}</div>
            <h4>${item.title}</h4>
            <p>${item.value}</p>
        </a>
    `).join('');
    
    page.innerHTML = `
        <div class="page-inner">
            <div class="chapter-marker">Chapter 8</div>
            <h2 class="page-heading">Let's Connect</h2>
            <div class="page-body">
                <p class="intro-text center">
                    Every great story is better when shared. I'd love to hear from you 
                    and explore how we can create something amazing together.
                </p>
                <div class="contact-grid">
                    ${contactBoxesHTML}
                </div>
                <div class="page-quote">
                    <p>"${quote.text}"</p>
                    <span>— ${quote.author}</span>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Create Back Cover Page
function createBackCoverPage(pageNum) {
    const page = createPageElement(pageNum);
    page.innerHTML = `
        <div class="page-inner back-cover">
            <div class="back-content">
                <h2>The End... or Just the Beginning?</h2>
                <div class="cover-ornament">✦</div>
                <p class="back-message">
                    Thank you for reading my story. <br>
                    Let's write the next chapter together.
                </p>
                <div class="back-footer">
                    <p>&copy; ${new Date().getFullYear()} ${portfolioData.personal.fullName}</p>
                    <p>From ${portfolioData.personal.birthplace.split(',')[0]} to the World</p>
                    <p>Crafted with ❤️ and code</p>
                </div>
            </div>
        </div>
    `;
    return page;
}

// Helper function to create a page element
function createPageElement(pageNum, isActive = false) {
    const page = document.createElement('section');
    page.className = isActive ? 'page active' : 'page';
    page.setAttribute('data-page', pageNum);
    return page;
}

// Initialize
loadPortfolioData();

