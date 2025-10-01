import type { UserConfig } from '@commitlint/types'

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation only changes
        'style',    // Changes that do not affect the meaning of the code
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf',     // Code change that improves performance
        'test',     // Adding missing or correcting existing tests
        'chore',    // Changes to the build process or auxiliary tools
        'revert',   // Revert to a previous commit
        'build',    // Changes that affect the build system or external dependencies
        'ci'        // Changes to CI configuration files and scripts
      ]
    ],
    'subject-case': [2, 'never', ['upper-case']],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always']
  }
}

export default config