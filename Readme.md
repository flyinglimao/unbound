# Unbound Protocol

**Release Your Creation to the World**

Unbound Protocol is a project on the Soneium blockchain designed to help creators transcend language and media boundaries through blockchain collaboration, enabling them to publish and sell their works globally.

## Project Structure

The project consists of two main components:

1. **app**: Website frontend and backend
2. **contract**: Smart contract component

## Website Component (app)

The website component is developed using the Next.js framework and deployed on the Vercel platform.

### Installation and Setup

1. First, clone the project repository:

```bash
git clone https://github.com/flyinglimao/unbound.git
cd unbound/app
```

2. Install dependencies:

```bash
yarn install
```

3. Configure environment variables:

   - Create a `.env` file in the `app` directory based on the provided `.env.example` file
   - Add the necessary environment variables as specified in the example file

4. Execute Prisma database migration:

```bash
yarn prisma migrate dev
```

### Starting the Development Server

Follow the standard Next.js startup procedure to launch the development server:

```bash
yarn dev
```

The application will run on `http://localhost:3000`.

### Production Deployment

The project is configured for automatic deployment on Vercel. When code is pushed to the main branch, Vercel will automatically build and deploy the application.

## Smart Contract Component (contract)

The contract component uses Sequence's custom Sale contract and is developed, tested, and deployed using the Foundry framework.

### Installation and Setup

1. Navigate to the contract directory:

```bash
cd unbound/contract
```

2. Install Foundry dependencies:

```bash
forge install
```

### Compiling Contracts

```bash
forge build
```

### Running Tests

```bash
forge test
```

### Deploying Contracts

1. Set up deployment environment variables (can be configured in the `.env` file):

```
PRIVATE_KEY=your_private_key
RPC_URL=your_rpc_url
ETHERSCAN_API_KEY=your_etherscan_api_key
```

2. Execute the deployment script:

```bash
forge script script/DeployUnboundBookStore.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast
```

Note: You may need to update the contract address in the script.

## Feature Overview

Unbound Protocol establishes an Unbound Book Store for selling book NFTs, where readers gain reading access by holding NFTs. Key features include:

1. **AI Translation**: Creators only need to upload their work in any language, and it can be translated into other languages and start selling.

2. **Copyright Tokenization**: Through tokenized copyright, creators can obtain initial capital to focus on creation while sharing sales revenue with translators, local promoters, and investors.

3. **Media Transformation**: Uploaded works can be converted into different forms, such as transforming novels into comics, animations, radio dramas, etc.

## Market Opportunity

- Over 200 million content creators worldwide
- 76% of consumers prefer to browse and purchase content in their native language
- Only about 3% of creative works are translated into other languages globally

Through Unbound Protocol, we aim to break down language isolation and help creative works realize their full potential value.

## Technical Support

For any questions or assistance, please refer to the project documentation or contact the development team.
