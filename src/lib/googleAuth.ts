import { JWT } from "google-auth-library";

// Define an interface for the structure of the decoded service account JSON
interface IServiceAccount {
  client_email: string;
  private_key: string;
}

const getServiceAccountAuth = (): JWT => {
  const keyFromEnv = process.env.GCP_SERVICE_ACCOUNT_BASE64;

  if (!keyFromEnv) {
    throw new Error(
      "GCP_SERVICE_ACCOUNT_BASE64 environment variable is not set.",
    );
  }

  // Decode the Base64 string back into a standard UTF-8 JSON string
  const decodedKey = Buffer.from(keyFromEnv, "base64").toString("utf-8");

  // Parse the JSON string and cast it to our interface for type safety
  const serviceAccount: IServiceAccount = JSON.parse(decodedKey);

  // Return the configured JWT instance
  return new JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: [
      "https://www.googleapis.com/auth/documents",
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
    ],
  });
};

const serviceAccountAuth = getServiceAccountAuth();

export default serviceAccountAuth;
