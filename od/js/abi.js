var abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'a',
        type: 'address',
      },
    ],
    name: 'ATTACK',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'a',
        type: 'address',
      },
    ],
    name: 'CLAIM',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_i',
        type: 'uint256',
      },
    ],
    name: 'MINT',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'a',
        type: 'address',
      },
    ],
    name: 'PLAYERITEMS',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'player',
    outputs: [
      {
        internalType: 'uint256',
        name: 'wood',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'metal',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'food',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'ingot',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'soldier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastClaimed',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
