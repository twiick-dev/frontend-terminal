let terminalTabName=document.querySelector('#terminal-tab-name')
let terminal=document.querySelector('#terminal')
let terminalContend=document.querySelector('#terminal-content')
let terminalCommand=document.querySelector('#terminal-command')

let path='~'

let terminalFolder=document.querySelector('.terminal-folder')

terminalCommand.addEventListener('keyup', (event)=>{
    if (event.key === 'Enter') {
        terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-path"><p class="terminal-user">twiick-dev@twiick</p><p>:</p><p class="terminal-folder">${path}</p><p>$ ${terminalCommand.value}</p></div></div>`
        // Default commands
        if(terminalCommand.value=='cd'){
            path='~'
            terminalFolder.innerText=`~`
        }
        else if(terminalCommand.value=='clear'){
            terminalContend.innerHTML=``
        }
        else if(terminalCommand.value=='help'){
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-column"><p>cat [file] <span class="executable">Display the contents of a file</span></p><p>cd [dir] <span class="executable">Change the current directory.</span></p><p>clear <span class="executable">Clear the terminal screen.</span></p><p>help <span class="executable">Display this help message. </span></p><p>ls <span class="executable">List files and directories in the current directory.</span></p><p>pwd <span class="executable">Display the current working directory.</span></p>
            <p>run [file] <span class="executable">Run a executable in a new tab.</span></p></div></div>`
        }
        // Commands used in cd
        else if(path=='~' && terminalCommand.value=='cat bio.txt'){
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-column"><p>Interactive designer with a focus on Frontend web development and UX/UI design. I am passionate about technology and education, areas where I have worked professionally, contributing to the creation of digital products in the fields of communication and education.</p><p>I have worked with some universities in Bogotá as a teaching tutor, teaching subjects related to UX/UI Design and Software Development. In these places, I have had the opportunity to share my knowledge with both designers and engineers.</p><p>I develop methodologies that facilitate collaboration with clients and users, enabling me to listen to people and translate their frustrations, needs, and problems into solutions that address real issues, are attractive, and meet accessibility, functionality, and usability standards.</p></div></div>`
        }
        else if(path=='~' && terminalCommand.value=='cat knowledges.json'){
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-column"><p>{</p><p>"Name":"Brahyam Eduardo",</p><p>"Lastname":"Luna Patiño",</p><p>"Age":21,</p><p>"BirdthDate":{</p><p>&nbsp&nbsp"Day":25,</p><p>&nbsp&nbsp"Month":"February",</p><p>&nbsp&nbsp"Year":2022</p><p>},</p><p>"Estudies":{</p><p>&nbsp&nbsp"BachelorsDegree":{</p><p>&nbsp&nbsp&nbsp&nbsp"Institution":{</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"Name":"Jorge Tadeo Lozano University",</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"City":"Bogotá",</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"Grade":"Interactive Designer",</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"StartDate":2019,</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"EndDate":2022</p><p>&nbsp&nbsp&nbsp&nbsp}</p><p>&nbsp&nbsp},</p><p>&nbsp&nbsp"Curses":{</p><p>&nbsp&nbsp&nbsp&nbsp"Institution":{</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"Name":"Platzi",</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"City":"Bogotá",</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"Grade":"Web Developer",</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"StartDate":2022,</p><p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"EndDate":2023</p><p>&nbsp&nbsp&nbsp&nbsp}</p><p>&nbsp&nbsp}</p><p>},<p>"Contact":{</p><p>&nbsp&nbsp"Email":"twiick.developer@gmail.com",</p><p>&nbsp&nbsp"Website":{</p><p>&nbsp&nbsp&nbsp&nbsp"Titulo":"Portfolio",</p><p>&nbsp&nbsp&nbsp&nbsp"Domain": https://twiick.com/</p><p>&nbsp&nbsp}</p><p>}</p></div></div>`
        }
        else if(path=='~' && terminalCommand.value=='cd projects'){
            path='~/projects'
            terminalFolder.innerText=`${path}`
        }
        else if(path=='~' && terminalCommand.value=='ls'){
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-row"><p>bio.txt</p><p>knowledges.json</p><p class="terminal-folder">projects</p></div></div>`
        }
        else if(path=='~' && terminalCommand.value=='pwd'){
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-row"><p>/home/twiick-dev</p></div></div>`
        }
        // Commands used in projects
        else if(path=='~/projects' && terminalCommand.value=='ls'){
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-row"><p class="executable">arisa.exe</p><p class="executable">cervantext.exe</p><p class="executable">interactive-comic.exe</p><p class="executable">lighters.exe</p><p class="executable">nicrasher-portfolio.exe</p><p class="executable">picto-muisca-comic.exe</p><p class="executable">skold.exe</p></div></div>`
        }
        else if(path=='~/projects' && terminalCommand.value=='pwd'){
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-row"><p>/home/twiick-dev/projects</p></div></div>`
        }
        else if(path=='~/projects' && terminalCommand.value=='run arisa.exe'){
            runAnExe('arisa.exe','https://portals.utadeo.edu.co/arisa/')
        }
        else if(path=='~/projects' && terminalCommand.value=='run cervantext.exe'){
            runAnExe('cervantext.exe','https://twiick.com/cervantext')
        }
        else if(path=='~/projects' && terminalCommand.value=='run interactive-comic.exe'){
            runAnExe('interactive-comic.exe','https://twiick.com/generation-challenge')
        }
        else if(path=='~/projects' && terminalCommand.value=='run lighters.exe'){
            runAnExe('lighters.exe','https://hexatomicstudio.itch.io/lighters')
        }
        else if(path=='~/projects' && terminalCommand.value=='run nicrasher-portfolio.exe'){
            runAnExe('nicrasher-portfolio.exe','https://twiick.com/nicrasher')
        }
        else if(path=='~/projects' && terminalCommand.value=='run skold.exe'){
            runAnExe('skold.exe','https://twiick.com/skold')
        }
        else{
            terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-row"><p>${terminalCommand.value}: command not found</p></p></div></div>`
        }
        terminal.scrollTop = terminal.scrollHeight;
        terminalCommand.value=''
        terminalTabName.innerText=`twiick-dev@twiick: ${path}`
    }
    function runAnExe(executableName, executableLink){
        window.open(`${executableLink}`, '_blank');
        terminalContend.innerHTML=`${terminalContend.innerHTML}<div class="instruction"><div class="terminal-column"><p>&nbsp</p><p><span class="executable">${executableName}</span> is running in a new tab:</p><p>- Network: <span class="external-link">${executableLink}</span></p><p>&nbsp</p></div></div>`
    }
});