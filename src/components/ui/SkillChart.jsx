import React from 'react'

const SkillChart = ({ skills }) => {

  const renderIcon = (skillName) => {

    switch (skillName) {
        case 'javascript':
            return <i class="fa-brands fa-js"></i>
        case 'html':
            return <i class="fa-brands fa-html5"></i>
        case 'css':
            return <i class="fa-brands fa-css"></i>
        case 'python':
            return <i class="fa-brands fa-python"></i>
        default:
            return <i class="fa-solid fa-atom"></i>
    }

  }

  return (
    <div
     style={{
        backgroundColor: 'var(--ui-background-color)',
        width: '100%',
        maxWidth: '80vw',
        margin: '0px auto',
        padding: '1rem',
        borderRadius: '10px'
        
     }}
    >
        <ul
         style={{
            display: 'flex',
            gap: '1rem',
            listStyleType: 'none',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap'
         }}
        >
            {skills.map( skill => 
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexDirection: 'column' }}>
                    <div>
                        {renderIcon(skill.name.toLowerCase())} {skill.name}
                    </div>
                    {/* i wanted to output a progress bar depending on the count of comfort */}
                    {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_progress */}
                    
                    <div>
                        <label for="file">Comfort:</label>
                        <progress
                        id='comfort_progress'
                        value={skill.comfort}
                        max={10}
                        
                        >
                        </progress>
                    </div>
                </li>
                
            )}
        </ul>
    </div>
  )
}

export default SkillChart