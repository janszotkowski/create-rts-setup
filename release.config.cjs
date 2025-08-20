module.exports = {
    branches: ['main'],
    tagFormat: 'v${version}',
    plugins: [
        // 1) Určí typ releasu z commitů (Conventional Commits)
        ['@semantic-release/commit-analyzer', {
            preset: 'conventionalcommits',
            // Umožní releasy i z Renovate commitů typu "chore(deps)"
            releaseRules: [
                { type: 'feat', release: 'minor' },
                { type: 'fix', release: 'patch' },
                { type: 'perf', release: 'patch' },
                { type: 'revert', release: 'patch' },
                { type: 'build', scope: 'deps', release: 'patch' },
                { type: 'build', scope: 'deps-dev', release: 'patch' },
                { type: 'chore', scope: 'deps', release: 'patch' },
                { type: 'chore', scope: 'deps-dev', release: 'patch' },
                { type: 'chore', release: false }
            ]
        }],

        // 2) Release notes
        ['@semantic-release/release-notes-generator', { preset: 'conventionalcommits' }],

        // 3) Udržuje CHANGELOG.md v rootu (volitelné, ale užitečné)
        '@semantic-release/changelog',

        // 4) Publish na npm z podsložky `template/`
        ['@semantic-release/npm', {
            npmPublish: true,
            pkgRoot: 'template'
        }],

        // 5) Commitne CHANGELOG a bumpnutou verzi v template/package.json
        ['@semantic-release/git', {
            assets: ['CHANGELOG.md', 'template/package.json'],
            message: 'chore(release): v${nextRelease.version} [skip ci]'
        }],

        // 6) GitHub release
        '@semantic-release/github'
    ]
};
