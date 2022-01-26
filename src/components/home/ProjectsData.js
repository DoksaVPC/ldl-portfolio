import StanWars from "../../assets/img/stan-wars.png"
import Zest from "../../assets/img/zest.png"
import PlayOfShadows from "../../assets/img/play-of-shadows.png"

const ProjectData = [
    {name: 'Zest',
        text: (<><strong>Interaction-focused</strong> streaming platform, designed for <strong>live events</strong></>),
        tags: ['Data visualization', 'UX/UI design', 'React', 'd3.js'],
        image: Zest
       },
       {name: 'Stan Wars',
        text: (<>Interactive <strong>data visualizations</strong> about stan groups and <strong>hashtag hijacking</strong></>),
        tags: ['Data visualization', 'UX/UI design', 'React', 'd3.js'],
        image: StanWars
       },
       {name: 'Paola Mirai AR Jewels',
        text: (<><strong>Augmented reality</strong> app for trying on 3D <strong>virtual jewels</strong> using a smartphone camera</>),
        tags: ['AR', 'UX/UI design', 'Unity3D', 'Computer vision'],
        image: StanWars
       },
        {
        name: "The Hijacker's guide to Digital Activism",
        text: (<><strong>informative</strong>, engaging <strong>digital experience</strong> on hashtag hijacking</>),
        tags: ['Information design', 'UX/UI design', 'React'],
        image: StanWars
       },
       {
        name: "Play of Shadows",
        text: (<>A mind-bending puzzle <strong>videogame</strong> about <strong>light and shadows</strong></>),
        tags: ['Information design', 'UX/UI design', 'React'],
        image: PlayOfShadows
       }
]

export default ProjectData