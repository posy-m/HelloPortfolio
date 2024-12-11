import React from 'react'
import Email from './Email'

const Header = () => {
  return (
    <div>
      <section>
        <ul>
          <li>Github</li>
          <li>Blog</li>
          <li><Email /></li>
        </ul>
      </section>
      <section>
        <ul>
          <li>About</li>
          <li>Skill</li>
          <li>Project</li>
        </ul>
      </section>

    </div>
  )
}

export default Header
