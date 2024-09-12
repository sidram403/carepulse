import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();
// client.setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT ?? '').setProject(process.env.PROJECT_ID ?? '').setKey(process.env.API_KEY ?? '');


client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66ddf367003cbb1a3846").setKey("standard_64dc109eb30851bf4f8dd04f3c604ab8b48bd8829af760afd3517ead8301987baec95215d929fb281776c916134d5a03fd8dd2b903b3d115f0407686a3c7ae115c35362f8d3be2e463eea004d322251c3ee7ab607044c70f18ea6daf4653cefb3da35b1a47df40edf3b5097674067013031dd97da80a6fb286eb585299dcd836");

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);