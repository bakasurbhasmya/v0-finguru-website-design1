import { google } from "googleapis";

export async function appendToSheet(data: {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}) {
  const { name, email, phone, interest, message } = data;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    auth,
    version: "v4",
  });

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = "Sheet1!A:F";

  const newRow = [new Date().toISOString(), name, email, phone, interest, message];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [newRow],
    },
  });
}
