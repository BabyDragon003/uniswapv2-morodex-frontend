module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
          },
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
}
