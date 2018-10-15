import React from 'react'
import classnames from 'classnames'

import take from 'lodash/take'

import Translate from 'components/Translate'

// [TODO:LAKSHAY] Change team members data here
const TEAM_LIST = [
  {
    name: 'Lorine Fahey',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Global Accountability Planner',
    photo: 'https://api.adorable.io/avatars/285/a4oat@adorable.io.png'
  },
  {
    name: 'Thalia Beatty',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'National Optimization Associate',
    photo: 'https://api.adorable.io/avatars/285/a5oat@adorable.io.png'
  },
  {
    name: 'Tomas Jacobson',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Human Directives Technician',
    photo: 'https://api.adorable.io/avatars/285/a2oat@adorable.io.png'
  },
  {
    name: 'Tiara Boyle',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Global Usability Specialist',
    photo: 'https://api.adorable.io/avatars/285/a7oat@adorable.io.png'
  },
  {
    name: 'Ruthie Mohr',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'International Response Administrator',
    photo: 'https://api.adorable.io/avatars/285/a2oat@adorable.io.png'
  },
  {
    name: 'Katrina Lakin',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Forward Data Consultant',
    photo: 'https://api.adorable.io/avatars/285/a4oat@adorable.io.png'
  },
  {
    name: 'Berenice Aufderhar',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Future Mobility Agent',
    photo: 'https://api.adorable.io/avatars/285/a10oat@adorable.io.png'
  },
  {
    name: 'Ronaldo Gottlieb',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Global Creative Associate',
    photo: 'https://api.adorable.io/avatars/285/a9oat@adorable.io.png'
  },
  {
    name: 'Dorthy Wehner',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Forward Paradigm Producer',
    photo: 'https://api.adorable.io/avatars/285/a4oat@adorable.io.png'
  },
  {
    name: 'Tia Bins',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Principal Response Orchestrator',
    photo: 'https://api.adorable.io/avatars/285/a6oat@adorable.io.png'
  },
  {
    name: 'Durward Grady',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Product Communications Administrator',
    photo: 'https://api.adorable.io/avatars/285/a3oat@adorable.io.png'
  },
  {
    name: 'Elody Predovic',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'International Identity Representative',
    photo: 'https://api.adorable.io/avatars/285/a2oat@adorable.io.png'
  },
  {
    name: 'Tia Bins',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Principal Response Orchestrator',
    photo: 'https://api.adorable.io/avatars/285/a6oat@adorable.io.png'
  },
  {
    name: 'Durward Grady',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'Product Communications Administrator',
    photo: 'https://api.adorable.io/avatars/285/a3oat@adorable.io.png'
  },
  {
    name: 'Elody Predovic',
    description:
      'Lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, lorem ipsum solor di amet, ',
    href: '#',
    designation: 'International Identity Representative',
    photo: 'https://api.adorable.io/avatars/285/a2oat@adorable.io.png'
  }
]

const TeamBox = props => {
  return (
    <div className={`teams-box row justify-content-center ${props.className}`}>
      <h4 className="section-title with-line text-center mt-5 mb-1">
        <span className="team-span-bg"><Translate id="homepage.team.title" /></span>
      </h4>
      <div className="teambox-title text-center w-100 mb-5">
        <Translate id="homepage.team.subtitle" />
      </div>
      <div className="col-md-10">
        <div className="row">
          {props.list.map((member, i) => {
            return (
              <div
                className="team-member col-md-4 col-sm-6 col-xs-6 mb-4 flex-vertical text-center"
                key={i}>
                <div className="member-avatar mb-3">
                  <img className="member-img" alt="" src={member.photo} />
                </div>
                <div className="member-name mb-1">{member.name}</div>
                <div className="member-designation mb-1">
                  {member.designation}
                </div>
                <div className="member-description mb-1">
                  {member.description}
                </div>
                <a className="member-link" href={member.href}>
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const TeamSection = props => {
  const cx = classnames(props.className, 'team-section')
  const list = TEAM_LIST.map(x => x)
  return (
    <div className={cx} id={props.id}>
      <div className="container page-section">
         <h4 className="section-title text-center mb-3"/> 
        <TeamBox className="mb-4 team-bg" list={take(list, 6)} />
        <TeamBox className="mb-3 team-bg" list={take(list.reverse(), 9)} />
      </div>
    </div>
  )
}

export default TeamSection
