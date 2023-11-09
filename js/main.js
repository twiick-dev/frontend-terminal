let terminal=document.querySelector('#terminal')
let terminalContend=document.querySelector('#terminal-content')
let terminalCommand=document.querySelector('#terminal-command')

terminalCommand.addEventListener('keyup', (event)=>{
    if (event.key === 'Enter') {
        terminalContend.innerHTML= `${terminalContend.innerHTML}<div class="instruction"><div class="terminal-path"><p class="terminal-user">twiick-dev@twiick</p><p>:</p><p class="terminal-folder">~</p><p>$ ${terminalCommand.value}</p></div></div>`
        if(terminalCommand.value=='/cat bio.txt'){
            terminalContend.innerHTML= `${terminalContend.innerHTML}<div class="instruction"><div class="terminal-column"><p>Diseñador interactivo, con énfasis en desarrollo web Frontend y diseño UX/UI. Soy un apasionado por la tecnología y la enseñanza, áreas donde me he desempeñado profesionalmente, participando en la creación de productos digitales, en el marco de la comunicación y la educación.</p><p>He trabajado con algunas universidades de la ciudad de Bogotá, como tutor docente, en materias relacionadas con Diseño UX/UI y Desarrollo de Software, lugares donde he tenido la oportunidad de transmitir mis conocimientos tanto a diseñadores como ingenieros.</p><p>Desarrollo metodologías que permiten el trabajo en conjunto con clientes y usuarios, siendo capaz de escuchar personas y traducir sus frustraciones, necesidades y problemas, en soluciones que resuelven problemáticas reales, que son atractivas, y cumplen con estándares de accesibilidad, funcionalidad y usabilidad.</p></div></div>`
        }
        else if(terminalCommand.value=='/cat conocimientos.json'){
            terminalContend.innerHTML= `${terminalContend.innerHTML}`
        }
        else if(terminalCommand.value=='/clear'){
            terminalContend.innerHTML= ``
        }
        else if(terminalCommand.value=='/help'){
            terminalContend.innerHTML= `${terminalContend.innerHTML}<div class="instruction"><div class="terminal-column"><p>/cat</p><p>/clear</p><p>/help</p><p>/ls</p><p>/pwd</p></div></div>`
        }
        else if(terminalCommand.value=='/ls'){
            terminalContend.innerHTML= `${terminalContend.innerHTML}<div class="instruction"><div class="terminal-row"><p>bio.txt</p><p>conocimientos.json</p><p>meggage.txt</p><p>valorant.exe</p></div></div>`
        }
        else if(terminalCommand.value=='/pwd'){
            terminalContend.innerHTML= `${terminalContend.innerHTML}<div class="instruction"><div class="terminal-row"><p>/home/twiick-dev</p></div></div>`
        }
        terminalCommand.value=''
    }
    
});