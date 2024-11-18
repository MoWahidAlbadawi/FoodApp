import { Client , Databases } from 'appwrite';
import { KEYS } from '../../Keys';

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(KEYS.PROJECT_ID);

const databases = new Databases(client);

export default databases;


