const breathing = document.querySelector('.breathing')
const text = document.querySelector('#text')

const totalTime = 7500 //in ms
const breatheTime = (totalTime/5) * 2 //in ms
const holdTime = (totalTime/5) //in ms

animation()

function animation()
{
    text.innerHTML = 'Breathe in'
    breathing.className = 'breathing expand'

    setTimeout(() =>
    {
        text.innerText = 'Hold it in'
        
        setTimeout(() => 
        {
            text.innerText = 'Breathe out'
            breathing.className = 'breathing contract'
        }, holdTime)
    }, breatheTime)
}

setInterval(animation, totalTime)