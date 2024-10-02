import { Client } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: "com.onk.rn",
    projectId: "66fd66110038ccb3d919",
    databaseId: "66fd6b38001412e2e70e",
    userCollectionId: "66fd6b870034d8523ec7",
    videoCollectionId: "66fd6bb00029d4fabe2c",
    storageId: "66fd6dbb000a1c71fc40"

}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);

// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
