// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// create contract for the PictureAssets with 4 field (id, name, description, vote)
contract PictureAssets {
	uint public pictureCount = 0;

	struct Picture {
		uint id;
		string accountAddress;
		string ipfsInfo;
		string name;
		string description;
		uint vote;
	}

	mapping(uint => Picture) public pictures;

	event PictureCreated (
		uint id,
		string accountAddress,
		string ipfsInfo,
		string name,
		string description,
		uint vote
	);

	event PictureVote (
		uint id,
		uint vote
	);

	constructor() {
		// createPicture("Check out derektruong.com");
	}

	function createPicture(string memory accountAddress, string memory ipfsInfo, string memory name, string memory description, uint vote) public {
		pictureCount ++;
		pictures[pictureCount] = Picture(pictureCount, accountAddress, ipfsInfo, name, description, vote);

		emit PictureCreated(pictureCount, accountAddress, ipfsInfo, name, description, vote);
	}

	function votePicture(uint _id) public {
		Picture memory _picture = pictures[_id];
		_picture.vote ++;
		pictures[_id] = _picture;
		emit PictureVote(_id, _picture.vote);
	}
	
}