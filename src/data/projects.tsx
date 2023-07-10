/* eslint-disable global-require */

import { sortBy } from '@site/src/utils/jsUtils';
import { Project } from '@site/src/shared/dto/Project';

// prettier-ignore
const PROJECTS: Project[] = [
  {
    title: 'Youth Quiz',
    description: 'A quiz game website where questions are about information technology, information tranformation, and general knowledge about student organizations, made with MEAN stack.',
    // preview: require('./showcase/apexfp.png'),
    preview: null,
    website: 'https://youth-quiz.vercel.app/',
    // source: 'https://github.com/TienNHM/youth-quiz',
    source: null,
    tags: ['product', 'favorite'],
  },
  {
    title: 'Virtual Mouse',
    description: 'A virtual mouse application for Windows, made with Python and Mediapipe.',
    // preview: require('./showcase/avana-wallet.png'),
    preview: null,
    website: 'https://tiennhm.github.io/VirtualMouse/',
    // source: 'https://github.com/TienNHM/VirtualMouse',
    source: null,
    tags: ['product', 'favorite'],
  },
  {
    title: 'welcome-bot-discord',
    description: 'A Discord bot for welcoming new members to a server.',
    preview: null,
    website: null,
    source: 'https://github.com/TienNHM/welcome-bot-discord',
    tags: ['opensource'],
  },
  {
    title: 'root-me-ctf',
    description: 'My solutions for root-me.org challenges.',
    preview: null,
    website: 'https://tiennhm.github.io/root-me-ctf/',
    source: 'https://github.com/TienNHM/root-me-ctf',
    tags: ['opensource'],
  },
];

function sortProjects() {
  let result = PROJECTS;
  // Sort by site name
  result = sortBy(result, (project) => project.title.toLowerCase());
  
  // Sort by favorite tag, favorites first
  result = sortBy(result, (project) => !project.tags.includes('favorite'));
  return result;
}

export const sortedProjects = sortProjects();
