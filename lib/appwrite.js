import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform : 'com.jsm.aora',
  projectId :  '66b9bfca002639d42225',
  databaseId : '66b9e474002f13c8a807',
  userCollectionId : '66b9e4cc000441c1c828',
  videoCollectionId: '66b9e530000ff233a004',
  storageId : '66ba1605001b4979bc3c'
  
};
const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId
} = appwriteConfig;





const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user in Appwrite backend
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;


    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);


    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl
      }
    );
    return newUser;


  } catch (error) {
    throw new Error(error);
  }
}
// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}
// Get current User
export async function  getCurrentUser (){
  try {

    const currentAccount = await account.get();

    if( !currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal ('accountId', currentAccount.$id)]
    )

    if (!currentUser) throw error;
    
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    
  }
}

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments (
      databaseId,
      videoCollectionId
    )
    return posts.documents;
  } catch (error) {

    throw new Error (error);


    
  }
}

