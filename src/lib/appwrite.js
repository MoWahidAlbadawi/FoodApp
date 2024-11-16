import { Client , Databases } from 'appwrite';

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject('67345d3e002ce67179fa');

const databases = new Databases(client);

export default databases;


