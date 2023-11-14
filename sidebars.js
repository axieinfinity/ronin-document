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
        description: 'Everything you need to know about Ronin.',
        slug: '/basics',
      },
      items: [
        // Introduction to Ronin
        {
          type: 'doc',
          label: 'Introduction to Ronin',
          id: 'basics/introduction',
        },
        // Buy RON
        'basics/buy-ron',
        // Key concepts
        'basics/key-concepts',
        // White paper
        'basics/white-paper',
        // Tokenomics
        'basics/tokenomics',
        // Nodes
        'basics/nodes',
        // Rewards
        'basics/rewards',
        // Security audits
        'basics/audits',
        // Roles
        'basics/roles',
      ],
    },
    // Apps
    {
      type: 'category',
      label: 'Apps',
      link: {
        type: 'generated-index',
        description: 'Documentation for apps in the Ronin ecosystem.',
        slug: '/apps',
      },
      items: [
        // RNS
        {
          type: 'category',
          label: 'Ronin Name Service',
          link: {
            type: 'doc',
            id: 'apps/rns/overview', 
          },
          items: [
            {
              type: 'category',
              label: 'Register an RNS name',
              link: {
                type: 'generated-index',
                description: 'Guides to register different categories of RNS names.',
                slug: 'apps/rns/register',
              },
              items: [
                // Register a regular RNS name
                'apps/rns/guides/register/regular',
                // Buy an RNS name at auction
                'apps/rns/guides/register/auctioned',
                // Register a protected RNS name
                'apps/rns/guides/register/protected',
              ],
            },
            // Manage RNS names
            'apps/rns/manage',
            // Trade RNS names
            'apps/rns/trade',
            // RNS FAQ
            'apps/rns/reference/faq',
          ],
        },
        // Ronin Bridge
        'apps/ronin-bridge',
        // Ronin Explorer
        'apps/ronin-explorer',
        // RON Staking
        'apps/ron-staking',
        // Ronin Safe
        'apps/multisig',
        // Katana DEX
        'apps/katana',
      ],
    },
    // Delegators
    {
      type: 'category',
      label: 'Delegators',
      link: {
        type: 'doc',
        id: 'delegators/index',        
      },
      items: [
        // Become a delegator
        'delegators/onboarding/become-delegator',
        {
          type: 'category',
          label: 'Manage delegator account',
          link: {
            type: 'generated-index',
            title: 'Manage your delegator account', 
            description: 'Buy RON, increase or withdraw your stake, claim rewards, and more.',
            slug: '/delegators/manage',
          },
          items: [
            // Stake
            'delegators/manage/increase-withdraw-stake',
            // Claim rewards
            'delegators/manage/claim-rewards',
            // Track validators
            'delegators/manage/track-validators',
            // View activity
            'delegators/manage/view-activity',
          ],
        },
        // FAQ
        'delegators/delegator-faq',
      ],
    },
    // Validators
    {
      type: 'category',
      label: 'Validators',
      link: {
        type: 'doc',
        id: 'validators/index',        
      },
      items: [
        {
          type: 'category',
          label: 'Run a node',
          link: {
            type: 'doc',
            id: 'validators/setup/overview',   
          },
          items: [
            {
              type: 'category',
              label: 'Mainnet',
              link: {
                type: 'generated-index',
                slug: '/validators/setup/mainnet',
                description: 'Node installation guides for the Ronin mainnet.'
              },
              items: [
                // Run a validator and bridge together
                'validators/setup/mainnet/run-combined',
                // Run a validator
                'validators/setup/mainnet/run-validator',
                // Run a full node
                'validators/setup/mainnet/run-non-validator',
                // Run an archive node
                'validators/setup/mainnet/run-archive',
              ],
            },
            {
              type: 'category',
              label: 'Saigon testnet',
              link: {
                type: 'generated-index',
                title: 'Saigon testnet',
                description: 'Node installation guides for the Saigon testnet.',
                slug: '/validators/setup/testnet',
              },
              items: [
                // Run a validator and bridge together
                'validators/setup/testnet/run-combined',
                // Run a non-validator-node
                'validators/setup/testnet/run-non-validator',
                // Run a full archive node
                'validators/setup/testnet/run-archive',
              ],
            },
            // Generate keys
            'validators/setup/generate-keys',
            // Install Ronin CLI
            'validators/setup/cli',
            // Latest version
            'validators/setup/upgrade-validator',
            // Network parameters
            {
              type: 'category',
              label: 'Network parameters',
              link: {
                type: 'generated-index',
                title: 'Network parameters',
                slug: '/validators/setup/parameters',
              },
              items: [
                // Ronin mainnet
                'validators/setup/parameters/mainnet',
                // Saigon testnet
                'validators/setup/parameters/testnet',
              ],
            },
            // Security hardening
            'validators/setup/security',
          ],
        },
        // Become a validator
        'validators/onboarding/become-validator',
        // Manage your account
        {
          type: 'category',
          label: 'Manage validator account',
          link: {
            type: 'generated-index',
            title: 'Manage your validator account', 
            description: 'Guides for increasing or withdrawing your stake, claiming rewards, and managing your validator account.',
            slug: '/validators/manage',
          },
          items: [
            // Add finality vote key
            'validators/manage/add-finality-vote-key',
            // Change commission rate
            'validators/manage/change-commission',
            // Claim rewards
            'validators/manage/claim-rewards',
            // Increase or move stake
            'validators/manage/increase-withdraw-stake',
            // Renounce role
            'validators/manage/renounce-role',
            // Schedule maintenance period
            'validators/manage/schedule-maintenance',
            // Take emergency exit
            'validators/manage/take-emergency-exit',
            // View activity
            'validators/manage/view-activity',
            // View analytics
            'validators/manage/view-analytics',
            // View profile
            'validators/manage/view-profile',            
          ],
        },
        // Slashing
        'validators/slashing',
        // Governance
        {
          type: 'category',
          label: 'Governance',
          link: {
            type: 'doc',
            id: 'validators/governance/overview',        
          },
          items: [
            // Create a proposal
            'validators/governance/create-proposal',
            // Vote on a proposal
            'validators/governance/vote-on-proposal',
          ],
        },
        // FAQ
        'validators/validator-faq',
      ],
    },
    {
      type: 'category',
      label: 'Bridge operators',
      link: {
        type: 'doc',
        id: 'bridge-operators/index',   
      },
      items: [
        {
          type: 'category',
          label: 'Run a node',
          link: {
            type: 'doc',
            id: 'bridge-operators/setup/overview',   
          },
          items: [
            'bridge-operators/setup/run-bridge-operator',
            'bridge-operators/setup/upgrade-bridge-operator',
          ],
        },
        {
          type: 'category',
          label: 'Governance',
          link: {
            type: 'doc',
            id: 'bridge-operators/governance/overview',        
          },
          items: [
            'bridge-operators/governance/create-proposal',
            'bridge-operators/governance/vote-on-proposal',
          ],
        },
        'bridge-operators/slashing',
      ],
    },
    // Community
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'doc',
        id: 'community/join', 
      },
      items: [
        {
          type: 'category',
          label: 'Contribute',
          link: {
            type: 'generated-index',
            description: 'Contribute to the Ronin documentation.',
            slug: '/community/contribute',
          },
          items: [
            // Contribution guide
            'CONTRIBUTING',
            // Content style guide
            'community/contribute/style-guide',
            // Content templates
            'community/contribute/templates',
          ],
        },
        // 'community/bug-bounty',
        // 'community/council',
        // 'community/governance',
        // 'community/grants',
      ],
    },
  ],
}

module.exports = sidebars
