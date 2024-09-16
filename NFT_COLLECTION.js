let numNfts = []; // Array to hold NFTs

// Function to mint an NFT
function mintNFT(name, createdBy, dateCreated, soldBy, soldTo) {
    const nft = {
        name: name,
        createdBy: createdBy,
        dateCreated: dateCreated,
        soldBy: soldBy,
        soldTo: soldTo
    };
    numNfts.push(nft);
}

// Function to list all minted NFTs
function listNFTs() {
    numNfts.forEach((nft, index) => {
        console.log(`NFT No. ${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Created By: ${nft.createdBy}`);
        console.log(`Date Created: ${nft.dateCreated}`);
        console.log(`Sold By: ${nft.soldBy}`);
        console.log(`Sold To: ${nft.soldTo}`);
        console.log('\n');
    });
}

// Function to print the total number of NFTs minted
function getTotalSupply() {
    console.log(`Total NFTs minted: ${numNfts.length}`);
}

// Mint some NFTs with updated dummy data
mintNFT('CryptoPunk #5822', 'Larva Labs', '21 February 2021', 'Alice Watson', 'Bob Johnson');
mintNFT('Azuki #40', 'Chiru Labs', '15 May 2022', 'Daniel Green', 'Eve Brown');
mintNFT('CloneX #1234', 'RTFKT', '7 July 2021', 'Frank Lee', 'Grace White');

// Print the details of all NFTs
listNFTs();

// Print the total supply of NFTs minted
getTotalSupply();
