/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.

  Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  sidebar: [
    // Ronin Network basics
    {
      type: 'category',
      label: 'Basics',
      link: {
        type: 'generated-index',
        title: 'Ronin basics',
        description: 'Everything you need to know about Ronin.',
      },
      items: [
        // Get started
        // {
        //   type: 'doc',
        //   label: 'Get started',
        //   id: 'basics/get-started',
        // },
        // Introduction to Ronin
        {
          type: 'doc',
          label: 'Introduction to Ronin',
          id: 'basics/introduction',
        },
        // History of Ronin
        {
          type: 'doc',
          label: 'History of Ronin',
          id: 'basics/history',
        },
        // Key concepts
        {
          type: 'doc',
          label: 'Key concepts',
          id: 'basics/key-concepts',
        },
        // White paper
        'basics/white-paper',
        // Decentralization
        'basics/decentralization',
        // Applications
        {
          type: 'category',
          label: 'Applications',
          link: {
            type: 'generated-index',
            title: 'Applications',
          },
          items: [
            // Ronin Bridge
            {
              type: 'category',
              label: 'Ronin Bridge',
              link: {
                type: 'doc',
                id: 'basics/applications/ronin-bridge/ronin-bridge',
              },
              items: [
                // Governance
                'basics/applications/ronin-bridge/governance',
                // Fee structure
                'basics/applications/ronin-bridge/fee-structure',
                // Withdrawal limits
                'basics/applications/ronin-bridge/withdrawal-limits',
              ],
            },
            // Ronin Explorer
            'basics/applications/ronin-explorer',
            // Katana Swap
            'basics/applications/katana',
          ],
        },
        // Roadmap
        'basics/roadmap',
        // Tokenomics
        'basics/tokenomics',
        // Roles
        {
          type: 'category',
          label: 'Roles',
          link: {
            type: 'generated-index',
            title: 'Roles',
            description: 'Information about the main actors on Ronin—who they are and what they do.',
          },
          items: [
            // Validator
            'basics/roles/validator',
            // Delegator
            'basics/roles/delegator',
            // Developer
            'basics/roles/developer',
          ],
        },
        // Security audits
        'basics/audits',
      ],
    },
    // Delegators
    {
      type: 'category',
      label: 'Delegators',
      link: {
        type: 'generated-index',
        title: 'Delegators',
        description: 'Stake tokens, delegate your stake to validators, and claim rewards.',
        slug: '/delegators',
      },
      items: [
        // Purchase RON
        'delegators/onboarding/purchase-ron',
        // Become a delegator
        'delegators/onboarding/become-delegator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Move or withdraw your stake.',
            slug: '/delegators/stake',
          },
          items: [
            // Move stake
            'delegators/stake/move',
            // Withdraw stake
            'delegators/stake/withdraw',
          ],
        },
        // Claim rewards
        {
          type: 'doc',
          label: 'Claim rewards',
          id: 'delegators/rewards/claim',
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'delegators/faq',
        },
      ],
    },
    // Validators
    {
      type: 'category',
      label: 'Validators',
      link: {
        type: 'generated-index',
        title: 'Validators', 
        description: 'Register as a validator, stake tokens, claim rewards, and manage your validator profile.',
        slug: '/validators',
      },
      items: [
        // Become a validator
        'validators/onboarding/become-validator',
        // Stake
        {
          type: 'category',
          label: 'Stake',
          link: {
            type: 'generated-index',
            title: 'Stake',
            description: 'Increase or withdraw your RON stake.',
            slug: '/validators/stake',
          },
          items: [
            // Increase stake
            'validators/stake/increase',
            // Withdraw stake
            'validators/stake/withdraw',
          ],
        },
        // Claim rewards
        {
          type: 'category',
          label: 'Rewards',
          link: {
            type: 'generated-index',
            title: 'Rewards',
            description: 'Learn about reward types and how to claim rewards.',
            slug: '/validators/rewards',
          },
          items: [
            // Reward types
            'validators/rewards/types',
            // Claim rewards
            'validators/rewards/claim',
          ],
        },
        // Manage profile
        {
          type: 'category',
          label: 'Manage profile',
          link: {
            type: 'generated-index',
            title: 'Manage profile', 
            description: 'Manage your profile, view analytics and activity, change commission rate.',
            slug: '/validators/manage',
          },
          items: [
            // Change commission rate
            'validators/manage/commission',
            // Schedule maintenance
            'validators/manage/maintenance',
            // Renounce role
            'validators/manage/renounce',
            // View activity
            'validators/manage/activity',
            // View profile
            'validators/manage/profile',
            // View analytics
            'validators/manage/analytics',
          ],
        },
        // Slashing and bailout
        {
          type: 'category',
          label: 'Slashing',
          link: {
            type: 'generated-index',
            title: 'Slashing and bailout', 
            description: 'Learn about the slashing penalties and rules for bailout.',
            slug: '/validators/slashing',
          },
          items: [
            // Slashing
            'validators/slashing/slashing',
            // Bailout
            'validators/slashing/bailout',
          ],
        },
        // Governance
        {
          type: 'category',
          label: 'Governance',
          link: {
            type: 'generated-index',
            title: 'Governance', 
            description: 'On-chain governance through proposals raised and voted on by Governing Validators.',
            slug: '/validators/governance',
          },
          items: [
            // Overview
            'validators/governance/overview',
            // Create a proposal
            'validators/governance/create',
            // Vote on a proposal
            'validators/governance/vote',
          ],
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'validators/faq',
        },
      ],
    },
    {
      // Node operators
      type: 'category',
      label: 'Node operators',
      link: {
        type: 'generated-index',
        title: 'Node operators',
        description: 'Set up and run a Ronin node.',
      },
      items: [
        // CLI guide
        'node-operators/cli',
        // Minimum requirements
        'node-operators/minimum-requirements',
        {
          type: 'category',
          label: 'Mainnet',
          link: {
            type: 'generated-index',
            title: 'Mainnet',
          },
          items: [
            // Configuration
            'node-operators/configs/mainnet',
            // Run a validator node
            'node-operators/validator-setup-m',
            // Run a bridge operator node
            'node-operators/bridge-setup-m',
            // Run a non-validator-node
            'node-operators/non-validator-setup-m',
            // Run a full archive node
            'node-operators/archive-setup-m',
          ],
        },
        {
          type: 'category',
          label: 'Testnet',
          link: {
            type: 'generated-index',
            title: 'Testnet',
          },
          items: [
            // Configuration
            'node-operators/configs/testnet',
            // Run a validator node
            'node-operators/validator-setup-t',
            // Run a bridge node
            'node-operators/bridge-setup-t',
            // Run a non-validator-node
            'node-operators/non-validator-setup-t',
            // Run a full archive node
            'node-operators/archive-setup-t',
          ],
        },
        // Node setup tutorials
        {
          type: 'category',
          label: 'Tutorials',
          link: {
            type: 'generated-index',
            title: 'Tutorials',
          },
          items: [
            // Run a validator node on AWS
            'node-operators/tutorials/run-node-on-aws',
            // Run a validator node on GCP
            'node-operators/tutorials/run-node-on-gcp',
          ],
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'node-operators/faq',
        },
      ],
    },
    // Developers
    {
      type: 'category',
      label: 'Developers',
      link: {
        type: 'generated-index',
        title: 'Developers', 
        description: 'Build your decentralized application on Ronin Network.',
        slug: '/developers',
      },
      items: [
        // API
        {
          type: 'link',
          label: 'API',
          href: 'https://documenter.getpostman.com/view/1372857/UVeKqQMn',
        },
        {
          type: 'category',
          label: 'Smart contracts',
          link: {
            type: 'generated-index',
            title: 'Deploy smart contracts', 
            description: 'Guides for smart contract deployment.',
            slug: '/developers/smart-contracts',
          },
          items: [
            'developers/smart-contracts/hardhat',
            'developers/smart-contracts/truffle',
          ],
        },
        {
          type: 'category',
          label: 'Ronin Wallet',
          link: {
            type: 'generated-index',
            title: 'Integrate Ronin Wallet', 
            description: 'Guides for Ronin Wallet integration.',
            slug: '/developers/ronin-wallet',
          },
          items: [
            'developers/ronin-wallet/integrate',
            'developers/ronin-wallet/switch-network',
          ],
        },
        // FAQ
        {
          type: 'doc',
          label: 'FAQ',
          id: 'developers/faq',
        },
      ],
    },
    // Community
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'generated-index',
        title: 'Community', 
        description: 'Community information and a contribution guide.',
        slug: '/community',
      },
      items: [
        'community/join',
        {
          type: 'category',
          label: 'Contribute',
          link: {
            type: 'generated-index',
            title: 'Contribute',
            description: 'Learn how to contribute to the Ronin documentation.',
            slug: '/community/contribute',
          },
          items: [
            'community/contribute/guide',
            'community/contribute/style',
            {
              type: 'category',
              label: 'Templates',
              link: {
              type: 'generated-index',
              title: 'Documentation templates', 
              description: 'Templates used to create this documentation.',
              slug: '/community/contribute/templates',
            },
            items: [
              'community/contribute/templates/concept',
              'community/contribute/templates/task',
              'community/contribute/templates/reference',
              'community/contribute/templates/troubleshooting',
              'community/contribute/templates/tutorial',
              ],
            },
          ],
        },
        'community/bug-bounty',
        'community/council',
        'community/governance',
        'community/grants',
      ],
    },
    // Resources
    {
      type: 'category',
      label: 'Resources',
      link: {
        type: 'generated-index',
        title: 'Resources',
        slug: '/resources',
      },
      items: [
        'resources/other',
      ],
    },
  ],
}

module.exports = sidebars
