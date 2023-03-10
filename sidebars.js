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

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      // link: { type: 'doc', id: 'intro/introduction' },
      items: [
        {
          type: 'doc',
          label: 'Welcome to Ronin',
          id: 'intro/introduction',
        },
        {
          type: 'doc',
          label: 'Whitepaper (Testnet)',
          id: 'intro/whitepaper',
        },
        {
          type: 'doc',
          label: 'Roadmap',
          id: 'intro/road-map',
        },
        {
          type: 'category',
          label: 'Ronin Network',
          items: [
            {
              type: 'doc',
              label: 'Mainnet',
              id: 'intro/mainnet',
            },
            {
              type: 'doc',
              label: 'Saigon Testnet',
              id: 'intro/saigon-testnet',
            },
          ],       
        },  
        {
          type: 'doc',
          label: 'Tokenomics',
          id: 'intro/tokenomics',
        },
        {
          type: 'doc',
          label: 'Transaction life cycle',
          id: 'intro/transaction-lifecycle',
        },      
      ],
    },
    {
      type: 'category',
      label: 'Staking',
      link: { 
        type: 'generated-index',
        title: 'Staking', 
        description: 'Learn how to delegate your stake to preferred validators and claim rewards.'},
      items: [
        {
          type: 'doc',
          label: 'Become a delegator',
          id: 'staking/become-delegator',
        },
        {
          type: 'doc',
          label: 'Withdraw stake',
          id: 'staking/withdraw-stake',
        },
        {
          type: 'doc',
          label: 'Move stake',
          id: 'staking/move-stake',
        },
        {
          type: 'doc',
          label: 'Claim rewards',
          id: 'staking/claim-rewards',
        },
        {
          type: 'doc',
          label: 'FAQ',
          id: 'staking/faq',
        },
      ],
    },
    {
      type: 'category',
      label: 'Validator',
      link: { type: 'doc', id: 'validator/responsibilities' },
      items: [ 
        {
          type: 'category',
          label: 'Mainnet',          
          items: [
                {
                  type: 'link',
                  label: 'API',
                  href: 'https://documenter.getpostman.com/view/1372857/UVeKqQMn',
                },
                {
                  type: 'doc',
                  label: 'CLI',
                  id: 'validator/cli',
                },
                {
                  type: 'doc',
                  label: 'Minimum requirements',
                  id: 'validator/minimum-requirements',
                },
                // {
                //   type: 'doc',
                //   label: 'Responsibilities',
                //   id: 'validator/responsibilities',
                // },
                {
                  type: 'doc',
                  label: 'Run a Validator node',
                  id: 'validator/running-validating-node',
                },
                {
                  type: 'doc',
                  label: 'Run a Non Validator node',
                  id: 'validator/running-non-validating-node',
                },
                {
                  type: 'doc',
                  label: 'Upgrade Ronin Node',
                  id: 'validator/upgrade-ronin-node',
                },
          ],
        }, 
        {
          type: 'category',
          label: 'Testnet',
          // link: { type: 'doc', id: 'validator/val' },
          items: [
            {
              type: 'doc',
              label: 'Become a validator',
              id: 'validator/become-validator',
            },
            {
              type: 'doc',
              label: 'Run a validator node',
              id: 'validator/setup',
            },
            {
            type: 'category',
            label: 'Manage profile',
            items: [
              {
                type: 'doc',
                label: 'Change commission rate',
                id: 'validator/commission-rate',
              },
              {
                type: 'doc',
                label: 'Schedule maintenance mode',
                id: 'validator/maintenance-mode',
              },
              {
                type: 'doc',
                label: 'Renounce role',
                id: 'validator/renounce',
              },
              {
                type: 'doc',
                label: 'View activities',
                id: 'validator/view-activities',
              },
              {
                type: 'doc',
                label: 'View profile',
                id: 'validator/view-profile',
              },
              {
                type: 'doc',
                label: 'View analytics',
                id: 'validator/view-analytics',
              },
            ],
            },
            {
              type: 'category',
              label: 'Stake',
              items: [
                {
                  type: 'doc',
                  label: 'Increase stake',
                  id: 'validator/increase-stake',
                },
                {
                  type: 'doc',
                  label: 'Withdraw stake',
                  id: 'validator/withdraw-stake',
                },
              ],
              },
              {
                type: 'doc',
                label: 'Claim rewards',
                id: 'validator/rewards'
              },
              {
                type: 'doc',
                label: 'Slashing and bailout',
                id: 'validator/slashing',
                // items: [
                //   {
                //     type: 'doc',
                //     label: 'Slashing',
                //     id: 'validator/slashing',
                //   },
                //   {
                //     type: 'doc',
                //     label: 'Bailout',
                //     id: 'validator/bailout',
                //   },
                // ],
              },
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Bridge',
      // link: { type: 'doc', id: 'components/ronin-bridge-v2' },
      items: [
        {
          type: 'doc',
          label: 'Bridge V2',
          id: 'bridge/ronin-bridge-v2',
        },
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      link: { type: 'doc', id: 'governance/gov' },
      items: [
        // {
        //   type: 'doc',
        //   label: 'Create a proposal',
        //   id: 'governance/create',
        // },
        // {
        //   type: 'doc',
        //   label: 'Vote on a proposal',
        //   id: 'governance/vote',
        // },
      ],
    },
    {
      type: 'category',
      label: 'Developer Guides',
      // link: { type: 'doc', id: 'developer/dev' },
      items: [
        {
          type: 'category',
          label: 'Ronin Wallet Integration',
          items: [
            {
              type: 'doc',
              label: 'Wallet provider',
              id: 'developer-guide/integrate-ronin-wallet',
            },
            {
              type: 'doc',
              label: 'Network switching',
              id: 'developer-guide/switch-wallet-to-testnet',
            },
          ]
        },
        {
          type: 'category',
          label: 'Smart contract deploying',
          items: [
            {
              type: 'doc',
              label: 'Using Truffle',
              id: 'developer-guide/smart-contract-deploying/using-truffle',
            },
            {
              type: 'doc',
              label: 'Using Hardhat',
              id: 'developer-guide/smart-contract-deploying/using-hardhat',
            },
          ],
        },
      ],
    },
  ],
}

module.exports = sidebars
